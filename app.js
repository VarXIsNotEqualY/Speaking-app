var texta = document.querySelector('textarea');
var Selector =document.querySelector('select');

function getVoiceList () {
    voices = window.speechSynthesis.getVoices();

    for (var i in voices) {
        var option = document.createElement('option');
        option.textContent = voices[i].name;
        option.setAttribute('name', voices[i].name);
        Selector.appendChild(option);
    }
}

getVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoiceList;
}

document.querySelector('form').addEventListener('submit', function (e) {
    speakIt();
    e.preventDefault();
  })

function speakIt () {
    var msg = new SpeechSynthesisUtterance(texta.value);
    var comparing = Selector.selectedOptions[0].getAttribute('name');
    for (i = 0; i < voices.length ; i++) {
      if(voices[i].name === comparing) {
        msg.voice = voices[i];
      }
    }
    speechSynthesis.speak(msg);
}