// console.log("ready!");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const blockSize = 20; // setiap kotak 20px
const column = canvas.width /  blockSize; // jumlah kolom
const row = column; // jumlah baris
// console.log(column, row);

//CONFIG GAME
const fps = 5;
let score = 0;
let start = false;
let gameOver = false;