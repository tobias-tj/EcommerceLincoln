import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from '@/components/ui/use-toast'

import { ProductType } from "@/types/product"

interface CartStore {
    items : ProductType[],
    addItem: (data: ProductType) => void,
    removeItem: (id: number) => void,
    removerAll: () => void
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)
        const noHaveProduct = data.attributes.active

        if(existingItem){
            return toast({
                title: "El producto ya existe.",
                variant: "destructive"
            })
        }

        if(!noHaveProduct){
            return toast({
                title: "No hay stock del producto!",
                variant: "destructive"
            })
        }



        set({
            items: [...get().items, data]
        })
        toast({
            title: "Producto agregado correctamente🔨❤️"
        })
    },
    removeItem: (id : number) => {
        set({items : [...get().items.filter((item) => item.id != id)]})
        toast({
            title: "Producto eliminado del carrito.🗑️"
        })
    },
    removerAll: () => set({ items: [] })
}), {
    name: "cart-storage",
    storage : createJSONStorage(() => localStorage)
}))