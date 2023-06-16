class Snake {

    constructor(apple) {
        this.segments = [
            new Block(4, 10), //Head
            new Block(4, 9),
            new Block(4, 8)
        ]
        this.direction = "right";
        this.apple = apple;
    }

    draw() {
        this.segments.forEach( (segment) => {
            segment.drawSquare("LightBlue");
        } )
    }

    setDirection(newDirection){

        if (this.direction === "up" && newDirection === "down") return;
        else if (this.direction === "down" && newDirection === "up") return;
        else if (this.direction === "left" && newDirection === "right") return;
        else if (this.direction === "right" && newDirection === "left") return;
        this.direction = newDirection;
        // console.log(this.direction);

    }

    move(){
        let head = this.segments[0];
        let newHead;

        if (this.direction === "right") newHead = new Block(head.row, head.column+1);
        else if (this.direction === "down") newHead = new Block(head.row+1, head.column);
        else if (this.direction === "left") newHead = new Block(head.row, head.column-1);
        else if (this.direction === "up") newHead = new Block(head.row-1, head.column);


        this.segments.unshift(newHead);
        // this.segments.pop();

        if (this.eatApple(head)){
            score++;
            this.apple.show();
        } else {
            this.segments.pop();
        }

        if (this.checkCollision(head))
            gameOver = true;

    }

    eatApple(head){
        if (head.row === this.apple.row && head.column === this.apple.column)
            return true;
        return false;
    }

    checkCollision(head){
        const leftCollision = head.column === 0;
        const topCollision = head.row === 0;
        const rightCollision = head.column === column - 1;
        const bottomCollision = head.row === row - 1;

        const wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

        // this.segments.forEach((segment, i) => {
        //     // console.log(head.row, segment.row, head.column, segment.column);
        //     if (head.row === segment.row && head.column === segment.column){
        //         const selfCollision = true;
        //         return selfCollision;
        //     }
        // });
        return wallCollision;

    }
}