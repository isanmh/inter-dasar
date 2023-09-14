console.log("Hello World");
// perbedaan ler, var, const adalah :
// 1. let dan var bisa diubah, const tidak bisa diubah
// 2. let dan const bersifat block scope, var bersifat function scope
// 3. let dan const tidak bisa diakses sebelum di deklarasikan (hoisting), var bisa diakses sebelum di deklarasikan (hoisting)
// 4. let dan const lebih disarankan untuk digunakan daripada var
// 5. const harus diinisialisasi ketika dibuat
let a = 10;
// var a = 10;
a = 20;

// const (constant) tidak bisa diubah
const nama = "ihsan";
// const nama = "ihsan miladi"; // error

console.log(a, nama);
// arrow function
const cetakNama = (nama) => "Halo " + nama;
const cetakNama1 = (nama) => `Halo/${nama}/`; // template literal (ES6/ES7)
const cetakNama2 = (nama) => {
  const pegawai = {
    nama: "ihsan",
    umur: 20,
  };

  return `Data :${pegawai.nama}`;
};

console.log(cetakNama("dedi"));
console.log(cetakNama2("ini arrow function {}"));

// REPL (Read Eval Print Loop)
// tulis di terminal : node .help
// > console.log("Hello World");

// Sychronous vs Asynchronous
// Syncronous
// const getUserSync = (id) => {
//   // (kondisi) ? true : false -> if ternary
//   const nama = id === 1 ? "ihsan" : "dedi";
//   return { id, nama };
// };

// console.log(getUserSync(2));
// console.log("user 1");
// console.log(getUserSync(1));
// console.log("user 2");

// syncronous
// const getUserSync = (id, cb) => {
//   const time = id === 1 ? 5000 : 2000;
//   setTimeout(() => {
//     const nama = id === 1 ? "ihsan" : "dedi";
//     cb({ id, nama });
//   }, time);
// };

// const user1 = getUserSync(1, (id, nama) => {
//   console.log(id, nama);
//   console.log("user 1");
// });

// const user2 = getUserSync(2, (id, nama) => {
//   console.log(id, nama);
//   console.log("user 2");
// });

// asyncronous
async function getUserAsync(id) {
  const time = id === 1 ? 5000 : 2000;
  const nama = id === 1 ? "ihsan" : "dedi";
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nama });
    }, time);
  });
}

getUserAsync(1).then((user) => console.log(user));
getUserAsync(2).then((user) => console.log(user));
