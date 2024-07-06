import { ProductType } from "@/types/product";

interface ProductTasteOriginProps{
    product : ProductType
}

const ProductTasteOrigin = (props : ProductTasteOriginProps) => {
    const { product } = props
    const isActive = product.attributes.active
    return ( 
        <div className="flex items-center justify-between gap-3">
            <p className={`px-2 py-1 text-xs text-white rounded-full w-fit ${isActive ? 'bg-green-600 dark:text-white' : 'bg-red-700'}`}>
                {isActive ? 'Stock' : 'Agotado'}
            </p>
            <p className="px-2 py-1 text-xs text-white bg-black rounded-full w-fit">
                {product.attributes.marca}
            </p>
        </div>

        
     );
}
 
export default ProductTasteOrigin;