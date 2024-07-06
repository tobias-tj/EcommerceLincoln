import Link from "next/link"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { Menu } from "lucide-react"

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/pesca-camping" className="block">Pesca y Camping</Link>
                <Link href="/categories/ferreteria" className="block">Ferreteria</Link>
                <Link href="/categories/electricidad" className="block">Electricidad</Link>
            </PopoverContent>
        </Popover>
    )
}

export default ItemsMenuMobile