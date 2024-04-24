/** @format */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardProps = {
    label: string;
    icon: LucideIcon;
    amount: string;
    discription: string;
};

export default function Card(props: CardProps) {
    return (
        <CardContent className="flex">
            <CardContent className="flex items-center">
                {/* label */}
                <h2 className="text-sm">{props.label}</h2>
            </CardContent>
            <section className="flex flex-col gap-1 items-center">
                <h2 className="text-2xl font-semibold">{props.amount}</h2>
                <h2 className="text-sm">{props.discription}</h2>
            </section>
        </CardContent>
    );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn(
                "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
                props.className
            )}
        />
    );
}