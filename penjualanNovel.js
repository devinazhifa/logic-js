/* 
1. Inisialisasi variabel rupiah dengan Intl.NumberFormat() yang bisa mengonversi mata uang ke string
2. Inisialisasi objek getInfoPenjualan untuk menampilkan infoPenjualan
3. Menghitung total keuntungan yang melibatkan hargaJual, totalTerjual, sisaStok dan hargaBeli
4. Menghitung total modal yang melibatkan hargaBeli, totalTerjual dan sisaStok
5. Mencari buku terlaris dengan statement if, jika item.totalTerjual > infoPenjualan.totalTerjual 
maka produkBukuTerlaris = namaProduk 
6. Mencari total buku yang terjual pada setiap penulis dengan statement if else
7. Mencari penulis dengan total buku yang paling banyak terjual
8. Melakukan return untuk setiap info yang dicari
*/

const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liyei',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    }
  ];
  
  const rupiah = (number) => {
      return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
      }).format(number);
  };
  
  const getInfoPenjualan = (dataPenjualan) => {
      const infoPenjualan = {
          totalKeuntungan: 0,
          totalModal: 0,
          totalJual: 0,
          produkBukuTerlaris: "",
          totalTerjual: 0,
      };
  
      const infoPenulis = [];
  
      dataPenjualan.forEach((item) => {
          // Total keuntungan
          infoPenjualan.totalKeuntungan += item.hargaJual * item.totalTerjual -
          (item.totalTerjual + item.sisaStok) * item.hargaBeli;
          //Total modal
          infoPenjualan.totalModal += item.hargaBeli * (item.totalTerjual + item.sisaStok);
  
          infoPenjualan.totalJual += item.hargaJual * item.totalTerjual;
  
          // Produk buku terlaris
          if (item.totalTerjual > infoPenjualan.totalTerjual) {
              infoPenjualan.produkBukuTerlaris = item.namaProduk;
              infoPenjualan.totalTerjual = item.totalTerjual;
          }
  
          // Total buku yang terjual pada setiap penulis
          if (infoPenulis[item.penulis]) {
              infoPenulis[item.penulis] += item.totalTerjual;
          } else {
              infoPenulis[item.penulis] = item.totalTerjual;
          }
      });
  
      // Penulis dengan total buku yang paling banyak terjual
      let totalTerjual = 0;
      let penulisTerlaris = "";
      for (var penulis in infoPenulis) {
          if (infoPenulis[penulis] > totalTerjual) {
              penulisTerlaris = penulis;
              totalTerjual = infoPenulis[penulis];
          }
      }
  
      return {
          totalKeuntungan: rupiah(infoPenjualan.totalKeuntungan),
          totalModal: rupiah(infoPenjualan.totalModal),
          persentaseKeuntungan: `${(
              (infoPenjualan.totalKeuntungan / infoPenjualan.totalModal) *
              100
          ).toFixed(2)}%`,
          produkBukuTerlaris: infoPenjualan.produkBukuTerlaris,
          penulisTerlaris,
      };
  };
  console.log(getInfoPenjualan(dataPenjualanNovel));