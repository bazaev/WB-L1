const functionsCall = (functions) => {
	// Перебираем массив функций
	for (const func of functions) {
		// Вызываем функцию и выводим результат
		console.log(func())
	}
}

const functionsCallV2 = (functions, key = 0) => {
	// Помещаем в константу функцию по индексу
	const func = functions[key];
	// Если функция существует
	if (func) {
		// Вызываем функцию и выводим результат
		console.log(func());
		// Рекурсивно вызываем функцию со следующим индексом
		functionsCallV2(functions, key + 1);
	}
}

const functions = [
	() => 0,
	() => 1,
	() => 2
];

functionsCall(functions);
functionsCallV2(functions);