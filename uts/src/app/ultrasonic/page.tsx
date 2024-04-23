/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";


const cardData: CardProps[] = [
    {
        label: "Jarak (cm)",
        amount: "1000",
        discription: "",
        icon: DollarSign
    },
    {
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        amount: " ",
        label: "Deskripsi",
        icon: Users
    }
];

export default function Home() {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="DATA SENSOR ULTRASONIK " />
            <section className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/4">
                    <section className="grid w-full grid-cols-1 gap-4 gap-x-12 transition-all sm:grid-cols-1 xl:grid-cols-1">
                        {cardData.map((d, i) => (
                            <Card
                                key={i}
                                amount={d.amount}
                                discription={d.discription}
                                icon={d.icon}
                                label={d.label}
                            />
                        ))}
                    </section>
                </div>
                <div className="w-full sm:w-3/4">
                    <CardContent className="items-center">
                        <p className="p-4 font-semibold">Grafik Data Sensor</p>
                        <BarChart />
                    </CardContent>
                    <section className="p-4 grid w-full grid-cols-1 gap-4 gap-x-12 transition-all sm:grid-cols-1 xl:grid-cols-3">
                        <CardContent className="text-center">
                            Hari
                        </CardContent>
                        <CardContent className="text-center">
                            Bulan
                        </CardContent>
                        <CardContent className="text-center">
                            Tahun
                        </CardContent>
                    </section>
                </div>
            </section>
        </div>
    );
}