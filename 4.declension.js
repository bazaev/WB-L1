const declension = (words, number) => {
	// Получаем число из сотой части
	number = Math.abs(number) % 100;

	// Получаем число из десятой от сотой части 
    const number10 = number % 10;
	
	// Возвращаем слово в зависимости от диапозона числа
	if (number > 10 && number < 20) {
		return words[2]
	}else if (number10 > 1 && number10 < 5) {
		return words[1]
	}else if (number10 === 1) {
		return words[0]
	}else {
		return words[2]
	}
}

const declensionV2 = (words, number) => {
	// Получаем число сотой части
	number = Math.abs(number) % 100;

	// Получаем число десятой части
    const number10 = number % 10;

	// Массив с ключами слов под величину числа
    const cases = [2, 0, 1, 1, 1, 2];

	// Вычисляем диапозон числа и возвращаем ключ
	// в селектор массива words, тем самым возвращая
	// слово в нужном склонении
    return words[(number > 4 && number < 20) ? 2 : cases[(number10 < 5) ? number10 : 5]];
}

const words = ["сообщение", "сообщения", "сообщений"];

console.log(declension(words, 2));
console.log(declensionV2(words, 2));