import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarrouselTextBanner from "@/components/carrousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <main>
       <CarrouselTextBanner />
       <FeaturedProducts />
       <BannerDiscount />
       <ChooseCategory />
       <BannerProduct />
    </main>
  );
}
