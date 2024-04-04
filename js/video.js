var video;


// when the window is loaded, this evetnt happens
// they get the video elememt, set it to autoplay false and looping to false. And print some lines
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop=false;
	console.log("Auto play is set to" +video.autoplay)
});


let playButton = document.querySelector("#play");
let getVolume = document.querySelector("#volume")
playButton.addEventListener("click",function(){
	// i want the video play
	let video = document.querySelector("#player1");
	console.log(video);
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100+'%';
});


let pauseButton = document.querySelector("#pause");
pauseButton.addEventListener("click",function(){
	let video = document.querySelector("#player1");
	video.pause();
}
)

console.log('video slow down')
let slowDown = document.querySelector("#slower");
slowDown.addEventListener('click',setSpeedSlower);
let currentSpeed = 1.0;
function setSpeedSlower(){
	video.playbackRate = currentSpeed - 0.1*currentSpeed;
	currentSpeed = video.playbackRate;
	console.log('Speed now: ' + currentSpeed);
}




console.log('video speed up')
let speedUp = document.querySelector("#faster")
speedUp.addEventListener('click', setSpeedFaster);
function setSpeedFaster(){
	video.playbackRate = currentSpeed +0.1*currentSpeed;
	currentSpeed = video.playbackRate;
	console.log('Speed now:' + currentSpeed);
}

let skip = document.querySelector('#skip');
skip.addEventListener('click',function(){
	currentTime = video.currentTime;
	newTime = currentTime + 10;
	if(newTime >= video.duration){
		newTime = 0;
	}
	video.currentTime = newTime;
	console.log('Current video location is: ', newTime)
})



let mute = document.querySelector('#mute');
mute.addEventListener('click',function(){
	let video = document.querySelector("#player1");
	video.muted = !video.muted;
    mute.innerHTML = video.muted ? "Unmute":'Mute';
})


let sliderLocation = document.querySelector('#slider');
sliderLocation.addEventListener('change', function(){
	currentVolume = sliderLocation.value;
	console.log(currentVolume);
	console.log(video.volume);
	video.volume = currentVolume/100;     
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = currentVolume+'%';
})


let style = document.querySelector('#vintage');
style.addEventListener('click',function(){
	video.classList.add("oldSchool");
})

let noStyle = document.querySelector('#orig');
noStyle.addEventListener('click',function(){
	video.classList.remove("oldSchool");
})

