// ---------> partie header à personnaliser
var changePadding = document.getElementById('spacing');
var changeBlur = document.getElementById('blur');
var changeColor = document.getElementById('base');

function makeUpdate(){
  var suffix1 = changeBlur.dataset.sizing;
  document.documentElement.style.setProperty(`--blur`, changeBlur.value + suffix1)
  console.log(suffix1)

  document.body.style.setProperty('--spacing', event.target.value + event.target.dataset.sizing);

  document.documentElement.style.setProperty(`--color`, changeColor.value)

  console.log(`for the blur: ` + changeBlur.value)
  console.log(`for the spacing: ` + changePadding.value)
  console.log(`for the color: ` + changeColor.value)
}

changeBlur.addEventListener('mousemove', makeUpdate);
changePadding.addEventListener('mousemove', makeUpdate);
changeColor.addEventListener('mousemove', makeUpdate);




// ---------> partie keyboard
var body = document.getElementsByTagName('body')
var key = document.getElementsByClassName('key')
var audio = document.getElementsByTagName('audio')

document.addEventListener('keydown', function(event) {
    var queryKey = document.querySelector(`div[data-key = "${event.keyCode}"]`);
    
    var queryAudio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
    
    queryKey.classList.add('playing')
    queryAudio.play(event)
})

document.addEventListener('keyup', function(event) {
    var queryKey = document.querySelector(`div[data-key = "${event.keyCode}"]`);
    queryKey.classList.remove('playing')
})