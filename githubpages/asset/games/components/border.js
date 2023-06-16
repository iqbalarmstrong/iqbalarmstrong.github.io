// OBJECT BORDER
const border = {
    color : "Black",
    size : blockSize,
    width : canvas.width,
    height : canvas.height,

    draw : function () {
        ctx.fillStyle = this.color;
        // box -> ctx.fillRect(posX, posY, width, height); in px
        const top = ctx.fillRect(0, 0, this.width, this.size);
        const right = ctx.fillRect(this.width-this.size, 0, this.size, this.height);
        const bottom = ctx.fillRect(0, this.height-this.size, this.width, this.size);
        const left = ctx.fillRect(0, 0, this.size, this.height);
    }
}

