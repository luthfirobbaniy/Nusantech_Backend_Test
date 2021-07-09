const io = require("./helper/io.js");
const mazeCreator = require("./maze/mazeCreator");

const question =
	"\nPetunjuk:\n" +
	"- Masukkan Sisi Maze dengan nilai yang dapat dinyatakan dalam 4n - 1 dengan 'n' bilangan bulat positif. \n" +
	"- Contoh nilai Sisi Maze: 3, 7, 11, 15, dst. \n\n" +
	"Masukkan Sisi Maze: ";

io.question(question, (sisi) => {
	mazeCreator(sisi);
	io.close();
});
