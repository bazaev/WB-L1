const callStackSize = () => {
	try {
	// Рекурсивная функция для заполнения стека вызовов
	const recursiveCall = () => {
		recursiveCall()
	}

	// Вызываем рекурсивную функцию
	recursiveCall()
	} catch (error) {
		// Ловим ошибку стека вызовов
		console.log(error.stack.split('\n').length)
	}
}

callStackSize();