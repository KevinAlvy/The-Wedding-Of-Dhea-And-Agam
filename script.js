// Mendapatkan nilai parameter 'nama' dari URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');

// Menampilkan nama di dalam elemen dengan id 'nama'
document.getElementById('nama').textContent = nama;

function closeOverlay() {
    var overlay = document.getElementById("overlay");
    var additionalContent = document.getElementById("additionalContent");

    overlay.style.opacity = "0";

    setTimeout(function () {
        overlay.style.display = "none";
        additionalContent.style.display = "block";
        startSlideshow();
    }, 2000);
}


function startSlideshow() {
    var index = 0;
    showSlides();

    function showSlides() {
        var slides = document.getElementsByClassName("mySlides");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.transform = "scale(3.1)";
            slides[i].classList.remove("active"); // Menghapus kelas active pada semua elemen
        }
    
        slides[index].style.display = "block";
    
        // Setelah menampilkan gambar, memberikan efek zoom in dan transparansi
        slides[index].style.transition = "transform 2s ease"; // Menggunakan transisi hanya untuk efek zoom in
    
        setTimeout(function () {
            slides[index].style.transform = "scale(2)";
            slides[index].classList.add("active"); // Menambahkan kelas active untuk mengubah transparansi menjadi opak
        }, 100);
    
        // Setelah efek zoom in dan sebelum efek zoom out, atur transisi kembali untuk efek zoom out
        setTimeout(function () {
            slides[index].style.transition = "transform 2s ease, background-color 1s ease"; // Menyesuaikan transisi untuk efek zoom out dan transparansi
        }, 1200);
    
        setTimeout(function () {
            index++;
            if (index >= slides.length) {
                index = 0;
            }
            showSlides();
        }, 3200); // Ganti gambar setiap 3.2 detik (termasuk efek zoom in, zoom out, dan transparansi)
    }
    
}

// Tanggal pernikahan
var weddingDate = new Date("December 3, 2023 09:00:00").getTime();

// Memperbarui waktu mundur setiap detik
var countdownInterval = setInterval(function () {
    var now = new Date().getTime();
    var timeDifference = weddingDate - now;

    // Menghitung hari, jam, menit, dan detik
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Menampilkan waktu mundur di elemen HTML
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

    // Memeriksa jika waktu mundur sudah habis
    if (timeDifference < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>The Wedding is Here!</h2>";
    }
}, 1000);

// Fungsi untuk memformat waktu menjadi dua digit (misal: 05)
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Fungsi untuk mendeteksi scroll dan menambahkan/menghapus kelas "visible"
window.addEventListener("scroll", function () {
    var welcomContainer = document.querySelector(".welcom-container");

    // Mendapatkan posisi scroll vertikal
    var scrollPosition = window.scrollY;

    // Jika posisi scroll melebihi 100 piksel, tambahkan kelas "visible", jika tidak, hapus kelas
    if (scrollPosition > 500) {
        welcomContainer.classList.add("visible");
    } else {
        welcomContainer.classList.remove("visible");
    }
});

function createReminder() {
    const eventDetails = {
      text: 'The Wedding of Dhea & Agam',
      details: 'Akad & Resepsi',
      dates: '20231203T090000/20231203T230000',
    };
  
    const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(eventDetails.text)}&details=${encodeURIComponent(eventDetails.details)}&dates=${encodeURIComponent(eventDetails.dates)}`;
  
    window.open(googleCalendarUrl, '_blank');
  }


  function copyText(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Mengganti alert dengan notifikasi
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            new Notification('Teks disalin!');
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    new Notification('Teks disalin!');
                }
            });
        }
    } else {
        // Fallback untuk browser yang tidak mendukung Notification API
        alert('Teks disalin!');
    }
}
  
  function closeOverlay() {
    var overlay = document.getElementById("overlay");
    var additionalContent = document.getElementById("additionalContent");
    var backgroundMusic = document.getElementById("backgroundMusic");
    var musicIcon = document.getElementById("musicIcon");

    overlay.style.opacity = "0";

    setTimeout(function () {
        overlay.style.display = "none";
        additionalContent.style.display = "block";
        startSlideshow();
        backgroundMusic.play(); // Memainkan lagu saat overlay ditutup
        musicIcon.classList.add("rotate"); // Menambahkan kelas rotasi saat lagu dimulai
    }, 2000);
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function toggleMusic() {
    var backgroundMusic = document.getElementById("backgroundMusic");
    var musicIcon = document.getElementById("musicIcon");

    // Toggle audio (play/pause)
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicIcon.classList.add("rotate"); // Add rotate class when music is playing
    } else {
        backgroundMusic.pause();
        musicIcon.classList.remove("rotate"); // Remove rotate class when music is paused
    }
}

