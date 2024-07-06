/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";

interface ProductImageViewProps {
    slug: string,
    url: string
}

const ProductImageView = (props : ProductImageViewProps) => {
    const { slug, url } = props
    const router = useRouter()
    return ( 
        <div onClick={() => router.push(`/product/${slug}`)} className="cursor-pointer">
                <img 
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
                    alt="Product"
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
        </div>
     );
}
 
export default ProductImageView;