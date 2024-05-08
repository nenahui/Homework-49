const chessBoard = (size: number) => {
	let emptyString = '';

	for (let i = 0; i < size; i++) {
		emptyString += '\n';
		for (let j = 0; j < size; j++) {
			const cellBlack = (i + j) % 2 === 0;
			emptyString += cellBlack ? '██' : '  ';
		}
	}

	console.log(emptyString);
}