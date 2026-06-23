# Dokumentasi Presentasi Demo Project

## 1. Pembukaan

Selamat pagi/siang/sore.

Pada kesempatan ini saya akan mempresentasikan project website Curriculum Vitae atau portfolio pribadi. Project ini dibuat untuk menampilkan profil profesional, pengalaman kerja, skill, project yang pernah dikerjakan, pendidikan, dan kontak dalam bentuk website satu halaman.

Website ini dibuat menggunakan React JS, Vite, Bootstrap, dan CSS custom.

## 2. Tujuan Project

Tujuan dari project ini adalah membuat CV digital yang lebih menarik, modern, dan mudah diakses.

Jika biasanya CV hanya berbentuk file PDF, pada project ini CV dibuat dalam bentuk website. Dengan begitu, informasi profil bisa dilihat langsung melalui browser dan lebih mudah dibagikan kepada recruiter, perusahaan, atau orang yang ingin melihat pengalaman profesional saya.

## 3. Teknologi yang Digunakan

Teknologi yang digunakan pada project ini adalah:

- React JS untuk membuat tampilan website berbasis komponen.
- Vite untuk menjalankan project dengan lebih cepat saat development.
- Bootstrap untuk membantu membuat layout yang responsif.
- CSS custom untuk mengatur warna, jarak, card, tombol, dan tampilan website.

Secara sederhana, React digunakan untuk membangun tampilan, Vite digunakan untuk menjalankan project, Bootstrap membantu layout, dan CSS digunakan untuk mempercantik tampilan.

## 4. Alur Demo Website

Saat demo, urutan penjelasan website bisa mengikuti alur berikut.

### A. Navbar

Bagian paling atas website adalah navbar.

Navbar ini berisi nama dan beberapa menu, yaitu About, Experience, Skills, dan Projects. Menu ini digunakan untuk berpindah langsung ke bagian tertentu pada halaman.

Poin yang bisa dijelaskan:

- Navbar dibuat fixed di bagian atas.
- Saat user klik menu, halaman akan scroll ke section yang dipilih.
- Navbar membantu user melihat isi CV dengan lebih cepat.

### B. Hero Section

Bagian pertama yang tampil adalah hero section.

Pada bagian ini terdapat nama, posisi sebagai Fullstack Mobile Developer, deskripsi singkat, foto profil, dan tombol untuk membuka LinkedIn, mengirim email, serta melihat project App Store.

Poin yang bisa dijelaskan:

- Hero section menjadi bagian pembuka website.
- Informasi utama ditampilkan langsung di awal.
- Tombol dibuat agar user bisa langsung menghubungi atau melihat profil profesional.

Contoh kalimat presentasi:

> Di bagian awal website, saya menampilkan informasi utama seperti nama, posisi, foto profil, dan tombol kontak. Tujuannya agar pengunjung langsung mengetahui siapa pemilik portfolio ini dan bagaimana cara menghubunginya.

### C. About Me

Bagian About Me berisi ringkasan tentang pengalaman dan fokus keahlian.

Pada section ini dijelaskan bahwa pemilik portfolio memiliki pengalaman sebagai Flutter developer, terbiasa membuat aplikasi mobile, melakukan integrasi API, menggunakan state management, dan menerapkan clean architecture.

Poin yang bisa dijelaskan:

- Bagian ini menjelaskan profil secara singkat.
- Isinya dibuat tidak terlalu panjang agar mudah dibaca.
- Fokus utamanya adalah pengalaman mobile development.

### D. Personal Details

Bagian Personal Details berisi informasi pribadi seperti nama lengkap, tempat tanggal lahir, alamat, nomor telepon, email, LinkedIn, kewarganegaraan, dan status.

Poin yang bisa dijelaskan:

- Data ditampilkan dalam bentuk tabel.
- Email dan LinkedIn dibuat sebagai link aktif.
- Tabel membuat informasi lebih rapi dan mudah dibaca.

### E. Work Experience

Bagian Work Experience menampilkan riwayat pengalaman kerja.

