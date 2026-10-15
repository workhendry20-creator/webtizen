# 📄 `PRD.md` (Product Requirement Document)

## 📌 1. Project Overview & Business Goals

* **Project Name:** Webtizen Landing Page (MVP Launch)
* **Brand Identity:** Webtizen.id — Penyedia Jasa Pembuatan Website & Solusi Digital UMKM
* **Core Mission:** *"Bantu UMKM Naik Kelas Lewat Website & Solusi Digital"*
* **Primary Objective:** Membangun *high-converting 1-page landing page* untuk mengubah pengunjung (pemilik UMKM) menjadi *qualified leads* via WhatsApp.
* **Target Audience:** Pemilik UMKM di Indonesia (F&B, Fashion/Retail, Jasa Lokal, Toko Online) yang menginginkan website profesional, harga transparan, dan proses terima beres.

---

## 🛠️ 2. Technical Stack Architecture

* **Framework:** Next.js (App Router, React 19 / Modern React)
* **Language:** TypeScript (`strict: true`)
* **Styling:** Tailwind CSS (v4 / Modern setup)
* **UI Component Library:** Shadcn UI + Radix UI Primitives
* **Icons:** `lucide-react` & `@radix-ui/react-icons`
* **Animations:** `framer-motion`
* **State & Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`
* **Directory Structure Standard:**
```text
webtizen/
├── PRD.md
├── DESIGN.md
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/            # Komponen Shadcn & 21st.dev
│   └── lib/
│       └── utils.ts       # Utility helper (cn function)

```



---

## 📦 3. Product Features & Business Offerings

### A. Navigation & Branding

* Logo Teks Modern (`Webtizen.id`).
* Smooth Scrolling Navigation ke Section utama: *Beranda*, *Layanan*, *Paket Harga*, *Portofolio*, *FAQ*.

### B. Value Proposition & Hero Section

* **Headline:** *"Bantu UMKM Naik Kelas Lewat Website Profesional"*
* **Sub-headline:** *"Jasa pembuatan website cepat, terjangkau, dan tanpa ribet. Tingkatkan jangkauan bisnis dan kredibilitas usaha Anda hari ini."*
* **CTA Utama:** Tombol *"Konsultasi Gratis via WA"* yang mengarah langsung ke WhatsApp API dengan *pre-filled text*.
* **Social Proof & Credibility:** List Avatar/Testimoni Klien + Banner Kategori Industri UMKM yang didukung (F&B, Retail, Jasa, Toko Online).

### C. Service Packages (Model Penawaran)

1. **Paket Development Only:**
* Target: Klien yang sudah memiliki domain & hosting sendiri.
* Inklusi: Custom Responsive Layout, Integrasi Tombol WA, SEO Basic, Serah Terima Kode/File.


2. **Paket All-in Terima Beres (Recommended / Highlighted Value):**
* Target: Pemilik UMKM yang menginginkan solusi praktis tanpa pusing urusan teknis.
* Inklusi: Gratis Domain (.com / .id) 1 Tahun, Gratis Hosting 1 Tahun, Custom Responsive Layout, Integrasi WA + Google Maps, Free Maintenance & Bug Fix 30 Hari.



### D. Operational Guardrails (Aturan Jasa)

* Proses pengerjaan transparan 4 langkah: *Konsultasi WA $\rightarrow$ Kirim Bahan $\rightarrow$ Pengerjaan & Revisi $\rightarrow$ Website Launching*.
* Batas revisi jelas & jaminan dukungan purna jual (*maintenance* 30 hari).

---

## 🛑 4. Strict AI Agent Operating Rules

Apabila AI Agent (Antigravity/Cursor/Windsurf) membaca dokumen ini, AI **WAJIB** mematuhi aturan berikut:

1. **Modularity & Reusability:**
* Seluruh komponen reusable HARUS disimpan di dalam `@/components/ui/`.
* DILARANG menumpuk seluruh logic atau komponen di dalam `app/page.tsx`. Gunakan `page.tsx` hanya sebagai penggabung (*assembler*) dari section-section terpisah.


2. **Type Safety:**
* DILARANG menggunakan `any` pada TypeScript types/interfaces.
* Seluruh data props harus terdefinisi interface-nya secara eksplisit.


3. **Mobile-First & Responsiveness:**
* Karena >80% calon klien UMKM mengakses via smartphone, pastikan seluruh tata letak (*grid/flex/padding/font-size*) menggunakan pendekatan *mobile-first* Tailwind (misal: `text-sm md:text-base`, `flex-col md:flex-row`).


4. **Preserve External Design System:**
* Jangan mengubah konfigurasi Tailwind CSS, `cn()` utility, atau struktur dasar folder tanpa instruksi eksplisit.
* Ikuti seluruh panduan komponen UI yang ada di file **`DESIGN.md`**.


5. **Clean Code & No Hallucinations:**
* Seluruh link gambar *placeholder* harus menggunakan sumber Unsplash yang valid atau asset dari CDN 21st.dev yang sudah diberikan.
* Seluruh tombol CTA utama WA harus mengarah ke URL terstruktur: `[https://wa.me/628XXXXXXXXX?text=](https://wa.me/628XXXXXXXXX?text=)...`.



---
