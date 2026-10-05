score = 0;
cross = true;
audio = new Audio('./images/music.mp3');
audiogo = new Audio('./images/gameover.mp3');
setTimeout(()=>{
    audio.play();
},1000);
document.onkeydown = function(e){
    console.log("key code is " + e.keyCode);
    if(e.keyCode ==38){  //up
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        },700);    
    };
    if(e.keyCode ==39){  //right
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode ==37){ //left
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    };
}
setInterval(()=>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    console.log(offsetX, offsetY);
    if(offsetX < 73 && offsetY < 52){
        gameOver.innerrHtml = "Game Over Reload to Play it Again";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX < 145 && cross){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = anidur - 0.1;
            obstacle.style.animationDuration = newDur + "s";
            console.log('new animation duration: ' + newDur);
        }, 500);
    }    
},10)

function updateScore(score) {
    ScoreCount.innerrHtml = "your score:" +score;
}