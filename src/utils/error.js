// служебная функция, проверяющая имеет ли объект ответа из API код состояния ошибки
export const printError = async (res) => {
	if (!res.ok) throw new Error('Ошибка')
	return res.json()
}

export default printError
