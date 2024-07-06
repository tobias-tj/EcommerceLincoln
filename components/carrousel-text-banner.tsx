"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"


export const dataCarrouselTop = [
    {
        id: 1,
        title:"Comprá Online",
        description: "Hoy podés hacer todas tus compras directamente desde la comodidad de tu casa u oficina",
        link: "#"
    },
    {
        id: 2,
        title:"Más de 50 años ofreciéndote lo mejor",
        description: "Más de 50 años donde el trabajo honesto, el esfuerzo de equipo y la visión hacia el futuro fueron los valores principales para construir nuestra marca.",
        link: "#"
    },
    {
        id: 3,
        title:"Te esperamos en cualquiera de nuestros 11 locales:",
        description: "¡En Lincoln hay de todo!",
        link: "#"
    },
    {
        id: 4,
        title:"Nuestras Marcas",
        description: "Importamos más de 120 reconocidas marcas internacionales para ofrecerte siempre la mejor calidad en herramientas.",
        link: "#"
    }
]

const CarrouselTextBanner = () => {
    const router = useRouter()
    return ( 
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2500
                    })
                ]}>
                <CarouselContent>
                    {dataCarrouselTop.map(({id, title, description, link}) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
     );
}
 
export default CarrouselTextBanner;