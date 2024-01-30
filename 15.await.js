const getPercentOfSize = async (url, percent) => {
	const getPercentOfNumber = (number, percent) => {
		return new Promise(resolve => {
			resolve(number * percent / 100)
		})
	}
	
	const getPictureInfo = async (url) => {
		const img = new Image();
		img.src = url;
		await img.decode();
		return {
			width: img.width,
			height: img.height
		}
	}
	
	const sizes = await getPictureInfo(url);
	
	const width = await getPercentOfNumber(sizes.width, percent);
	const height = await getPercentOfNumber(sizes.height, percent);
	
	return {
		width,
		height
	}
}

const url = "/blank.gif";

getPercentOfSize(url, 50).then(console.log)
