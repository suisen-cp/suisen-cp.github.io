function showCanvas() {
    console.log(canvas)
    var canvas = $('#canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        context.fillRect(20,40,50,100);
        context.strokeStyle = 'rgb(00,00,255)';
        context.fillStyle = 'rgb(255,00,00)';
        context.strokeRect(200,80,100,50);
        context.arc(150,75,60,Math.PI*1,Math.PI*2,true);
        context.fill();
    }
}

