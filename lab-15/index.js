let data = {}; 
let hasil;
// Gunakan ID supaya JavaScript tahu nak letak mana
let troli = document.getElementById("senarai-troli");
let paparjumlah = document.getElementById("total-harga");

function tambahData(dapatkanBarang) {
    if (data[dapatkanBarang.nama]) {
        data[dapatkanBarang.nama].jumlah++;
    } else {
        data[dapatkanBarang.nama] = {
            harga: dapatkanBarang.harga,
            jumlah: 1
        };
    }
    kiraHasil();
    renderTroli();
}

function kiraHasil() {
    hasil = 0;
    for(let key in data) {
        hasil += data[key].harga * data[key].jumlah;
    }
    // Update terus jumlah kat sini
    paparjumlah.innerHTML = `RM ${hasil.toFixed(2)}`;
}

// Fungsi buang yang awak minta
function buangData(nama) {
    delete data[nama]; // Terus buang dari list
    kiraHasil();
    renderTroli();
}

function renderTroli() {
    KosongkanElemen(troli);
    
    for(let key in data) {
        let div_barang = document.createElement("div");
        let div_butang = document.createElement("div");
        let butang = document.createElement("button");
        
        butang.classList.add("buang");
        butang.innerHTML = `<i class="fa-solid fa-trash"></i> Buang`;
        
        // Bila tekan butang buang
        butang.onclick = function() {
            buangData(key);
        };

        div_barang.classList.add("kandungan-kedua", "kedua-padding");
        div_barang.innerHTML = `<div>${key} (X${data[key].jumlah})</div>`;

        div_butang.appendChild(butang);
        div_barang.appendChild(div_butang); // Cantumkan info & butang

        troli.appendChild(div_barang);
    }
}

function KosongkanElemen(elemen) {
    while (elemen.firstChild) {
        elemen.removeChild(elemen.firstChild);
    }
}