const localStorageUsage = () => {
	// Получаем длину localStorage
	const storageLength = localStorage.length;
	let total = 0;

	// Перебираем localStorage
	for (let i = 0; i < storageLength; i++) {
		// Получаем ключ
		const key = localStorage.key(i);
		// Получаем значение
		const value = localStorage.getItem(key);
		// Получаем размер
		const itemSize = value.length;

		// Суммируем
		total += itemSize;
	}

	// Переводим байты в килобайты
	const totalSizeKB = total / 1024;
	
	// Возвращаем
	return totalSizeKB;
}

console.log(localStorageUsage())