// Array untuk menyimpan data produk
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menambah produk baru
function tambahProduk(nama, harga, stok) {
  const id = produkToko.length + 1; // Menghasilkan ID baru berdasarkan panjang array
  produkToko.push({ id, nama, harga, stok });
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
  produkToko = produkToko.filter(product => product.id !== id);
}

// Fungsi untuk menampilkan semua produk
function tampilkanProduk() {
  console.log("Daftar Produk Toko:");
  produkToko.forEach(product => {
    console.log(`ID: ${product.id}, Nama: ${product.nama}, Harga: ${product.harga}, Stok: ${product.stok}`);
  });
}

// Contoh penggunaan
tambahProduk("Monitor", 3000000, 8); // Menambah produk baru
hapusProduk(2); // Menghapus produk dengan id 2 (Mouse)
tampilkanProduk(); // Menampilkan daftar produk yang telah diperbarui