import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductType = {
    product: ProductType
}

const InfoProduct = (props : InfoProductType) => {
    const { product } = props
    const { addItem } = useCart()
    const { addLovedItem, lovedItems } = UseLovedProducts()

    // console.log(lovedItems)
    const isActive = product.attributes.active
    return ( 
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl">{product.attributes.productName}</h1>
                <div className="flex items-center justify-between gap-3">
                    <ProductTasteOrigin product={product} />
                </div>
            </div>
            <Separator className="my-4"/>
            <p>{product.attributes.description}</p>
            <Separator className="my-4"/>
            <p className="my-4 text-2xl">{formatPrice(product.attributes.price)}</p>
            <div className="flex items-center gap-5">
                <Button className="w-full" onClick={() => addItem(product)}>Comprar</Button>
                <Heart width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black"
                 onClick={() => addLovedItem(product)}/>
            </div>
        </div>
     );
}
 
export default InfoProduct;