Data pengalaman kerja ditampilkan dalam bentuk timeline card. Setiap card berisi posisi, nama perusahaan, periode kerja, dan deskripsi pekerjaan.

Poin yang bisa dijelaskan:

- Pengalaman kerja dibuat dalam bentuk list yang rapi.
- Setiap pengalaman memiliki periode dan deskripsi.
- Tampilan card membantu membedakan setiap pengalaman.

Contoh kalimat presentasi:

> Pada bagian pengalaman kerja, saya menampilkan beberapa pengalaman profesional dalam bentuk timeline. Setiap item berisi posisi, perusahaan, periode kerja, dan tanggung jawab utama yang pernah dilakukan.

### F. Skills

Bagian Skills menampilkan kemampuan teknis yang dikelompokkan berdasarkan kategori.

Kategori skill yang ditampilkan antara lain Mobile Development, State Management, Backend & API, Database & Services, dan Architecture.

Poin yang bisa dijelaskan:

- Skill tidak ditampilkan acak, tetapi dikelompokkan agar lebih mudah dipahami.
- Skill juga ditampilkan dalam bentuk badge agar terlihat lebih menarik.
- Bagian ini membantu pengunjung melihat teknologi yang dikuasai.

### G. Projects

Bagian Projects menampilkan beberapa project pilihan yang pernah dikerjakan.

Setiap project berisi nama project, jenis project, deskripsi, tech stack, dan fokus pekerjaan.

Poin yang bisa dijelaskan:

- Project ditampilkan dalam bentuk card.
- Setiap card menjelaskan fungsi project secara singkat.
- Salah satu project memiliki link ke App Store.
- Bagian ini menunjukkan pengalaman nyata dalam membuat aplikasi.

Contoh kalimat presentasi:

> Di bagian project, saya menampilkan beberapa project yang pernah dikerjakan. Setiap project memiliki deskripsi singkat, teknologi yang digunakan, dan fokus pengerjaannya. Dengan bagian ini, pengunjung bisa melihat contoh pengalaman saya secara lebih konkret.

### H. Education dan Footer

Bagian Education menampilkan informasi pendidikan, sedangkan footer menjadi bagian penutup halaman.

Poin yang bisa dijelaskan:

- Education dibuat sederhana agar informasi tetap jelas.
- Footer berisi copyright sebagai penutup website.

## 5. Penjelasan Singkat Kode

Project ini memiliki beberapa file utama:

- `src/main.jsx`: file utama untuk menjalankan React.
- `src/App.jsx`: file utama yang berisi struktur halaman CV.
- `src/App.css`: file styling untuk tampilan website.
- `src/index.css`: file styling dasar secara global.
- `src/assets`: folder untuk menyimpan gambar dan ilustrasi.

Pada file `App.jsx`, data seperti personal details, pengalaman kerja, skill, dan project disimpan dalam bentuk array.

Contohnya:

- `personalDetails` untuk data pribadi.
- `experiences` untuk pengalaman kerja.
- `skillGroups` untuk daftar skill.
- `projects` untuk daftar project.

Data tersebut kemudian ditampilkan menggunakan fungsi `map()`.

Keuntungan menggunakan cara ini adalah data lebih mudah ditambah, diubah, atau dikurangi tanpa harus menulis ulang banyak kode tampilan.

Contoh kalimat presentasi:

> Untuk struktur kodenya, data website ini dibuat menggunakan array di React. Setelah itu data ditampilkan dengan fungsi map. Dengan cara ini, kode menjadi lebih rapi dan mudah dikembangkan jika ingin menambah pengalaman, skill, atau project baru.

## 6. Cara Menjalankan Project Saat Demo

Untuk menjalankan project, gunakan perintah berikut:

```bash
npm install
```

Perintah ini digunakan untuk menginstall dependency yang dibutuhkan.

Setelah itu jalankan:

```bash
npm run dev
```

Jika berhasil, terminal akan menampilkan alamat localhost. Biasanya alamatnya adalah:

```text
http://localhost:5173
```

