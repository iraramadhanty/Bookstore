const express = require('express');
const app = express();
const port = 3000;
var mysql = require('mysql');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_pemesanan_buku',
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
  });

app.get('/koleksi', (req, res) => {
    con.query('select * from koleksi inner join kategori on kategori.id_kategori=koleksi.id_kategori', (error, rows, fields) => {
      if (error) console.log(error);
      else {
        res.send(rows);
      }
    });
  });
  
  con.connect((error) => {
    if (error) console.log(`${error} Ada yang salah!`);
    else console.log('connected');
  });

  app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    con.query('select * from login WHERE username=?;',
      username,
    (error, result) => {
      if (error) {
        console.log(error)
      };
      if (result.length > 0){
        if(password == result[0].password) {
          // console.log('bnr')
          res.send({auth: true})
        }
        else{
          res.send({auth: false, message: 'Wrong Password'})
        }
      }
      else{
        res.send({auth: false, message: 'No User Exists!'})
        
      }
    }); 
  });

  app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    con.query('select * from login WHERE username=?;',
      username,
    (error, result) => {
      if (error) {
        console.log(error)
      };
      if (result.length == 0){
        con.query('INSERT INTO login(username, password) VALUES (?,?)',
        [username, password],
        (error, result) => {
          res.send({auth: true, message: 'Successful Registration'})
        }
        )
      }
      else{
        res.send({auth: false, message: 'Username Already Exists'})
      }
    }); 
  });
  
  app.post('/history', (req, res) => {
    const gambar = req.body.gambar;
    const judul_buku = req.body.judul;
    const total = req.body.total;
    const username = req.body.username;
    const noRek = req.body.noRek;
    const email = req.body.email;
    const jumlah_buku = req.body.jumlah_buku;

    con.query('INSERT INTO history(username, gambar, judul_buku, total, noRek, email) VALUES (?,?,?,?,?,?)',
      [username, gambar, judul_buku, total, noRek, email],
    (error, result) => {
      if (error) {
        console.log(error)
      }else{
        con.query('SELECT * from koleksi WHERE judul_buku=?;', judul_buku,
        (error, rows, result) => {
          if (error) {
            console.log(error)
          }

          let stockBuku = rows[0].stock-jumlah_buku
          con.query('UPDATE koleksi set stock=? where judul_buku=?',
            [stockBuku, judul_buku],
          (error, result) => {
            if (error) {
              console.log(error)
            }else{
              res.send({message: 'Payment Successful'})
            }
          }); 
        })
      }
    }); 
  });

  app.get('/history', (req, res) => {
    con.query('select * from history', 
    (error, rows, fields) => {
      if (error) console.log(error);
      else {
        res.send(rows);
      }
    });
  });

  app.post('/koleksi', (req,res) => {
    const gambar = req.body.gambar;
    const judul_buku = req.body.judul_buku;
    const harga = req.body.harga; 
    const nama_penulis = req.body.nama_penulis;
    const halaman = req.body.halaman;
    const tanggal = req.body.tanggal;
    const Penerbit = req.body.Penerbit;
    const nama_kategori= req.body.nama_kategori;
    const sinopsis = req.body.sinopsis;
    const stock = req.body.stock;

    let kategori_id = 0
    if(nama_kategori == 'Fiction'){
      kategori_id = 1
    }else if (nama_kategori == 'Romance'){
      kategori_id = 2
    }else if (nama_kategori == 'Sains'){
      kategori_id = 3
    }else if (nama_kategori == 'Selfdevelopment'){
      kategori_id = 4
    }else if (nama_kategori == 'Computing'){
      kategori_id = 5 
    }else if (nama_kategori == 'Medical'){
      kategori_id = 6
    }else if (nama_kategori == 'BestSeller'){
      kategori_id = 7
    }else{
      kategori_id = 8
    }

    con.query('INSERT INTO koleksi(gambar, judul_buku, harga, nama_penulis, halaman, tanggal, Penerbit, id_kategori, sinopsis, stock) VALUES(?,?,?,?,?,?,?,?,?,?)', 
    [gambar, judul_buku, harga, nama_penulis, halaman, tanggal, Penerbit, kategori_id, sinopsis, stock],
    (error, result) => {
      if (error) {
        console.log(error)
      }else{
        res.send({message: 'Successful'})
      }
    }); 
  });

  app.put('/koleksi', (req,res) => {
    const gambar = req.body.gambar;
    const judul_buku = req.body.judul_buku;
    const harga = req.body.harga;
    const nama_penulis = req.body.nama_penulis;
    const halaman = req.body.halaman;
    const tanggal = req.body.tanggal;
    const Penerbit = req.body.Penerbit;
    const nama_kategori= req.body.nama_kategori;
    const sinopsis = req.body.sinopsis;
    const stock = req.body.stock;

    let kategori_id = 0
    if(nama_kategori == 'Fiction'){
      kategori_id = 1
    }else if (nama_kategori == 'Romance'){
      kategori_id = 2
    }else if (nama_kategori == 'Sains'){
      kategori_id = 3
    }else if (nama_kategori == 'Selfdevelopment'){
      kategori_id = 4
    }else if (nama_kategori == 'Computing'){
      kategori_id = 5 
    }else if (nama_kategori == 'Medical'){
      kategori_id = 6
    }else if (nama_kategori == 'BestSeller'){
      kategori_id = 7
    }else{
      kategori_id = 8
    }

    con.query('UPDATE koleksi SET gambar=?, harga=?, nama_penulis=?, halaman=?, tanggal=?, Penerbit=?, id_kategori=?, sinopsis=?, stock=? WHERE judul_buku=?', 
    [gambar, harga, nama_penulis, halaman, tanggal, Penerbit, kategori_id, sinopsis, stock, judul_buku],
    (error, result) => {
      if (error) {
        console.log(error)
      }else{
        res.send({message: 'Update berhasil'})
      }
    }); 
  });


  app.put('/deleteBuku', (req,res) => {
    const judul_buku = req.body.judul_buku;
    con.query('DELETE from koleksi WHERE judul_buku=?',
    [judul_buku],
    (error, result) => {
      if (error) {
        console.log(error)
      }else{
        res.send({message: 'Delete Successful'})
      }
    }); 
  });