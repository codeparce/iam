// src/components/VerticalCarousel.tsx by Code Parce (ツ) 
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import './VerticalCarousel.css'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import type { Experiencia } from '@/lib/utils';


interface Props {
    data: Experiencia[]
}

export default function VerticalCarousel({ data }: Props) {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <Carousel
            orientation="vertical"
            opts={{
                align: "center",
                loop: true,
            }}
            className="w-full h-full "
            plugins={[plugin.current]}
        >
            <CarouselContent className="h-60 md:h-60 w-full text-justify p-5 ">

                {data.map((item, index) => (
                    <CarouselItem key={index}>

                        <Card
                            className=" 
                                gap-2 flex-col md:flex-row h-full justify-center 
                                bg-zinc-900 border border-zinc-800
                                hover:border-yellow-400/40
                                shadow-[0_0_25px_rgba(250,204,21,0.12)]
                                hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]
                                transition-all duration-300
                            "
                        >

                            <CardHeader className="w-full">

                                <CardTitle className="text-yellow-400 font-mono text-xs md:text-sm">
                                    {item.titulo}
                                </CardTitle>

                                <span className="text-zinc-500">
                                    <span className="font-bold text-xs  text-yellow-500 font-mono">
                                        Empresa:
                                    </span>{" "}
                                    <span className="text-xs  text-zinc-400">
                                        {item.empresa}
                                    </span>
                                </span>

                                <CardDescription className="text-xs text-zinc-400">
                                    {item.descripcion}
                                </CardDescription>

                            </CardHeader>

                            <CardContent className="flex flex-col w-full md:gap-4 text-zinc-400">

                                <span className="hidden md:block">
                                    <span className="font-bold text-xs text-yellow-500 font-mono" >
                                        Tecnologías:
                                    </span>{" "}
                                    <span className="text-xs">
                                        {item.tecnologias.join(", ")}
                                    </span>
                                </span>

                                {item.urls && item.urls.length > 0 && (
                                    <div className="flex gap-2 w-full h-full ">
                                        <div className="flex md:gap-2 gap-1 flex-wrap">
                                            
                                            <span className="text-xs font-bold block md:hidden text-yellow-400">
                                                Tecnologías
                                            </span>
                                            {item.urls.map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    alt={`tech-${i}`}
                                                    className="
                                                        w-6 h-6 aspect-square object-cover
                                                        rounded-md bg-zinc-800 p-1
                                                        border border-zinc-700
                                                        hover:border-yellow-400
                                                        hover:scale-110
                                                        transition-all duration-300
                                                    "
                                                />
                                            ))}
                                        </div>

                                    </div>
                                )}

                            </CardContent>
                        </Card>

                    </CarouselItem>
                ))}

            </CarouselContent>
        </Carousel>
    )
}