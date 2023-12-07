function JSONParse(json) {
    let index = 0;

    const parseValue = () => {
        // Получаем первый символ
        const char = json[index];

        if (char === 't') {
            index += 4; // true
            return true;
        } else if (char === 'f') {
            index += 5; // false
            return false;
        } else if (char === 'n') {
            index += 4; // null
            return null;
        } else if (char === '"') {
            return parseString();
        } else if (char === '{') {
            return parseObject();
        } else if (char === '[') {
            return parseArray();
        } else {
            return parseNumber();
        }
    }

    const parseString = () => {
        // Пропускаем открывающую кавычку
        let start = ++index;

        // Пропускаем символы до закрывающей кавычки
        while (json[index] !== '"' || json[index - 1] === '\\') {
            index++;
        }

        // Обрезаем строку от открывающей кавычки до закрывающей
        let value = json.slice(start, index);
        // Заменяем экранированные символы
		value = value.replace(/(?<!\\)\\/g, '');

		// Пропускаем закрывающую кавычку
        index++;

        // Возвращаем обрезанную строку
        return value;
    }

    const parseNumber = () => {
        let start = index;

        // Пропускаем цифры
        while (/[\d.+\-eE]/.test(json[index])) {
            index++;
        }

        // Обрезаем строку от первой цифры до последней
        const value = json.slice(start, index);

		// Возвращаем число
        return parseFloat(value);
    }

    const parseArray = () => {
        const result = [];
        index++; // Пропускаем открывающую квадратную скобку

        // Пока не встретим закрывающую квадратную скобку
        while (json[index] !== ']') {
            // Парсим значение
            const value = parseValue();
            // Добавляем значение в массив
            result.push(value);

            // Если встретили запятую
            if (json[index] === ',') {
                index++; // Пропускаем запятую
            }
        }

        index++; // Пропускаем закрывающую квадратную скобку

        // Возвращаем массив
        return result;
    }

    const parseObject = () => {
        const result = {};
        index++; // Пропускаем открывающую фигурную скобку

        // Пока не встретим закрывающую фигурную скобку
        while (json[index] !== '}') {
            // Парсим ключ
            const key = parseString();
            index++; // Пропускаем двоеточие

			// Парсим значение
            const value = parseValue();
            result[key] = value;

            // Если встретили запятую
            if (json[index] === ',') {
                index++; // Пропускаем запятую
            }
        }

        index++; // Пропускаем закрывающую фигурную скобку

        // Возвращаем объект
        return result;
    }

    // Парсим JSON
    return parseValue();
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

const json = JSON.stringify(object);
console.log(JSON.stringify(JSONParse(json)) === JSON.stringify(JSON.parse(json)));