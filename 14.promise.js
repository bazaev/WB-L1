const getPictureInfo = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(response => response.blob())
			.then(blob => {
				const img = new Image();
				img.onload = () => {
					resolve({
						width: img.width,
						height: img.height
					});
				}
				img.onerror = reject;
				img.src = URL.createObjectURL(blob);
			})
	})
}

const getPictureInfoV2 = async (url) => {
	const response = await fetch(url);
	const blob = await response.blob();
	const img = new Image();
	img.src = URL.createObjectURL(blob);
	await img.decode();
	return {
		width: img.width,
		height: img.height
	}
}

const getPictureInfoV3 = (url) => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			resolve({
				width: img.width,
				height: img.height
			})
		}
		img.onerror = reject;
		img.src = url;
	})
}

const getPictureInfoV4 = async (url) => {
	const img = new Image();
	img.src = url;
	await img.decode();
	return {
		width: img.width,
		height: img.height
	}
}

const url = "/blank.gif";

getPictureInfo(url)
	.then(console.log)
	.catch(console.log);

getPictureInfoV2(url)
	.then(console.log)
	.catch(console.log);

getPictureInfoV3(url)
	.then(console.log)
	.catch(console.log);

getPictureInfoV4(url)
	.then(console.log)
	.catch(console.log);
