// Получаем ссылки на DOM-элементы
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const conversionStatus = document.getElementById('conversion-status');
const fileListDisplay = document.getElementById('file-list');
const statusTextDisplay = document.getElementById('status-text-display');
const downloadButton = document.getElementById('download-button');

let downloadUrl = null; // Для хранения ссылки на сгенерированный файл

// Навешиваем обработчики событий
uploadArea.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) handleFiles(e.target.files);
});

// Drag and Drop события
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
});
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    if (e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files);
});

/**
 * Конвертирует один файл в BTX-объект.
 * Возвращает Promise, который разрешается с объектом { name, content }.
 * @param {File} file - Файл для конвертации.
 * @returns {Promise<{name: string, content: string}>}
 */
function convertToBtx(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (event) => {
            const btxData = {
                format: "BTX Packager",
                version: "1.0",
                timestamp: new Date().toISOString(),
                source: {
                    name: file.name,
                    size: file.size,
                    type: file.type || "unknown", // Некоторые файлы могут не иметь типа
                },
                payload: event.target.result // Base64-строка с данными файла
            };
            const btxString = JSON.stringify(btxData, null, 2);
            resolve({
                name: file.name + '.btx',
                content: btxString
            });
        };

        reader.onerror = (error) => reject(error);

        // Читаем любой файл как Base64
        reader.readAsDataURL(file); 
    });
}

/**
 * Основная асинхронная функция для обработки нескольких файлов.
 * @param {FileList} files - Список файлов от input или drop.
 */
async function handleFiles(files) {
    if (files.length === 0) return;
    
    // 1. Сброс интерфейса в начальное состояние
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    uploadArea.style.display = 'none';
    conversionStatus.style.display = 'block';
    downloadButton.style.display = 'none';
    fileListDisplay.innerHTML = '';
    
    // 2. Отображаем список выбранных файлов
    Array.from(files).forEach(file => {
        const li = document.createElement('li');
        li.textContent = file.name;
        fileListDisplay.appendChild(li);
    });
    
    try {
        // 3. Конвертация всех файлов параллельно
        statusTextDisplay.style.color = 'var(--light)';
        statusTextDisplay.textContent = `Обработка ${files.length} файлов...`;
        
        const btxPromises = Array.from(files).map(file => convertToBtx(file));
        const btxResults = await Promise.all(btxPromises);

        // 4. Создание ZIP-архива с помощью JSZip
        statusTextDisplay.textContent = 'Создание ZIP-архива...';
        const zip = new JSZip();
        
        btxResults.forEach(btxFile => {
            zip.file(btxFile.name, btxFile.content);
        });

        // Генерируем Blob из архива
        const zipBlob = await zip.generateAsync({
            type: "blob",
            compression: "DEFLATE",
            compressionOptions: { level: 9 } // Максимальное сжатие
        });

        // 5. Создание ссылки на скачивание и обновление UI
        downloadUrl = URL.createObjectURL(zipBlob);
        
        statusTextDisplay.style.color = 'var(--success)';
        statusTextDisplay.textContent = 'Готово!';
        
        downloadButton.href = downloadUrl;
        downloadButton.setAttribute('download', 'project.zip');
        downloadButton.style.display = 'block';

        // Добавляем или показываем ссылку для сброса
        let convertAnotherLink = conversionStatus.querySelector('.convert-another-link');
         if (!convertAnotherLink) {
            convertAnotherLink = document.createElement('a');
            convertAnotherLink.href = "#";
            convertAnotherLink.textContent = 'Упаковать другие файлы';
            convertAnotherLink.classList.add('convert-another-link');
            convertAnotherLink.style.cssText = `
                display: block;
                text-align: center;
                margin-top: 1.5rem;
                color: var(--primary);
                text-decoration: none;
            `;
            convertAnotherLink.addEventListener('click', (e) => {
                e.preventDefault();
                resetConverter();
            });
            conversionStatus.appendChild(convertAnotherLink);
         }
         convertAnotherLink.style.display = 'block';

    } catch (error) {
        statusTextDisplay.style.color = 'var(--accent)';
        statusTextDisplay.textContent = 'Произошла ошибка при обработке файлов.';
        console.error("Processing error:", error);
    }
}

/**
 * Сбрасывает интерфейс конвертера в исходное состояние.
 */
function resetConverter() {
     if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
     }
     fileInput.value = ''; // Сбрасываем значение input
     conversionStatus.style.display = 'none';
     uploadArea.style.display = 'block';
}