const passwordDifficulty = (password) => {
	// Уровни пароля
	const levels = ["Лёгкий", "Средний", "Сложный"];
	// Сообщения с информацией о недостатках
	const messages = {
		length: "Слишком короткий пароль",
		uppercase: "Добавьте буквы в верхнем регистре",
		lowercase: "Добавьте буквы в нижнем регистре",
		number: "Добавьте цифры",
		special: "Добавьте специальные символы"
	}

	const test = (password) => {
		// false если пароль слишком короткий
		const length = password.length > 7;
		// Проверяем наличие букв в верхнем регистре
		const uppercase = /[A-Z]/.test(password);
		// Проверяем наличие букв в нижнем регистре
		const lowercase = /[a-z]/.test(password);
		// Проверяем наличие цифр
		const number = /[0-9]/.test(password);
		// Проверяем наличие специальных символов
		const special = /[^A-Za-z0-9]/.test(password);
	
		// Возвращаем объект с результатами
		return {
			length,
			uppercase,
			lowercase,
			number,
			special
		}
	}
	
	// Получаем результат
	const result = test(password);
	
	// Переменная количества выполненных условий
	let completed = 0;
	// Массив сообщений
	const message = [];
	
	// Проверяем количество недостатков
	for (const key in result) {
		// Если проверка прошла
		if (result[key]) {
			// Увеличиваем количество выполненных условий
			completed++;
		}else{
			// Добавляем сообщение о недостатке
			message.push(messages[key])
		}
	}
	
	// Вычисляем уровень сложности относительно количества уровней
	const level = (completed / 5 * 3).toFixed() - 1;

	// Получаем текст уровня
	const levelText = levels[level];
	
	// Возвращаем объект с результатами
	return {
		level,
		levelText,
		message
	}
	
}

console.log(passwordDifficulty('a!!!A1'));