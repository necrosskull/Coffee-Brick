'use client';

import React from 'react';
import Image from 'next/image';
import Button from "@/app/components/Button";
import Link from "next/link";
import Card from "@/app/components/Card";
import Card2 from "@/app/components/Card2";

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
                        <Link href="/gallery"><Button
                            className="bg-orange-300 text-xl mr-10 py-0.5 text-black font-bold px-3 rounded-md hover:bg-orange-400 focus:outline-none ring-4 ring-gray-300 ring-opacity-50">Галерея</Button></Link>
                        <Link href="/about"><Button>О нас</Button></Link>
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
                    <div className="min-h-full flex-grow bg-gray- rounded-md p-8 mx-32">
                        <div className="flex mb-2">

                            <div
                                className="bg-emerald-600 w-full p-4 text-center flex items-center justify-center flex-col text-xl rounded-lg relative overflow-hidden mb-8">
                                <p className="text-emerald-50 text-3xl font-bold mb-4">Наш музей</p>
                                <Card2/>

                            </div>

                        </div>

                        <div className="flex">

                            <div
                                className="bg-orange-200 w-full p-4 text-center flex items-center justify-center flex-col text-xl rounded-lg relative overflow-hidden">
                                <p className="text-black text-3xl font-bold mb-4 text-gray-700">Мастер классы</p>
                                <Card/>

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