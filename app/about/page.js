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
                        <div className="flex h-96">
                            <div
                                className="bg-white w-full p-4 text-center flex items-center justify-center flex-col text-xl rounded-lg relative overflow-hidden">
                                <p className="text-black font-bold">Добро пожаловать в нашу кофейню, где не только
                                    ароматный кофе, но и восхитительное оформление выполнено из лего! Мы создали
                                    уникальную атмосферу, которая поразит вас своей яркостью и оригинальностью. У нас вы
                                    сможете насладиться не только отличным кофе, но и вкусной выпечкой, сендвичами и
                                    другими сытными блюдами.

                                    Не пропустите возможность окунуться в мир детства, приятно провести время с друзьями
                                    или коллегами, а также порадовать ваших детей. Наша кофейня открыта для всех, кто
                                    любит настоящую культуру кофе и интересное оформление.

                                    У нас соблюдаются все правила гигиены и безопасности, чтобы вы могли спокойно
                                    наслаждаться атмосферой и вкусами кофе.

                                    Посетите нашу кофейню сегодня и отправьтесь в путешествие в мир лего, наслаждаясь
                                    ароматом свежевыпеченных блюд и чашкой горячего кофе. Мы будем рады видеть вас!</p>
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