class Wheel{
    constructor(center, radius, colors){
        this.center = center;
        this.radius = radius;
        this.colors = colors;
    }
    draw(ctx,  angle = Math.PI){
        const sliceCount = this.colors.length;
        for(let i = 0; i < sliceCount; i++){
            const startAngle = angle + 2 * Math.PI * (i / sliceCount);
            const endAngle = angle + 2 * Math.PI * ((i + 1) / sliceCount)
            ctx.beginPath();
            ctx.moveTo(center.x, center.y);
            ctx.arc(center.x, center.y, this.radius, startAngle, endAngle);
            ctx.fillStyle = this.colors[i];
            ctx.fill()
        }
    }
}