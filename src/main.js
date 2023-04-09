window.onload  = function(){
  twemoji.parse(document.body);

  let device = navigator.userAgent.match(/Android|iPhone|iPad|iPod touch/);
  let deviceElements = document.getElementsByClassName('device');
  let deviceLength = deviceElements.length;

  if(device == null){
    device = 'デバイス';
  }
  for(let i=0; i < deviceLength; i++){
    deviceElements.item(i).innerHTML = device;
  }
}

var display;
var mainTag = document.getElementsByTagName('main')[0];
var tap = 0;
var color = [
  "#f00",
  "#0f0",
  "#00f",
  "#000"
];

function deleteId(){
  let target = [
    document.getElementById('navbar'),
    document.getElementById('access')
  ];
  for(let i = 0; i < target.length; i++){
    target[i].style.display = display;
  }  
}

function accessNow(){
  display = 'none';
  document.documentElement.requestFullscreen();
  deleteId();
}

function nextColor(){
  mainTag.style.backgroundColor = color[tap];
  tap++;

  if(tap == 5){
    tap = 0;
    display = 'flex';
    document.exitFullscreen();
    mainTag.style.backgroundColor = '#fff';
    deleteId();
  }
}