Buka alamat tersebut di browser untuk melihat website.

## 7. Poin Kelebihan Project

Beberapa kelebihan yang bisa disampaikan saat presentasi:

- Website dibuat responsif, sehingga bisa dibuka di laptop maupun handphone.
- Informasi CV lebih menarik dibandingkan CV biasa.
- Data dibuat dalam bentuk array, sehingga mudah dikelola.
- Tampilan menggunakan section yang jelas dan rapi.
- Terdapat tombol kontak langsung ke LinkedIn dan email.
- Project ini bisa digunakan sebagai personal branding.

## 8. Alur Presentasi Singkat

Berikut alur presentasi yang bisa digunakan:

1. Perkenalkan nama project.
2. Jelaskan tujuan project.
3. Sebutkan teknologi yang digunakan.
4. Demo bagian navbar dan hero section.
5. Jelaskan bagian About Me dan Personal Details.
6. Jelaskan Work Experience.
7. Jelaskan Skills dan Projects.
8. Jelaskan sedikit struktur kode di `App.jsx`.
9. Jelaskan cara menjalankan project.
10. Tutup dengan kesimpulan.

## 9. Contoh Naskah Presentasi Lengkap

Berikut contoh naskah yang bisa langsung digunakan saat demo:

> Selamat pagi/siang/sore. Pada kesempatan ini saya akan mempresentasikan project website Curriculum Vitae atau portfolio pribadi. Project ini dibuat menggunakan React JS, Vite, Bootstrap, dan CSS custom.

> Tujuan dari project ini adalah membuat CV digital yang lebih modern dan mudah diakses. Jadi, informasi seperti profil, pengalaman kerja, skill, project, pendidikan, dan kontak bisa dilihat langsung melalui website.

> Pada bagian pertama, terdapat navbar yang berfungsi untuk berpindah ke beberapa section, seperti About, Experience, Skills, dan Projects.

> Selanjutnya ada hero section. Bagian ini menampilkan nama, posisi sebagai Fullstack Mobile Developer, deskripsi singkat, foto profil, dan tombol menuju LinkedIn, email, serta project App Store.

> Pada bagian About Me, saya menjelaskan ringkasan pengalaman, terutama di bidang mobile development menggunakan Flutter dan Dart. Di bagian ini juga dijelaskan pengalaman dalam integrasi API, state management, clean architecture, dan deployment aplikasi.

> Setelah itu ada Personal Details yang berisi informasi pribadi dalam bentuk tabel. Beberapa data seperti email dan LinkedIn dibuat aktif agar bisa langsung diklik.

> Pada bagian Work Experience, saya menampilkan pengalaman kerja dalam bentuk timeline card. Setiap card berisi posisi, perusahaan, periode kerja, dan deskripsi pekerjaan.

> Bagian Skills menampilkan kemampuan teknis yang dikelompokkan berdasarkan kategori, seperti Mobile Development, State Management, Backend & API, Database, dan Architecture.

> Bagian Projects menampilkan beberapa project pilihan yang pernah dikerjakan. Setiap project berisi nama project, jenis project, teknologi yang digunakan, dan deskripsi singkat.

> Dari sisi kode, data seperti pengalaman, skill, dan project disimpan dalam bentuk array di file App.jsx. Data tersebut kemudian ditampilkan menggunakan fungsi map, sehingga kode lebih rapi dan mudah dikembangkan.

> Kesimpulannya, project ini adalah website CV digital yang dibuat untuk menampilkan profil profesional secara lebih modern, responsif, dan mudah dibagikan.

## 10. Kesimpulan

Project ini menunjukkan bagaimana CV biasa dapat dikembangkan menjadi website portfolio yang lebih interaktif.

Dengan menggunakan React, Vite, Bootstrap, dan CSS, website ini menjadi mudah dijalankan, mudah dikembangkan, dan nyaman dilihat di berbagai ukuran layar.

Project ini juga dapat digunakan sebagai media personal branding dan pendukung saat melamar pekerjaan.
