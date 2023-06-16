document.addEventListener("DOMContentLoaded", () => {

	document.querySelector("#canvas").addEventListener('click', function(event){
		// console.log(event.pageX, event.pageY);
		if (!start) 
			startButton.checkClicked(event);
	})

	document.addEventListener('keydown', (event) => {
		// console.log(event.code);
		switch (event.code) {
			case "ArrowUp":
				// console.log("up");
				mySnake.setDirection("up");
				break;
			case "ArrowDown":
				// console.log("down");
				mySnake.setDirection("down");
				break;
			case "ArrowRight":
				// console.log("right");
				mySnake.setDirection("right");
				break;
			case "ArrowLeft":
				// console.log("left");
				mySnake.setDirection("left");
				break;
			default:
				console.log("undefined");
		}
	})

	// const myBlock = new Block(3,3);
	// const myCircle = new Block(10, 10);
	const myApple = new Apple();
	const mySnake = new Snake(myApple);
	
	// let counter = 0;
    const mainloop = setInterval( () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		border.draw();
        scoreText.draw();
		// myBlock.drawSquare();
		// myCircle.drawCircle();
		myApple.draw();
		mySnake.draw();
		if (!gameOver && start)
			mySnake.move();
		else
			startButton.draw();
		if (gameOver){
			gameOverText.draw();
			clearInterval(mainloop);
		}
		// console.log(counter);
		// counter++;
	}, 1000/fps) // 5 fps

})