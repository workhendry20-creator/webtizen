import HeroSection from "@/components/ui/hero-01-utils/hero"
import type { NavigationSection } from "@/components/ui/hero-01-utils/header"
import Header from "@/components/ui/hero-01-utils/header"
import BrandSlider, {
  type BrandList,
} from "@/components/ui/hero-01-utils/brand-slider"
import type { AvatarList } from "@/components/ui/hero-01-utils/hero"

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
  ]

  const navigationData: NavigationSection[] = [
    { title: "Beranda", href: "#hero", isActive: true },
    { title: "Layanan", href: "#layanan" },
    { title: "Paket Harga", href: "#harga" },
    { title: "Portofolio", href: "#portofolio" },
    { title: "FAQ", href: "#faq" },
  ]

  const brandList: BrandList[] = [
    {
      name: "Kuliner & F&B",
      subtitle: "Resto, Cafe, Katering",
    },
    {
      name: "Fashion & Retail",
      subtitle: "Boutique, Distro, Aksesoris",
    },
    {
      name: "Jasa Lokal & Servis",
      subtitle: "Bengkel, AC, Cuci Sepatu",
    },
    {
      name: "Toko Online & E-Commerce",
      subtitle: "Produk Fisik & Digital",
    },
    {
      name: "Kecantikan & Barbershop",
      subtitle: "Klinik, Salon, Barbershop",
    },
    {
      name: "Distributor & Grosir",
      subtitle: "B2B & Supplier Daerah",
    },
    {
      name: "Konsultan & Bisnis",
      subtitle: "Legalitas, Akuntansi, Agency",
    },
  ]

  return (
    <div className="relative w-full">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  )
}
