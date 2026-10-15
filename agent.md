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
- [ ] **Task 3.1:** Buat sub-komponen utility Hero di `@/components/ui/hero-01-utils/` (`header.tsx`, `hero.tsx`, `brand-slider.tsx`).
- [ ] **Task 3.2:** Buat komponen utama `@/components/ui/hero-01.tsx` dengan kustomisasi data Webtizen dari `@DESIGN.md`:
  - [ ] Update `navigationData` (Beranda, Layanan, Paket Harga, Portofolio, FAQ).
  - [ ] Update Hero Headline & Subtitle ("Bantu UMKM Naik Kelas Lewat Website Profesional").
  - [ ] Update CTA WhatsApp Direct Link (`https://wa.me/628XXXXXXXXX?text=...`).
  - [ ] Update `avatarList` dengan Unsplash stock images.
  - [ ] Update `brandList` dengan kategori bisnis UMKM (F&B, Fashion & Retail, Jasa, Toko Online).
- [ ] **Task 3.3 (Git):** Commit & push Hero section ke GitHub.

---

### 📱 Phase 4: Page Assembly, Responsive Check & Build
- [ ] **Task 4.1:** Rakit komponen Hero dan Navigation di `src/app/page.tsx`.
- [ ] **Task 4.2:** Verifikasi tampilan responsif (Mobile-first check untuk layar HP `< 768px`).
- [ ] **Task 4.3:** Jalankan `npm run build` atau `npm run dev` untuk memastikan **0 TypeScript error** dan **0 Tailwind syntax error**.
- [ ] **Task 4.4 (Git Final Push):** Commit & push hasil akhir ke GitHub repository `https://github.com/workhendry20-creator/webtizen`.
- [ ] **Task 4.5:** Edit dan tandai seluruh checklist di `AGENT.md` ini menjadi selesai (`[x]`).

---

## 🤖 INITIAL PROMPT FOR AGENT Execution

Beri instruksi ini ke Agent untuk memulai:

> *"Agent, tolong baca `@PRD.md`, `@DESIGN.md`, dan `@referensi-ui.md`.*  
> *Mulaikah mengeksekusi task dari Phase 1 di `AGENT.md` secara bertahap. Selalu berikan output ringkas, selalu lakukan commit & push ke GitHub `https://github.com/workhendry20-creator/webtizen` setelah setiap milestone, dan edit `AGENT.md` untuk mencentang task `[x]` yang sudah selesai!"*