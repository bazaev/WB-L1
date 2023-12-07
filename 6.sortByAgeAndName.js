const sort = (arr) => {
	// Задаём констансту с длиной массива
	// во избебжание повторных вычислений
	const arrLength = arr.length;

	// Создаём массив с первым элементом arr
	const sorted = [arr[0]];

	// Сортируем элементы посредством цикла
	for (let i = 1; i < arrLength; i++) {
		// Задаём констансту с длиной массива
		// во избебжание повторных вычислений
		const sortedLength = sorted.length;

		// Перебираем сортированный массив для
		// поиска ближайшего к возрасту элемента
		for (let j = 0; j < sortedLength; j++) {
			// Если возраст элемента сортированного
			// массива равен возрасту текущего элемента
			if (arr[i].age === sorted[j].age) {
				// Сравниваем "вес" имён между собой
				// посредством localeCompare
				if (arr[i].name.localeCompare(sorted[j].name) < 0) {
					// Вставляем текущий элемент перед
					// элементом сортированного массива
					sorted.splice(j, 0, arr[i]);
					
					// Завершаем цикл
					break;
				}
			}

			// Если возраст текущего элемента меньше
			// возраста элемента сортированного массива
			if (arr[i].age < sorted[j].age) {
				// Вставляем текущий элемент перед
				// элементом сортированного массива
				sorted.splice(j, 0, arr[i]);

				// Завершаем цикл
				break;
			}
			
			// Если мы достигли конца массива
			if (j === sortedLength - 1) {
				// Вставляем текущий элемент в конец
				sorted.push(arr[i]);
				
				// Завершаем цикл
				break
			}
		}
	}

	// Возвращаем отсортированный массив
	return sorted;
}

const arr = [
	{
		name: "Alexey Ivanov",
		age: 50
	},
	{
		name: "Ervin Howell",
		age: 14
	},
	{
		name: "Kurtis Xeissnat",
		age: 37
	},
	{
		name: "Chelsey Dietrich",
		age: 34
	},
	{
		name: "Kurtis Weissnat",
		age: 37
	},
	{
		name: "Александ Иванов",
		age: 50
	},
	{
		name: "Clementina DuBuque",
		age: 14
	},
]

const result = sort(arr);

console.log(result)
