const areas = () => {
	const number = 10;
	
	return value => {
		return value - number
	}
}

const subtract = areas();
console.log(subtract(100));