const mazeCreator = (sisi) => {
	if (sisi % 4 !== 3) {
		return console.log("\nInput tidak sesuai, silahkan ulang program\n");
	}

	const array = [];
	let pattern = "";

	for (i = 0; i < parseInt(sisi / 2 + 1); i++) {
		for (j = 0; j < sisi; j++) {
			if (j % 2 == 0) {
				if (j == 0) {
					array[i] = [];
				}

				array[i][j] = "@";
			}

			if (j % 2 == 1) {
				array[i][j] = " ";
			}

			if (j >= i + 2 && j <= sisi - (i + 1)) {
				if (i % 2 == 0) {
					array[i][j] = "@";
				}

				if (i % 2 == 1) {
					array[i][j] = " ";
				}
			}
		}
	}

	for (j = 0; j < array.length; j++) {
		pattern += array[j].join("") + "\n";
	}

	for (j = array.length - 2; j >= 0; j--) {
		pattern += array[j].reverse().join("") + (j != 0 ? "\n" : "");
	}

	console.log(pattern);
};

module.exports = mazeCreator;
