// Data produk awal
let products = [
    { id: 1, name: "Laptop", price: 12000000 },
    { id: 2, name: "Smartphone", price: 5000000 },
    { id: 3, name: "Headphone", price: 500000 },
    { id: 4, name: "Keyboard", price: 350000 },
    { id: 5, name: "Mouse", price: 200000 }
];

const Tampilkan = () => {
    console.log("Daftar Produk:");
    products.forEach(({ id, name, price }) => {
        console.log(`${id}. ${name} - Rp${price.toLocaleString()}`);
    });
};

const nambahinProd = (...newProducts) => {
    products = [...products, ...newProducts];
    console.log("Produk berhasil ditambahkan!");
};

const deleteProd = (id) => {
    products = products.filter(product => product.id !== id);
    console.log(`Produk dengan ID ${id} telah dihapus.`);
};

Tampilkan();
nambahinProd({ id: 6, name: "Monitor", price: 5000000 });
Tampilkan();
deleteProd(3);
Tampilkan();