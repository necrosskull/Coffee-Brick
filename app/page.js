import React from 'react';
import Image from 'next/image';
import Button from "@/app/components/Button";

const cities = ['Москва', 'Киев', 'Минск'];

const IndexPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-orange-900 shadow-md">
                <div className="container mx-auto px-12 py-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className="mr-10"><Image src={"/Logo.svg"} alt="Логотип" width={130} height={130}/></a>
                        <Button>Меню</Button>
                        <Button>Галерея</Button>
                        <Button>О нас</Button>
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
                        <div className="flex mb-4">
                            <div
                                className="bg-teal-700 p-4 w-1/2 mr-4 mb-4 flex rounded-lg items-center justify-center text-xl">
                                <p className="text-teal-200 font-bold text-center">Загляни под ёлку!
                                    Новогоднее чудо уже в новом меню! Скидка 10% на все напитки!</p>
                                <Image src={"/wood.png"} alt="Дерево" width={200} height={200}/>

                            </div>
                            <div
                                className="text-blue-950 font-bold bg-orange-300 rounded-lg p-4 w-2/3 ml-auto mb-4 flex items-center justify-center flex-col text-xl">
                                <p>Расписание мастер-классов</p>
                                <ul className="list-disc list-inside text-left">
                                    <li>Понедельник: Как приготовить идеальный латте (17:00-18:30)</li>
                                    <li>Вторник: Основы эспрессо (14:00-15:30)</li>
                                    <li>Вторник: Техника приготовления капучино (19:00-20:30)</li>
                                    <li>Среда: Основы мастерства бариста (16:00-17:30)</li>
                                </ul>
                                <p className="text-sm">* Все мастерклассы проводятся бесплатно для любых наших
                                    посетителей, ждём всех!</p>
                            </div>

                        </div>
                        <div className="flex mb-8">
                            <div
                                className="bg-white p-4 w-2/3 mr-auto text-center flex items-center justify-center flex-col text-xl rounded-lg">
                                <p className="text-black font-bold">Добро пожаловать в Coffee Brick!
                                    Мы запустили первую точку в Москве
                                    и не планируем останавливаться!</p>
                                <Image className="mt-2" src={"/map.png"} alt="Карта" width={500} height={500}></Image>
                            </div>
                            <div
                                className="bg-emerald-600 p-4 w-1/2 ml-4 text-center flex items-center justify-center flex-col text-xl rounded-lg">
                                <p className="text-emerald-100 font-bold">Первая Lego
                                    стилизованная кофейня! Ждём всех в гости!</p>
                                <Image src={"/lego coffe.png"} alt={"Лего кофе"} width={250} height={250}/>
                            </div>
                        </div>
                        <div className="flex">
                            <div
                                className="bg-white w-full p-4 text-center flex items-center justify-center flex-col text-xl rounded-lg">
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

export default IndexPage;
