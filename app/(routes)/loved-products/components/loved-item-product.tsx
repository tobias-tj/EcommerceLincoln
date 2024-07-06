/* eslint-disable @next/next/no-img-element */
import ProductImageView from "@/components/shared/product-image-view";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps{
    product : ProductType
}

const LovedItemProduct = (props : LovedItemProductProps) => {
    const { product } = props
    const router = useRouter()
    const { removeLovedItem, checkoutLovedItem } = UseLovedProducts()
    const { addItem } = useCart()

    const addToCheckout = () => {
        addItem(product)
        checkoutLovedItem(product)
    }

    return ( 
        <li className="flex p-6 border-b">

            <ProductImageView slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} />

            <div className="flex justify-between flex-1 px-6">
                <div>
                    <div>
                        <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
                        <p className="font-bold">{formatPrice(product.attributes.price)}</p>
                        <ProductTasteOrigin product={product} />
                        <Button className="mt-5 rounded-full" onClick={addToCheckout}>Agregar al carrito</Button>
                    </div>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition dark:bg-yellow-500")}>
                        <X size={20} onClick={()=> removeLovedItem(product.id) } className="dark:text-black" />
                    </button>
                </div>
            </div>
        </li>
     );
}
 
export default LovedItemProduct;