'use client';

import React from 'react';
import Image from 'next/image';
import Button from "@/app/components/Button";
import Link from "next/link";

const cities = ['Москва', 'Киев', 'Минск'];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-orange-900 shadow-md">
                <div className="container mx-auto px-12 py-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/"><Image className="mr-10" src={"/Logo.svg"} alt="Логотип" width={130}
                                              height={130}/> </Link>
                        <Link href="/menu"><Button>Меню</Button></Link>
                        <Link href="/gallery"><Button>Галерея</Button></Link>
                        <Button
                            className="bg-orange-300 text-xl mr-10 py-0.5 text-black font-bold px-3 rounded-md hover:bg-orange-400 focus:outline-none ring-4 ring-gray-300 ring-opacity-50">О
                            нас</Button>
                    </div>
                    <div className="flex items-center bg-white rounded-md px-1.5 py-1"
                         style={{position: 'relative', overflow: 'hidden'}}>
                        <Image className="mr-1" src="/icon.svg" alt="Город" width={19} height={19}/>
                        <select className="text-xl bg-white text-black font-bold px-1 font-sans"
                                style={{maxWidth: '100%'}}>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </header>
            <div className="bg-blue-200 flex-grow">
                <main className="container mx-auto px-12 py-2">
                    <div className="min-h-full flex-grow bg-gray- rounded-md p-8">
                        <div className="flex mb-8">

                            <div
                                className="text-blue-950 w-1/3 font-bold bg-emerald-500 rounded-lg p-4  flex items-center justify-center flex-col text-xl relative overflow-hidden">
                                <p>Мы - Coffee Brick! Первая в России, уютная кофейня в стилистке лего с настоящим музеем лего!
                                    Но это не все! В нашей кофейне мы также проводим различные мастер-классы, где можно узнать все тонкости изготовления кофе и попробовать свои силы в этом искусстве!
                                </p>
                            </div>
                            <div
                                className="bg-emerald-700 p-4 w-2/3 ml-4 text-center flex items-center justify-center flex-col text-xl rounded-lg relative overflow-hidden">
                                <p className="text-emerald-100 font-bold">У нас вы можете прекрасно отдохнуть и попробовать самый вкусный кофе в вашей жизни, сделанный мастерами своего дела!
                                </p>
                                <Image src={"/table.png"} alt={"Стол"} width={250} height={250}/>
                            </div>
                        </div>
                        <div className="flex">
                            <div
                                className="bg-white p-4 w-full mx-40 text-center flex items-center justify-center flex-col text-xl rounded-lg relative overflow-hidden">
                                <p className="text-black font-bold">Вы всегда можете найти нас по данному адресу: Москва, Пр-т Вернадского, д. 78</p>
                                <Image className="mt-2" src={"/map.png"} alt="Карта" width={500} height={500}></Image>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
            <footer
                className="bg-orange-900 py-6 text-whitetext-center flex items-center justify-center flex-col text-xl font-bold">
                <p>© 2023 Coffee Brick (ООО «КОФИ БРИК РАША»)</p>
            </footer>
        </div>
    );
};