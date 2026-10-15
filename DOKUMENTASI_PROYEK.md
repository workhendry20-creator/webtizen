# 📑 Dokumentasi Komprehensif Proyek Webtizen.id

Dokumen ini merangkum seluruh arsitektur teknis, riwayat pekerjaan yang telah diselesaikan, ceklis pencapaian, serta *To-Do List* langkah lanjutan untuk kesiapan rilis produksi (*production-ready*).

---

## 🌐 1. Profil & Arsitektur Proyek

* **Nama Proyek:** Webtizen.id (Landing Page Solusi Jasa Pembuatan Website Profesional untuk UMKM)
* **Framework:** [Next.js 16.4.1 (App Router)](https://nextjs.org/)
* **Runtime / Core:** React 19.3.0 + TypeScript 5
* **Styling Engine:** Tailwind CSS v4 (`@import "tailwindcss"`)
* **Animasi:** Framer Motion (`^14.3.0`)
* **Tipografi:** Google Fonts (`Plus Jakarta Sans` & `Newsreader Serif Italic`)
* **Repositori GitHub:** [`https://github.com/workhendry20-creator/webtizen`](https://github.com/workhendry20-creator/webtizen)
* **Branch Utama:** `main`

---

## 🏗️ 2. Struktur Direktori Proyek

```text
webtizen.id/
├── public/                     # Aset publik statis (Logo, Icon, Screenshot)
│   ├── logo.png                # Logo resmi Webtizen.id
│   └── screen.png              # Mockup visual referensi Stitch
├── src/
│   ├── app/
│   │   ├── globals.css         # Token Tailwind v4 (@theme), custom utilities & aura mesh
│   │   ├── layout.tsx          # Root layout, Google Fonts (Plus Jakarta Sans & Newsreader)
│   │   └── page.tsx            # Halaman utama (Assembly 6 section modular)
│   ├── components/
│   │   ├── sections/           # Komponen modular section halaman
│   │   │   ├── Navbar.tsx      # Top navbar, sliding active pill, mobile drawer, WA CTA
│   │   │   ├── Hero.tsx        # Hero section, badge status, headline, avatar rating, ticker
│   │   │   ├── Services.tsx    # 3 pilar value, 4 solusi sektor UMKM, 4 alur kerja
│   │   │   ├── Pricing.tsx     # Paket Starter, Paket Terima Beres, 3 showcase portofolio
│   │   │   ├── FAQ.tsx         # Testimoni klien (Dimas Prasetyo), 4 collapsible accordion
│   │   │   └── Footer.tsx      # Final CTA banner, hak cipta, navigasi footer
│   │   └── ui/
│   │       ├── whatsapp-icon.tsx # Komponen reusable vektor SVG logo resmi WhatsApp
│   │       ├── button.tsx      # Primitive UI shadcn button
│   │       ├── input.tsx       # Primitive UI input
│   │       ├── label.tsx       # Primitive UI label
│   │       ├── sheet.tsx       # Primitive UI sheet/drawer
│   │       └── navigation-menu.tsx # Primitive navigation menu
│   └── lib/
│       └── utils.ts            # Helper function (clsx + tailwind-merge)
├── AGENT.md                    # Log operating checklist agent
├── DOKUMENTASI_PROYEK.md       # Dokumentasi utama proyek & to-do list (file ini)
├── PRD.md                      # Product Requirements Document
├── package.json                # Dependensi & script Next.js
└── tsconfig.json               # Konfigurasi TypeScript
```

---

## ✅ 3. Ceklis Pekerjaan yang Telah Diselesaikan (Completed Tasks)

### 📦 A. Ekstraksi Aset & Handoff Desain (Google Stitch)
- [x] **Identifikasi & Retrieval Desain:** Mengidentifikasi project Stitch *Webtizen Landing Page* (`12083392474081707916`) dan screen `4d9ca2c4806242ccb4547e75dde522ae`.
- [x] **Unduh Aset via `curl -L`:** Mengunduh logo resmi Webtizen dari Google Storage CDN dan menempatkannya di `public/logo.png`.
- [x] **Penyusunan Metadata:** Pembuatan log metadata proyek dan penataan aset visual.

### 🎨 B. Konfigurasi Design System & Styling (Tailwind CSS v4)
- [x] **Setup Token Warna `@theme`:** Mendefinisikan warna Sage Green (`brand: #437055`, `brand-dark`, `brand-light`, `brand-soft`, `brand-accent`) dan warna tipografi editorial (`editorial-black`, `editorial-charcoal`, `editorial-muted`, `editorial-surface`, `editorial-border`) di `src/app/globals.css`.
- [x] **Efek Visual Khusus:** Menambahkan utility class `.mesh-aura` (gradasi radial hangat natural), `.hero-heading`, dan `.subtle-border`.
- [x] **Dual Typography Engine:** Mengintegrasikan `Plus Jakarta Sans` (sans modern) dan `Newsreader` (serif italic berkarakter editorial) di `src/app/layout.tsx`.

### 🧩 C. Refactoring Modular Komponen Next.js (App Router)
- [x] **`Navbar.tsx`:**
  - Header *sticky* dengan latar *frosted blur* (`backdrop-blur-md`).
  - Navigasi *floating pill* menu desktop (Beranda, Tentang Kami, Layanan, Alur Kerja, Paket Harga, Portofolio, FAQ).
  - Tombol CTA kapsul hitam terhubung ke WhatsApp.
  - Menu *mobile drawer* interaktif dengan tombol hamburger yang responsif.
- [x] **`Hero.tsx`:**
  - Badge status berdenyut: *"Jasa Pembuatan Website Siap Jualan No. #1"*.
  - Headline utama dengan aksen Newsreader serif italic: *"Bantu UMKM naik kelas dengan website profesional"*.
  - Social proof: Avatar stack 4 inisial pemilik usaha, rating 5 bintang, dan label *"Dipercaya 150+ pemilik UMKM"*.
  - Ticker/banner kategori industri mitra (Kopi Cerita Rasa, Batik Sekar Arum, Bengkel AutoMitra, Glow Naturals, Toko Berkah Mandiri).
- [x] **`Services.tsx`:**
  - Section `#tentang`: 3 pilar keunggulan (Cepat & Mobile-First, Pesan Cepat ke WA, Terima Beres & Bergaransi).
  - Section `#layanan`: 4 kartu spesialisasi sektor UMKM (Kuliner & F&B, Fashion & Retail, Jasa & Servis Lokal, Katalog WhatsApp).
  - Section `#alur-kerja`: 4 langkah alur kerja santai (01 Konsultasi WA $\rightarrow$ 02 Kirim Materi $\rightarrow$ 03 Desain & Coding $\rightarrow$ 04 Go Live).
- [x] **`Pricing.tsx`:**
  - Section `#harga`: 2 tingkatan paket transparan:
    1. *Paket Starter:* Rp 799.000 (Development Only / Bawa Hosting Sendiri).
    2. *Paket Terima Beres (Featured):* Rp 1.499.000 (All-in-One: Domain .com/.id 1 Thn, Cloud Hosting SSD/NVMe 1 Thn, SSL, Input 15 Produk, Maintenance 30 Hari).
    3. Catatan konsultasi untuk kebutuhan website kustom / e-commerce skala besar.
  - Section `#portofolio`: 3 kartu etalase karya nyata (*Kopi Cerita Rasa*, *Sekar Arum Batik*, *AutoMitra Service*).
- [x] **`FAQ.tsx`:**
  - Testimonial card: Cerita sukses Dimas Prasetyo (Owner Kopi Cerita Rasa).
  - Section `#faq`: 4 accordion collapsible interaktif mengenai durasi pengerjaan, kemudahan kelola, perpanjangan tahunan, dan garansi teknis.
- [x] **`Footer.tsx`:**
  - Section Final CTA dengan latar *mesh aura*: *"Siap miliki website yang bikin bisnis Anda tampil beda?"*.
  - Baris copyright resmi Webtizen.id 2026 dan tautan cepat ke WhatsApp support.
- [x] **`page.tsx` Assembly:** Menggabungkan seluruh komponen modular secara bersih, semantik, dan terstruktur.

### ⚡ D. Interaktivitas Dinamis & Polish UI/UX
- [x] **Animated Sliding Pill (Framer Motion):**
  - Mengimplementasikan `<motion.span layoutId="activeNavPill" />` pada top navbar dengan *spring physics* (`stiffness: 400`, `damping: 32`).
  - Pill putih kapsul meluncur mulus ke menu yang diklik pengguna tanpa melompat/stuck di "Beranda".
- [x] **Sinkronisasi Scroll Otomatis (ScrollSpy):**
  - Listener scroll otomatis mendeteksi section yang sedang terlihat di layar dan memindahkan pill secara *real-time*.
- [x] **Standardisasi Logo Resmi WhatsApp:**
  - Pembuatan komponen reusable [whatsapp-icon.tsx](file:///Users/mm/webtizen.id/src/components/ui/whatsapp-icon.tsx).
  - Mengganti seluruh tanda panah (`↗`) pada tombol CTA WA (Navbar desktop, Mobile menu, Pricing Paket Terima Beres, dan Final CTA Footer) menjadi logo vektor SVG resmi WhatsApp dengan efek *micro-interaction hover* (`scale-110`).

### 🛠️ E. Penataan Environment & Pembersihan Kode (Clean Code)
- [x] **Perbaikan Folder Terminal & Package Config:**
  - Menginstal `node_modules` mandiri di direktori aktif `/Users/mm/webtizen.id` dan menyinkronkan seluruh file konfigurasi (`package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`).
- [x] **Pembersihan File Statis:**
  - Menghapus file HTML mentah (`index.html`) dan folder draf ekspor Stitch (`stitch/`).
  - Menghapus file template lama (`demo.tsx`) dan subkomponen sebelum refactor (`hero-01.tsx`, `process-steps.tsx`, `service-packages.tsx`, `faq-and-footer.tsx`, `marquee.tsx`).
- [x] **Verifikasi Build:**
  - Build produksi (`npm run build`) diverifikasi sukses dengan status: **0 error TypeScript, 0 error styling, 0 hydration mismatch**.
- [x] **Git Version Control:**
  - Seluruh milestone dikomit dengan pesan terstruktur dan di-push ke branch `main` repositori remote GitHub.

---

## 📌 4. TO-DO LIST (Pekerjaan yang Harus Dikerjakan Selanjutnya)

Berikut adalah daftar rekomendasi tugas berikutnya yang terbagi berdasarkan prioritas untuk membawa website ini siap digunakan secara komersial:

### 🔴 Prioritas Tinggi (Essential / Komersial)
- [ ] **Konfigurasi Nomor WhatsApp Asli (Environment Variable):**
  - *Deskripsi:* Ganti nomor dummy `6281234567890` dengan nomor WhatsApp Business resmi admin Webtizen.
  - *Solusi:* Buat file `.env.local` dengan variabel `NEXT_PUBLIC_WHATSAPP_NUMBER` dan implementasikan helper URL generator agar nomor kontak terpusat di satu konfigurasi.
- [ ] **Kustomisasi Pre-filled Pesan WhatsApp:**
  - *Deskripsi:* Pastikan setiap paket memiliki template pesan yang spesifik agar admin langsung mengetahui paket apa yang diinginkan calon klien.
  - *Target:*
    * Tombol Header / Hero: *"Halo Webtizen, saya ingin konsultasi pembuatan website untuk usaha saya..."*
    * Tombol Paket Starter: *"Halo Webtizen, saya tertarik pesan Paket Starter Rp799.000..."*
    * Tombol Paket Terima Beres: *"Halo Webtizen, saya ingin ambil Paket Terima Beres Rp1.499.000..."*
- [ ] **Penggantian Favicon Kustom:**
  - *Deskripsi:* Ganti `favicon.ico` bawaan Next.js di `src/app/favicon.ico` menggunakan ikon logo monogram Webtizen (`W`).

### 🟡 Prioritas Menengah (Peningkatan Konversi & SEO)
- [ ] **Optimasi SEO & OpenGraph Meta Tags (`layout.tsx`):**
  - *Deskripsi:* Lengkapi metadata dengan `openGraph` dan `twitter` cards (termasuk gambar pratinjau `og:image` 1200x630px) agar pratinjau tautan terlihat profesional saat dibagikan di WhatsApp, LinkedIn, atau media sosial.
- [ ] **Generasi `sitemap.ts` & `robots.ts` Otomatis:**
  - *Deskripsi:* Tambahkan file `src/app/sitemap.ts` dan `src/app/robots.ts` standar Next.js App Router agar website cepat terindeks di mesin pencari Google.
- [ ] **Interaktivitas Portofolio (Modal / Preview Link):**
  - *Deskripsi:* Tambahkan tombol aksi pada 3 kartu portofolio (*Kopi Cerita Rasa*, *Sekar Arum Batik*, *AutoMitra Service*) seperti tombol *"Lihat Demo Website"* atau modal popup gambar resolusi tinggi untuk meningkatkan kepercayaan calon customer.
- [ ] **Google Analytics 4 / Meta Pixel Integration:**
  - *Deskripsi:* Pasang Google Tag Manager (GTM) atau GA4 menggunakan `@next/third-parties/google` untuk memantau performa pengunjung dan mengukur conversion rate klik tombol WhatsApp.

### 🟢 Prioritas Rendah (Fitur Ekstensi / Scale-Up)
- [ ] **Form Estimasi Biaya Interaktif (Kalkulator Website UMKM):**
  - *Deskripsi:* Widget interaktif di mana pengguna bisa mencentang fitur yang dibutuhkan (misal: jumlah halaman, fitur katalog, integrasi payment gateway) dan langsung melihat perkiraan harga sebelum klik WA.
- [ ] **Integrasi Deployment Otomatis (CI/CD ke Vercel):**
  - *Deskripsi:* Hubungkan repositori GitHub `workhendry20-creator/webtizen` ke akun Vercel dan pasang *Custom Domain* `webtizen.id` dengan SSL otomatis.

---

## 💻 5. Panduan Menjalankan Perintah Terminal

Semua perintah dijalankan di dalam direktori proyek:
```bash
cd /Users/mm/webtizen.id
```

### Menjalankan Server Pengembangan (Dev Mode):
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### Memvalidasi & Membangun Proyek untuk Produksi (Build Check):
```bash
npm run build
```

### Memeriksa Format & Linting Kode:
```bash
npm run lint
```
