<p align="center">
  <img src="./public/InsideTribe/Logo1.png" alt="Inside Tribe Logo" width="500"/>
</p>

# 🌿 Inside Tribe

**Inside Tribe** adalah website eksplorasi yang menampilkan budaya-budaya tertutup di Indonesia. Proyek ini diikutsertakan dalam Kompetisi Desain Website dari Difest (https://difest.himatikom-polsub.id) dengan tema budaya, fokus pada budaya-budaya yang jarang terekspos atau sulit diakses oleh publik.

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi dan Penggunaan](#instalasi-dan-penggunaan)
- [Komponen Utama](#komponen-utama)
- [Data Budaya](#data-budaya)
- [Deployment](#deployment)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## 🎯 Tentang Proyek

Inside Tribe adalah platform digital yang bertujuan untuk memperkenalkan dan melestarikan budaya-budaya tertutup di Indonesia. Website ini menyajikan informasi mendalam tentang berbagai suku dan komunitas adat yang memiliki akses terbatas, seperti:

- **Suku Baduy** - Banten
- **Suku Dayak** - Kalimantan  
- **Suku Asmat** - Papua
- **Suku Bugis** - Sulawesi Selatan
- **Orang Rimba/Suku Anak Dalam** - Jambi
- **Suku Sakai** - Riau
- **Suku Toraja** - Sulawesi Selatan
- **Dan Banyak Suku Lainnya**

## ✨ Fitur Utama

### 🏠 Halaman Utama
- Landing page dengan animasi smooth scroll
- Hero section dengan visual yang menarik
- Preview budaya-budaya yang ditampilkan

### 🗺️ Halaman Explore
- Peta interaktif menggunakan Leaflet
- Lokasi geografis setiap suku
- Navigasi visual ke berbagai budaya

### 📰 Halaman Detail Budaya
- Artikel lengkap tentang setiap suku
- Galeri foto dengan popup detail
- Informasi lokasi dan koordinat GPS
- Sumber referensi yang terpercaya

### 🎨 Komponen Animasi
- Smooth scrolling dengan Lenis
- Animasi scroll reveal
- Transisi halaman yang halus
- Loading screen yang menarik

### 📱 Responsive Design
- Optimized untuk desktop, tablet, dan mobile
- Layout yang adaptif
- Navigasi yang user-friendly

## 🛠️ Teknologi yang Digunakan

### Frontend Framework
- **React 19.1.0** - Library JavaScript untuk UI
- **Vite 6.3.5** - Build tool dan development server

### Styling & Animation
- **Tailwind CSS 4.1.10** - Framework CSS utility-first
- **Framer Motion 12.6.0** - Library animasi React
- **GSAP 3.13.0** - Animasi JavaScript tingkat lanjut
- **AOS 2.3.4** - Animate On Scroll library

### Maps & Visualization
- **Leaflet 1.9.4** - Library peta interaktif
- **React Leaflet 5.0.0** - React wrapper untuk Leaflet

### Smooth Scrolling
- **@studio-freight/lenis 1.0.42** - Smooth scrolling library

### Development Tools
- **ESLint 9.25.0** - Linting JavaScript
- **PostCSS 8.5.5** - CSS processing

## 📁 Struktur Proyek

```
inside-tribe/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   │   └── FullNews.js    # Cultural data
│   ├── components/        # React components
│   │   ├── About/         # About page components
│   │   ├── Explore/       # Explore page components
│   │   ├── Footer/        # Footer components
│   │   ├── Home/          # Home page components
│   │   ├── items/         # Reusable item components
│   │   ├── Navbar/        # Navigation components
│   │   └── Tribes/        # Tribes page components
│   ├── data/              # Data files
│   ├── pages/             # Page components
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── vercel.json            # Deployment config
└── README.md              # Documentation
```

## 🚀 Instalasi dan Penggunaan

### Prerequisites
- Node.js (versi 18 atau lebih baru)
- pnpm (package manager)

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone [https://github.com/Adyfas/InsideTribe.git]
   cd inside-tribe
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Jalankan development server**
   ```bash
   pnpm dev
   ```

4. **Build untuk production**
   ```bash
   pnpm build
   ```

5. **Preview build**
   ```bash
   pnpm preview
   ```

### Scripts yang Tersedia
- `pnpm dev` - Menjalankan development server
- `pnpm build` - Build project untuk production
- `pnpm preview` - Preview build production
- `pnpm lint` - Linting code

## 🧩 Komponen Utama

### Core Components

#### `App.jsx`
- Router configuration dengan React Router
- Lenis smooth scrolling setup
- Loading component integration

#### `Navbar.jsx`
- Navigation menu responsive
- Smooth scroll navigation
- Mobile menu toggle

#### `Loading.jsx`
- Initial loading screen
- Animated loading indicator

#### `ScrollToTop.jsx`
- Auto scroll to top on route change
- Smooth scroll behavior

### Animation Components

#### `ScrollReveal.jsx`
- Scroll-triggered animations
- Intersection Observer implementation

#### `FadeUp.jsx`
- Fade up animation component
- Reusable animation wrapper

#### `AnimatedContent.jsx`
- Content animation wrapper
- Staggered animation effects

### UI Components

#### `PixelCard.jsx`
- Card component dengan pixel art style
- Hover effects dan animations

#### `BounceCards.jsx`
- Interactive card component
- Bounce animation effects

#### `Stack.jsx`
- Stacked card layout
- 3D transform effects

## 📊 Data Budaya

Data budaya disimpan dalam `src/data/FullNews.js` dengan struktur:

```javascript
{
  slug: "baduy",
  title: "Judul Artikel",
  subtitle: "Subtitle artikel",
  author: "Sumber artikel",
  location: "Lokasi suku",
  GPS: [latitude, longitude],
  from: "URL sumber",
  image: "URL gambar",
  content: ["Paragraf 1", "Paragraf 2", ...]
}
```

### Suku yang Ditampilkan
1. **Suku Baduy** - Banten, Indonesia
2. **Suku Dayak** - Kalimantan, Indonesia  
3. **Suku Asmat** - Papua, Indonesia
4. **Suku Bugis** - Sulawesi Selatan, Indonesia
5. **Orang Rimba/Suku Anak Dalam** - Jambi, Indonesia
6. **Suku Sakai** - Riau, Indonesia
7. **Suku Toraja** - Sulawesi Selatan, Indonesia

Dan banyak Suku lainnya....

## 🌐 Deployment

Proyek ini di-deploy menggunakan **Vercel** dengan konfigurasi:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Deployment Steps
1. Push code ke repository Git
2. Connect repository ke Vercel
3. Vercel akan otomatis build dan deploy
4. Website akan tersedia di URL Vercel

## 🤝 Kontribusi

Kontribusi untuk proyek ini sangat diterima! Berikut cara berkontribusi:

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Guidelines
- Ikuti coding standards yang ada
- Tambahkan dokumentasi untuk fitur baru
- Test fitur sebelum submit PR
- Pastikan responsive design tetap terjaga

## 📄 Lisensi

Proyek ini dibuat untuk Kompetisi Desain Website Difest 2024. Semua hak cipta dilindungi.

## 📞 Kontak

Untuk pertanyaan atau kolaborasi, silakan hubungi:
- Email: [adyfasofice@gmail.com]
- Website: [https://inside-tribe.vercel.app]
- GitHub: [https://github.com/Adyfas]

---

**Inside Tribe** - Melestarikan Budaya Indonesia melalui Digital Experience 🌿
