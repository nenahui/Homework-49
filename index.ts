const chessBoard = (size: number) => {
	const container = document.createElement('ul')
	container.style.width = `${size * 20}px`

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const cell = document.createElement('li')
			;(i + j) % 2 === 0 ? (cell.className = 'cell-black') : null
			container.append(cell)
		}
	}
	document.body.append(container)
}

chessBoard(30);