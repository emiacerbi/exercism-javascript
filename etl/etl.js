export const transform = (data) => {
	let newObject = {}
	for (let key of Object.keys(data)) {
		for (let value of data[key]) {
			newObject[value.toLowerCase()] = parseInt(key)
		}
	}

	return newObject
}
