function showPriceInRub(arg) {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
	}).format(arg)
}

export default showPriceInRub
