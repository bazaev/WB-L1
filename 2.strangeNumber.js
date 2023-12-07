const strangeNumber = number => {
	// Делим число на 2 т.к. деление на бОльшую половину не имеет смысла
	const half = number / 2;

	// Задаём переменную суммы множества
	let setsSumm = 1;

	// Проходимся циклом от 2 до N/2
	for (let i = 2; i <= half; i++) {
		// Если число делится без остатка,
		// добавляем к сумме множества
		if (number % i === 0) {
			setsSumm += i
		}
	}
	
	// Возвращаем результат сравнения суммы множителей с числом N (number)
	return setsSumm === number;
}

for (let i = 1; i <= 10000; i++) {
	const strange = strangeNumber(i);
	if (strange) {
		console.log(i, strange)
	}
}
