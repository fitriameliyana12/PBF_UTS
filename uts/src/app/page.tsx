import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import { CarouselDemo } from "@/components/carousel";

const cardData: CardProps[] = [
    {
        label: "DHT11",
        amount: "1000",
        discription: "",
        icon: DollarSign
    },
    {
        label: "LDR",
        amount: "1000",
        discription: "",
        icon: Users
    },
    {
        label: "Ultrasonic",
        amount: "1000",
        discription: "",
        icon: CreditCard
    },
    {
      label: "Deskripsi",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        amount: " ",
        icon: CreditCard
    },
    {
      label: "Deskripsi",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        amount: " ",
        icon: CreditCard
    },
    {
      label: "Deskripsi",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        amount: " ",
        icon: CreditCard
    }
];

export default function Home() {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="DASHBOARD DATA SENSOR" />
            <section className="grid grid-cols-1 gap-4 transition-all">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '350px', height: '350px' }}>
                        <CarouselDemo />
                    </div>
                </div>
                <section className="grid w-full grid-cols-1 gap-4 gap-x-12 transition-all sm:grid-cols-2 xl:grid-cols-3">
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
            </section>
        </div>
    );
}