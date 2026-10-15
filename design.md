# 🎨 DESIGN.md — UI/UX Specification & Integration Guide

**Brand Name:** Webtizen.id  
**Core Mission:** "Bantu UMKM Naik Kelas Lewat Website & Solusi Digital"  
**Primary UI Reference:** File `@referensi-ui.md` (Berisi sampel kode & dependensi dari 21st.dev `hero-01`)  

---

## 📌 1. Instructions for AI Agent

AI Agent (Antigravity/Cursor/Windsurf) **WAJIB** membaca file `@referensi-ui.md` untuk mengambil:
1. Struktur komponen Next.js/React dari 21st.dev (`hero-01.tsx`, `demo.tsx`).
2. Kode komponen Shadcn dasar (`button`, `sheet`, `input`, `label`, `navigation-menu`).
3. Perintah instalasi dependensi NPM (`@radix-ui/react-slot`, `lucide-react`, dll).

Saat melakukan integrasi kode dari `@referensi-ui.md`, AI Agent **WAJIB** menerapkan aturan kustomisasi branding Webtizen di bawah ini.

---

## 🎨 2. Design System & Style Guide

- **Theme & Vibe:** Clean, Modern, Professional, & Trustworthy.
- **Color Palette:**
  - **Background:** Light Slate / White (`#F8FAFC` & `#FFFFFF`)
  - **Primary Text:** Deep Navy Slate (`#0F172A`)
  - **Accent / CTA:** Emerald Green (`#10B981`) atau Dark Slate Button (`#0F172A`)
- **Typography:** Sans-serif modern (`Plus Jakarta Sans` / `Inter`)
- **Responsiveness:** Mobile-first design (Layout tumpuk vertikal pada layar smartphone `< 768px`).

---

## 🧩 3. Customization Rules for Webtizen (Override `referensi-ui.md`)

Ganti data dan teks *dummy* bawaan dari `@referensi-ui.md` dengan spesifikasi Webtizen berikut:

### A. Copywriting Hero Section
- **Title / Headline:** `"Bantu UMKM Naik Kelas Lewat Website Profesional"`
- **Subtitle:** `"Jasa pembuatan website cepat, terjangkau, dan tanpa ribet. Tingkatkan jangkauan bisnis dan kredibilitas usaha Anda hari ini."`
- **CTA Button:** `"Konsultasi Gratis via WA"`  
  👉 *Direct link ke WhatsApp API:* `https://wa.me/628XXXXXXXXX?text=Halo%20Webtizen,%20saya%20mau%20konsultasi%20pembuatan%20website`

### B. Navigation Data (`navigationData`)
Ganti array navigasi bawaan menjadi:
```tsx
const navigationData: NavigationSection[] = [
  { title: "Beranda", href: "#hero", isActive: true },
  { title: "Layanan", href: "#layanan" },
  { title: "Paket Harga", href: "#harga" },
  { title: "Portofolio", href: "#portofolio" },
  { title: "FAQ", href: "#faq" },
];