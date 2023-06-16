class Block {

    constructor (row, column){
        this.row = row;
        this.column = column;

        this.size = blockSize;
    }

    circle(x, y, radius, color, isFilled) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        //  ctx.arc(titkX, titikY, startAngle, endAngle, clockwise); false = clockwise
        ctx.arc(x, y, radius, 0, 2*Math.PI, false);
        ctx.closePath();
        ctx.stroke();
        if (isFilled){
            ctx.fillStyle = color;
            ctx.fill();
        }
    }
    
    drawSquare(color){
        let x = this.column * blockSize;
        let y = this.row * blockSize;
        this.color = color;

        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, this.size, this.size);
    }

    drawCircle(color){
        let x = this.column * blockSize + blockSize/2;
        let y = this.row * blockSize + blockSize/2;
        this.color = color;

        this.circle(x, y, this.size/2, this.color, true);
    }
}

class Apple extends Block {

    constructor(row = 0, column = 0) {
        super(row, column);
        this.show();
    }

    draw(){
        this.drawCircle("Green");
    }

    show(){
        let randomRow = Math.floor(Math.random() * (row-2) ) + 1 ;
        let randomColumn = Math.floor(Math.random() * (column-2) ) + 1 ;
        this.row = randomRow;
        this.column = randomColumn;
    }
}