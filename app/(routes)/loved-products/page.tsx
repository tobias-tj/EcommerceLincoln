"use client"
import { UseLovedProducts } from "@/hooks/use-loved-products";
import LovedItemProduct from "./components/loved-item-product";

const Page = () => {
    const { lovedItems } = UseLovedProducts()
    return ( 
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">
                Productos que te gustan.
            </h1>

            <div>
                <div>
                    {lovedItems.length === 0 &&(
                        <p>No agregaste ningun producto como favorito.</p>
                    )}
                    <ul>
                        {lovedItems.map((item) => (
                            <LovedItemProduct key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
            </div>


        </div>
     );
}
 
export default Page;