let keranjang = [];
let total = 0;

function beli(nama, harga) {
    keranjang.push({ nama, harga });
    total += harga;
    updateUI();
    alert(nama + " telah ditambahkan ke keranjang!");
}

function updateUI() {
    const list = document.getElementById('keranjang-list');
    const totalEl = document.getElementById('total-harga');
    list.innerHTML = '';
    keranjang.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nama} - Rp${item.harga.toLocaleString()}`;
        list.appendChild(li);
    });
    totalEl.textContent = total.toLocaleString();
}

function prosesPembayaran() {
    if (keranjang.length === 0) { alert("Keranjang kosong!"); return; }
    const metode = document.getElementById('metode-pembayaran').value;
    alert(`Pembayaran Rp${total.toLocaleString()} via ${metode} berhasil!`);
    keranjang = []; total = 0; updateUI();
}

const search = document.getElementById("search");
search.addEventListener("keyup", function() {
    let filter = search.value.toLowerCase();
    document.querySelectorAll(".card").forEach(item => {
        let nama = item.querySelector("h3").textContent.toLowerCase();
        item.style.display = nama.includes(filter) ? "block" : "none";
    });
});