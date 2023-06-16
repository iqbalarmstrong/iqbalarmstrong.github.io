const scoreText = {

    font : "20px Courier",
    color : "White",
    align : "left",
    baseline : "top",

    draw : function () {
        let x = 0;
        let y = 0;
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.fillText(`Score : ${score}`, x, y);
    }
}

const gameOverText = {

    font : "60px Courier",
    color : "Black",
    align : "center",
    baseline : "middle",

    draw : function (){
        const x = canvas.width/2;
        const y = canvas.height/2;
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.fillText(`Game Over`, x, y);
    }
}

const startButton = {
    x : canvas.width/2,
    y : canvas.height/2,
    width : 6 * blockSize,
    height : 3 * blockSize,
    color : "Black",
    textColor : "White",
    font : "32px Courier",
    align : "center",
    baseline : "middle",

    draw : function (){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);

        ctx.fillStyle = this.textColor;
        ctx.font = this.font;
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.fillText('Start', this.x, this.y);
    },

    checkClicked : function (event){
        if ((event.offsetX >= this.x- this.width/2) && 
            (event.offsetY >= this.y- this.height/2) && 
            (event.offsetX <= (this.x+this.width/2)) && 
            (event.offsetY <= (this.y+this.height/2))) 
            start = true;
    }
}