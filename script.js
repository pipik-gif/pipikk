// Efek Typewriter
let text = "🌟 Selamat Datang di Web Super Keren 🌟";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Fungsi sapaan
function sapa() {
    let nama = document.getElementById("nama").value;
    let output = document.getElementById("output");

    if (nama.trim() === "") {
        output.innerHTML = "⚠ Silakan masukkan nama terlebih dahulu.";
        output.style.color = "red";
    } else {
        output.innerHTML = "✨ Halo, " + nama + "! Semoga harimu menyenangkan. ✨";
        output.style.color = "#2c3e50";
    }
}

// Play/Pause musik
function toggleMusic() {
    let music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Jalankan efek typewriter saat halaman load
window.onload = typeWriter;