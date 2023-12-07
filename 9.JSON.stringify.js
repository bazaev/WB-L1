const JSONstringify = (object) => {
	// Создаём функцию-помощник для получения типа элемента.
	// Возвращает: Object, Array, Number...
	const getType = item => Object.prototype.toString.call(item).slice(8, -1);

	const parse = object => {
		let str = "";
		// Перебор каждого ключа в объекте
		for (let key in object) {
			// Пропуск значений undefined
			if (object[key] === undefined) { continue }

			const value = object[key];
			const TObject = getType(object);
			const TValue = getType(value);
			
			// Если в str уже есть данные,
			// отделяем их запятой
			if (str) {
				str += ",";
			}

			// Если тип аргумента object - Object,
			// добавляем ключ в str объединением строк
			if (TObject === 'Object') {
				str += `"${key}":`;
			}
			
			// В соответсвии с условиями проверок
			// прозводим манипуляции с значениями
			// и объединяем их с str
			if (TValue === 'Object' || TValue === 'Array') {
				str += parse(value);
			}else if (TValue === 'Number') {
				str += `${value}`;
			}else if (TValue === 'String') {
				str += `"${value.replaceAll("\"","\\\"")}"`;
			}else if (TValue === 'Date') {
				str += `"${value.toJSON()}"`;
			}else if (TValue === 'RegExp') {
				str += "{}";
			}else{
				str += value;
			}
		}

		// Если в качестве аргуммент пришёл массив
		if (getType(object) === 'Array') {
			// Обрамляем результат квадратными скобками
			str = `[${str}]`;
		}else{
			// Иначе обрамляем результат фигурными скобками
			str = `{${str}}`;
		}

		// Возвращаем результат
		return str;
	}
	return parse(object);
}

const object = {
	string: 'Hello',
	number: 42,
	boolean: true,
	array: [1, 2, 3, { key: 'val"u,e' }],
	object: { key: 'value', newKey: { nestedKey: 'nestedValue' } },
	date: new Date(),
	regexp: /[a-z]+/,
	nullValue: null,
	undefinedValue: undefined
};


console.log(JSONstringify(object) === JSON.stringify(object))