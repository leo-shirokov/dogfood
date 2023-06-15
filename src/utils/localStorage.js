export function getDefaultOrLocalStorage(defaultData, storageName = 'user') {
	let data = defaultData
	try {
		const storedData = JSON.parse(localStorage.getItem(storageName))
		if (storedData) data = storedData
	} catch (error) {}
	return data
}
export function setLocalStorage(data, storageName) {
	localStorage.setItem(storageName, JSON.stringify(data))
}
export function clearLocalStorage(storageName) {
	localStorage.removeItem(storageName)
}
