function cekPrima() {
    const angka = parseInt(document.getElementById('inputAngka').value);
    const elementHasil = document.getElementById('hasil');

    if (isNaN(angka)) {
        elementHasil.innerText = "Masukkan angka yang valid!";
        elementHasil.style.color = "red";
        return;
    }

    if (angka <= 1) {
        elementHasil.innerText = `${angka} Bukan Bilangan Prima`;
        elementHasil.style.color = "#d9534f";
        return;
    }

    let isPrima = true;
    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            isPrima = false;
            break;
        }
    }

    if (isPrima) {
        elementHasil.innerText = `${angka} ADALAH Bilangan Prima!`;
        elementHasil.style.color = "#5cb85c";
    } else {
        elementHasil.innerText = `${angka} Bukan Bilangan Prima`;
        elementHasil.style.color = "#d9534f";
    }
}

// Tambahkan baris ini di paling bawah agar fungsi dibaca oleh Acode:
document.getElementById('btnCek').addEventListener('click', cekPrima);
