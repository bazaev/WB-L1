const MathX = (function() {

	function isPrime(number) {
		// Если число меньше 2 - возвращаем false
		if (number < 2) {
			return false
		}

		// Делим число на 2 т.к. деление на бОльшую половину не имеет смысла
		const half = number / 2;
		
		// Перебираем множество,
		// если число делится хоть на одно - возвращаем false
		for (var i = 2; i <= half; i++) {
			if (number % i === 0) {
				return false
			}
		}

		// Условие выше не сработало - число простое. Возвращаем true
		return true
	}
	
	function nthFibonacciNumber(number) {
		// Если число меньше 2 - возвращаем число
		if (number < 2) {
			return number
		} else {
			// Рекурсией вычисляем число N в ряду Фибоначчи и возвращаем его
			return nthFibonacciNumber(number - 1) + nthFibonacciNumber(number - 2);
		}
	}

	function getFibonacciBeforeNumber(number, numbers = [1,0]) {
		// Вычисляем следующее число Фибоначчи
		const newNumber = numbers[0] + numbers[1];

		// Если новое число меньше или равно заданному числу,
		// добавляем его в начало массива и рекурсивно вызываем функцию
		if (newNumber <= number) {
			numbers.unshift(newNumber);
			getFibonacciBeforeNumber(number, numbers);
		}

		// Реверсируем массив, чтобы получить числа Фибоначчи в правильном порядке
		numbers.reverse();

		// Возвращаем массив чисел Фибоначчи
		return numbers;
	}

	function nthPrimeNumber(number) {
		// Кандидат на следующее простое число
		let candidate = 1;

		// Счетчик простых чисел
		let count = 0;

		// Пока счетчик простых чисел меньше заданного числа
		while(count < number) {
			// Инкриментируем кандидата
			candidate++

			// Если кандидат является простым числом - увеличиваем счетчик
			if (isPrime(candidate)) {
				count++
			}
		}

		// Возвращаем найденное простое число в позиции N (number)
		return candidate;
	}

	function getPrimeBeforeNumber(number, primeNumbers = []) {
		// Кандидат на следующее простое число
		let candidate = 1;

		// Пока кандидат меньше заданного числа N (number)
		while(candidate <= number) {
			// Инкриментируем кандидата
			candidate++

			// Если кандидат является простым числом - добавляем его в массив
			if (isPrime(candidate)) {
				primeNumbers.push(candidate)
			}
		}

		// Возвращаем массив простых чисел
		return primeNumbers
	}
	
	// Возвращаем объект с публичными функциями
	return {
		nthFibonacciNumber,
		getFibonacciBeforeNumber,
		nthPrimeNumber,
		getPrimeBeforeNumber
	}
})();

console.log(MathX.nthFibonacciNumber(10));
console.log(MathX.getFibonacciBeforeNumber(89));
console.log(MathX.nthPrimeNumber(11));
console.log(MathX.getPrimeBeforeNumber(31));

// export default MathX;