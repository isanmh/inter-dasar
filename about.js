// module node js
function Hello(nama) {
  return console.log(`Hello, nama saya ${nama}`);
}
PI = 3.14;
const pegawai = {
  nama: "ihsan",
  umur: 17,
  alamat: "Bandung",
  cetakPegawai() {
    return `Nama saya ${this.nama} dan umur : ${this.umur}`;
  },
};
// class
class User {
  constructor() {
    console.log("User Class");
  }
}

// cara export
// exports.PI;
// exports = {
//   Hello,
//   PI,
//   pegawai,
//   User,
// };

module.exports = {
  Hello,
  PI,
  pegawai,
  User,
};
