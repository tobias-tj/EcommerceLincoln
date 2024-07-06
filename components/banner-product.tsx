import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return ( 
        <>
            <div className="mt-4 text-center">
                <p>Encuentra todo en nuestra tienda</p>
                <p className="mt-2 text-5xl font-extrabold uppercase">Compras Online</p>
                <h4 className="my-2 text-lg">Herramientas diseñadas para trabajos de alto desempeño</h4>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/slider-image.jpg')] bg-center mt-5"></div>
        </>
        
     );
}
 
export default BannerProduct;