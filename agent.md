# 🤖 AGENT.md — Execution Plan & Operating Rules for AI Agent

Dokumen ini adalah **panduan kerja utama (Task Checklist)** untuk AI Agent. Agent **WAJIB** membaca file `@PRD.md`, `@DESIGN.md`, dan `@referensi-ui.md` sebelum dan selama mengeksekusi task.

---

## 🛑 STRICT OPERATING RULES FOR AGENT

1. **GITHUB PUSH MANDATE (CRITICAL WARNING):**
   - Setiap kali menyelesaikan 1 task atau milestone besar, Agent **WAJIB** melakukan commit dan push ke repository GitHub:
     `https://github.com/workhendry20-creator/webtizen`
   - Gunakan pesan commit yang jelas dan terstruktur (misal: `feat: setup dependencies and directory structure`).

2. **RINGKAS & ESIEN (CONCISE OUTPUT):**
   - Selalu berikan respon / output ringkas di terminal maupun chat. 
   - DILARANG memberikan penjelasan teori atau teks panjang lebar yang tidak perlu. Langsung pada *action*, kode, atau hasil eksekusi terminal.

3. **AUTOMATIC TASK CHECKLIST UPDATES:**
   - Setelah menyelesaikan sebuah sub-task dengan sukses dan memverifikasinya, Agent **WAJIB LANGSUNG MENGEDIT file `AGENT.md` ini** untuk mengubah tanda `[ ]` menjadi `[x]` pada task yang selesai.

4. **MODULARITY & TYPE SAFETY:**
   - Simpan komponen reusable di `@/components/ui/`.
   - DILARANG menggunakan `any` pada TypeScript.
   - DILARANG menumpuk seluruh komponen di `src/app/page.tsx`.

---

## 📋 TASK CHECKLIST

### 🛫 Phase 1: Environment Setup & Dependencies
- [x] **Task 1.1:** Inisialisasi/Verifikasi struktur project Next.js (App Router, TypeScript, Tailwind CSS, alias `@/*`).
- [x] **Task 1.2:** Install NPM dependencies sesuai `@referensi-ui.md`:
  `npm install @radix-ui/react-slot class-variance-authority lucide-react @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-icons @radix-ui/react-navigation-menu framer-motion clsx tailwind-merge`
- [x] **Task 1.3:** Setup folder structure di `src/components/ui/` dan `src/components/ui/hero-01-utils/`.
- [x] **Task 1.4 (Git):** Hubungkan remote repository `https://github.com/workhendry20-creator/webtizen` (jika belum), lalu commit & push setup awal.

---

### 🧩 Phase 2: Primitive UI Components Setup
- [x] **Task 2.1:** Buat file `@/components/ui/button.tsx` (dari `@referensi-ui.md`).
- [x] **Task 2.2:** Buat file `@/components/ui/sheet.tsx` (dari `@referensi-ui.md`).
- [x] **Task 2.3:** Buat file `@/components/ui/input.tsx` & `@/components/ui/label.tsx` (dari `@referensi-ui.md`).
- [x] **Task 2.4:** Buat file `@/components/ui/navigation-menu.tsx` (dari `@referensi-ui.md`).
- [x] **Task 2.5 (Git):** Commit & push komponen primitives ke GitHub.

---

### 🚀 Phase 3: Webtizen Hero Section Component Integration
- [x] **Task 3.1:** Buat sub-komponen utility Hero di `@/components/ui/hero-01-utils/` (`header.tsx`, `hero.tsx`, `brand-slider.tsx`).
- [x] **Task 3.2:** Buat komponen utama `@/components/ui/hero-01.tsx` dengan kustomisasi data Webtizen dari `@DESIGN.md`:
  - [x] Update `navigationData` (Beranda, Layanan, Paket Harga, Portofolio, FAQ).
  - [x] Update Hero Headline & Subtitle ("Bantu UMKM Naik Kelas Lewat Website Profesional").
  - [x] Update CTA WhatsApp Direct Link (`https://wa.me/628XXXXXXXXX?text=...`).
  - [x] Update `avatarList` dengan Unsplash stock images.
  - [x] Update `brandList` dengan kategori bisnis UMKM (F&B, Fashion & Retail, Jasa, Toko Online).
- [x] **Task 3.3 (Git):** Commit & push Hero section ke GitHub.

---

### 📱 Phase 4: Page Assembly, Responsive Check & Build
- [x] **Task 4.1:** Rakit komponen Hero dan Navigation di `src/app/page.tsx`.
- [x] **Task 4.2:** Verifikasi tampilan responsif (Mobile-first check untuk layar HP `< 768px`).
- [x] **Task 4.3:** Jalankan `npm run build` atau `npm run dev` untuk memastikan **0 TypeScript error** dan **0 Tailwind syntax error**.
- [x] **Task 4.4 (Git Final Push):** Commit & push hasil akhir ke GitHub repository `https://github.com/workhendry20-creator/webtizen`.
- [x] **Task 4.5:** Edit dan tandai seluruh checklist di `AGENT.md` ini menjadi selesai (`[x]`).

---

## 🤖 INITIAL PROMPT FOR AGENT Execution

Beri instruksi ini ke Agent untuk memulai:

> *"Agent, tolong baca `@PRD.md`, `@DESIGN.md`, dan `@referensi-ui.md`.*  
> *Mulaikah mengeksekusi task dari Phase 1 di `AGENT.md` secara bertahap. Selalu berikan output ringkas, selalu lakukan commit & push ke GitHub `https://github.com/workhendry20-creator/webtizen` setelah setiap milestone, dan edit `AGENT.md` untuk mencentang task `[x]` yang sudah selesai!"*
---

### 🎨 Phase 5: Stitch Static HTML/CSS Refactor to Modular Next.js Components
- [x] **Task 5.1:** Ekstraksi aset Stitch (`code.html`, `screen.png`, `logo.png`).
- [x] **Task 5.2:** Setup design tokens Tailwind CSS v4 (`brand-*`, `editorial-*`), typography (`Newsreader` italic, `Plus Jakarta Sans`), dan custom utilities (`mesh-aura`, `hero-heading`) di `globals.css` dan `layout.tsx`.
- [x] **Task 5.3:** Refactor elemen HTML statis menjadi komponen modular di `@/components/sections/`:
  - [x] `@/components/sections/Navbar.tsx`: Floating pill navigation, mobile responsive drawer toggle, WhatsApp CTA button.
  - [x] `@/components/sections/Hero.tsx`: Mesh aura background, badge status, editorial headline, avatar rating stack, UMKM sector ticker.
  - [x] `@/components/sections/Services.tsx`: Value proposition 3 pillars, 4 spesialisasi sektor UMKM, 4 langkah alur kerja santai.
  - [x] `@/components/sections/Pricing.tsx`: Paket Starter, Paket Terima Beres (Featured), note custom consultation, 3 showcase portofolio nyata.
  - [x] `@/components/sections/FAQ.tsx`: Testimoni klien (Dimas Prasetyo), 4 collapsible accordion FAQ items.
  - [x] `@/components/sections/Footer.tsx`: Final CTA mesh aura banner, copyright, quick links, direct WhatsApp link.
- [x] **Task 5.4:** Rakit seluruh modular section di `src/app/page.tsx`.
- [x] **Task 5.5:** Verifikasi build produksi (`npm run build`) dengan hasil **0 TypeScript error** dan **0 hydration error**.
- [x] **Task 5.6 (Git):** Commit & push hasil refactor ke remote repository GitHub `https://github.com/workhendry20-creator/webtizen`.
