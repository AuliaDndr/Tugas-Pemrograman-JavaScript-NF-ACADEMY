function lihatData() {
    const dataContainer = document.getElementById("data_list"); // Perbaikan: ID cocok dengan HTML
    dataContainer.innerHTML = data.map(item => 
        `<li>${item.nama} - ${item.umur} tahun - ${item.alamat} - ${item.email}</li>`
    ).join("");
}

function tambahData(nama, umur, alamat, email) {
    data.push({ nama, umur, alamat, email });
    lihatData(); // Perbarui tampilan setelah menambah data
}

function hapusData(nama) {
    const index = data.findIndex(item => item.nama === nama);
    if (index !== -1) {
        data.splice(index, 1);
        lihatData(); // Perbarui tampilan setelah menghapus data
    } else {
        alert(`Data ${nama} tidak ditemukan.`);
    }
}

// Tambahkan dua data baru
tambahData("Lili", 25, "Semarang", "lili@email.com");
tambahData("Aming", 27, "Pemalang", "aming@email.com");

// Pastikan data tampil saat halaman dimuat
document.addEventListener("DOMContentLoaded", lihatData);
