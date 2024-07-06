"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation"
import FiltersControlCategory from "./components/filters-controls-category";
import SkeletonShema from "@/components/skeletonShema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function Page() {
    const params = useParams();
    const {categorySlug} = params;
    const { result, loading } : ResponseType = useGetCategoryProduct(categorySlug)
    const [ filterOrigin, setFilterOrigin ] = useState('');
    const router = useRouter();


    const filteredProduct = result != null && !loading &&(
        filterOrigin == '' ? result : result.filter((product : ProductType) => product.attributes.marca == filterOrigin)
    )

    // console.log(filteredProduct)

    return(
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result != null && !loading &&(
                <h1 className="text-3xl font-medium">{result[0].attributes.category.data.attributes.categoryName}</h1>
            )}
            <Separator />

            <div className="sm:flex sm:justify-between">
                <FiltersControlCategory setFilterOrigin={setFilterOrigin} />

                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonShema grid={3} />
                    )}
                    {filteredProduct != null && !loading &&(
                        filteredProduct.map((product : ProductType) => (
                            <ProductCard key={product.id} product = {product}/>
                        ))
                    )}
                    {filteredProduct != null && !loading && filteredProduct.length === 0 &&(
                        <p>No hay productos con este filtro disponible.</p>
                    )}
                </div>
            </div>
        </div>

    )

}

