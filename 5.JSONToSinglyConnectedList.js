const JSONToSinglyConnectedList = (json) => {
	// Парсим JSON
	json = JSON.parse(json);
	
	// Получаем длину JSON
	const jsonLength = json.length;

	// Получаем первый элемент
	const list = json[0];
	// Устанавливаем первый элемент как следующий
	let current = list;

	// Перебираем остальные элементы
	for (let i = 1; i < jsonLength; i++) {
		// Добавляем следующий элемент в ключ next
		current.next = json[i]
		// Устанавливаем текущий элемент как следующий
		current = current.next;
	}

	// Возвращаем список
	return list;
}

const json = `[{"value":1},{"value":2},{"value":3},{"value":4},{"value":5}]`;

console.log(JSONToSinglyConnectedList(json));