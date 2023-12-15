function doPost(e) {
    var nama = e.parameter.nama;
    var email = e.parameter.email;
    // Proses data sesuai kebutuhan Anda
  }
  
  function doPost(e) {
    var nama = e.parameter.nama;
    var email = e.parameter.email;
  
    Logger.log("Nama: " + nama);
    Logger.log("Email: " + email);
  
    // Proses data sesuai kebutuhan Anda
  
    return ContentService.createTextOutput("Data terkirim"); // Pesan balasan
  }