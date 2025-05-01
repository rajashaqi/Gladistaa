// trigger to play music in the background with sweetalert
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');
const audio = document.getElementById('playButton');
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");



    const titles = ('YEAYY!! Sekarang Balikan Lovee uuu').split('')
    const titleElement = document.getElementById('title');
    let balikan = 0;

    function appendTitle() {
      if (balikan < titles.length) {
        titleElement.innerHTML += titles[balikan];
        balikan++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};               
                


playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play';
  }
  
});

    document.getElementById('playButton').addEventListener('click', function() {
        document.getElementById('message').innerText = "Dengerin Dulu Lagunyaa Yaa";
    });
    document.getElementById('Button').addEventListener('click', function() {
     document.getElementById('message').innerText = "Gabakal Bisa Wleee"; 
     
})

    document.getElementById('yesButton').addEventListener('click', function() {
     document.getElementById('flower.html');
      
})

