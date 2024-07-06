import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ProductType } from '@/types/product'
import { toast } from '@/components/ui/use-toast'

interface UseLovedProductsType{
    lovedItems: ProductType[],
    addLovedItem: (data: ProductType) => void,
    removeLovedItem: (id : number) => void,
    checkoutLovedItem: (data: ProductType) => void
}

export const UseLovedProducts = create(persist<UseLovedProductsType>((set, get) => ({

    lovedItems: [],
    addLovedItem: (data : ProductType) =>{
        const currentLovedItem = get().lovedItems;
        const existingItem = currentLovedItem.find((item) => item.id === data.id)


        if(existingItem){
            return toast({
                title: "El producto ya se encuentra en la lista 💔.",
                variant: "destructive"
            })
        }

        set({
            lovedItems: [...get().lovedItems, data]
        })
        toast({
            title: "Producto agregado como favorito ❤️."
        })
    },
    removeLovedItem: (id: number) => {
        set({lovedItems : [...get().lovedItems.filter((item) => item.id != id)]})
        toast({
            title: "Producto eliminado de favoritos 🗑."
        })
    },

    checkoutLovedItem: (data : ProductType) =>{
        const noHaveProduct = data.attributes.active
        if(!noHaveProduct){
            return toast({
                title: "No hay stock del producto!",
                variant: "destructive"
            })
        }else{
            set({lovedItems : [...get().lovedItems.filter((item) => item.id != data.id)]})
            toast({
                title: "Producto eliminado de favoritos 🗑."
            })
        }
        
    }

}),{
    name: "loved-products-storage",
    storage : createJSONStorage(() => localStorage)
}))