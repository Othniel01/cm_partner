import Card from "@/components/Card";

const service = [
    {
        emoji: "🎯",
        header: "Gerichte inzichten",
        body: "Based on proven frameworks for organisational development",
    },
    {
        emoji: "📊",
        header: "Directe resultaten",
        body: "Uw score en aanbevelingenrechtstreeks in uw inbox",
    },
    {
        emoji: "🔒",
        header: "Gegevensbeveiliging",
        body: "Alle gegevens worden veilig opgeslagen en verwerkt binnen de EU",
    },
];

export default function Service() {
    return (
        <div className="">
            <div className="flex items-center mt-7 justify-between">
                {service.map((service) => (
                    <div key={service.header} className="flex w-[30%]  gap-4">
                        <div className="bg-[#FFF0F6] flex items-center text-lg justify-center rounded-md w-16 h-12">
                            {service.emoji}
                        </div>
                        <div className="">
                            <h1 className="text-[#1B1E4B] font-bold text-lg">{service.header}</h1>
                            <p className="text-[#475569]   text-sm">{service.body}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full mt-28 flex justify-center">
                <Card />
            </div>
        </div>
    );
}
