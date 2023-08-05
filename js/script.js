const totalScore = document.querySelector('.score-total');
const btnRefresh = document.querySelector('.btn-refresh');
const gameOver = document.querySelector('.game-over');
const scoreGame = document.querySelector('.score');
const clouds = document.querySelector('.clouds');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let score = 0;

const jump = () => {
	mario.classList.add('jump');

	setTimeout(() => {
		mario.classList.remove('jump');
	}, 600);
}

const loop = setInterval(() => {
	const pipePosition = pipe.offsetLeft;
	const cloudsPosition = clouds.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

	if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
		pipe.style.animation = 'none';
		pipe.style.left = `${pipePosition}px`;

		mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition}px`;
		mario.src = './img/game-over.png';
		mario.style.width = '70px';
		mario.style.marginLeft = '55px';

		clouds.style.animation = 'none';
		clouds.style.left = `${cloudsPosition}px`;

		gameOver.style.display = 'block';
		gameOver.style.position = 'absolute'

		clearInterval(loop);
		clearInterval(countScore);
	}
}, 10);

const countScore = setInterval(() => {
	score += 1;
	scoreGame.innerHTML = `Score: ${score}`;
	totalScore.innerHTML = `Score: ${score}`;
}, 50);

const refresh = () => {
	location.reload();
	console.log('chamou')
}

document.addEventListener('keydown', jump);

btnRefresh.addEventListener('click', refresh);
