class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(jenis, merk, platNomor) {
        this.kendaraanDisewa = { jenis, merk, platNomor };
        console.log(`${this.nama} berhasil menyewa ${jenis} - ${merk} dengan plat ${platNomor}`);
        Pelanggan.pelangganList.push(this);
    }

    static tampilkanDaftarPelanggan() {
        console.log('Daftar pelanggan yang sedang menyewa kendaraan:');
        if (Pelanggan.pelangganList.length === 0) {
            console.log('Tidak ada pelanggan yang sedang menyewa kendaraan.');
        } else {
            Pelanggan.pelangganList.forEach((pelanggan, index) => {
                console.log(`${index + 1}. ${pelanggan.nama} - kendaraan: ${pelanggan.kendaraanDisewa.jenis} ${pelanggan.kendaraanDisewa.merk} (${pelanggan.kendaraanDisewa.platNomor})`);
            });
        }
    }
}

Pelanggan.pelangganList = [];

let pelanggan1 = new Pelanggan('Anton', '0812345678');
let pelanggan2 = new Pelanggan('Gowther', '08156748923');

pelanggan1.sewaKendaraan('Mobil', 'Civic', 'B 4022 KXV');
pelanggan2.sewaKendaraan('Motor', 'Vario', 'B 4567 FMS')

Pelanggan.tampilkanDaftarPelanggan();
