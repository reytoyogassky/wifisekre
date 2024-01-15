var jumlahInput = document.getElementById('jumlah');

document.getElementById('tambahJumlah').addEventListener('click', function() {
    jumlahInput.value = parseInt(jumlahInput.value) + 1;
  });
  document.getElementById('kurangJumlah').addEventListener('click', function() {
    jumlahInput.value = parseInt(jumlahInput.value) - 1;
  });


  function updateHarga() {
    var jenisVoucher = document.getElementById('jenisVoucher').value;
    var hargaInput = document.getElementById('harga');

    // Tambahkan logika penentuan harga berdasarkan jenis voucher
    switch (jenisVoucher) {
      case 'harian':
        hargaInput.value = '1000';
        break;
      case 'mingguan':
        hargaInput.value = '13000';
        break;
      case 'bulanan':
        hargaInput.value = '30000';
        break;
      // Tambahkan case untuk voucher lain jika diperlukan
      default:
        hargaInput.value = '0'; // Default
    }
  }

    // Panggil fungsi updateHarga saat halaman dimuat
    document.addEventListener('DOMContentLoaded', function() {
        updateHarga();
      });



