const functionsCallAndReturn = (functions) => {
	// Возвращаем функцию, которая будет возвращать массив результатов
	return () => {
		const results = [];
		// Перебираем массив функций
		for (const func of functions) {
			// Вызываем функцию и записываем результат
			const result = func();
			// Добавляем результат в массив
			results.push(result);
		}
		// Возвращаем массив результатов
		return results
	}
}

const functionsCallAndReturnV2 = (functions) => {
	// Возвращаем функцию, которая будет возвращать массив результатов
	return function callAndReturn(key = 0, results = []) {
		// Присваиваем константе функцию по индексу
		const func = functions[key];
		// Если функция существует
		if (func) {
			// Вызываем функцию и записываем результат
			const result = func();
			// Добавляем результат в массив
			results.push(result);
			// Рекурсивно вызываем функцию со следующим индексом
			callAndReturn(key + 1, results);
		}
		// Возвращаем массив результатов
		return results
	}
}

const functions = [
	() => 0,
	() => 1,
	() => 2
];

console.log(functionsCallAndReturn(functions)())
console.log(functionsCallAndReturnV2(functions)())