let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); 
}

    fetch('ambil_data.php')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s;
  var period = session;
  
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  document.getElementById("period").innerText = period;
  document.getElementById("period").textContent = period;

  setTimeout(showTime, 1000);
}


showTime();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", showSlides);

function toggleSidebar() {
  var sidebar = document.querySelector('.side-bar');
  var menuBtn = document.querySelector('.menu-btn');

  sidebar.classList.toggle('active');
  menuBtn.classList.toggle('hidden');
}

var backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {
if (window.scrollY > 300) {
backToTopButton.style.display = "block";
} else {
backToTopButton.style.display = "none";
}
});

backToTopButton.addEventListener("click", function(e) {
e.preventDefault(); 
window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("background-music");
  var mic = document.getElementById("karaoke-mic");

  mic.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      mic.src = "img/geto.png"; 
    } else {
      audio.pause();
      mic.src = "img/gojo1.png"; 
    }
  });
});
