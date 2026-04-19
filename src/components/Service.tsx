import Card from "@/components/Card";

const service = [
    {
        emoji: "🎯",
        header: "Targeted Insights",
        body: "Based on proven frameworks for organisational development",
    },
    {
        emoji: "📊",
        header: "Instant Results",
        body: "Your score and recommendations delivered straight to your inbox",
    },
    {
        emoji: "🔒",
        header: "Data Security",
        body: "All data is securely stored and processed within the EU",
    },
];

export default function Service() {
    return (
        <div className="">
            <div className="flex items-center mt-7 justify-between">
                {service.map((service) => (
                    <div key={service.header} className="flex gap-4">
                        <div className="bg-[#FFF0F6] flex items-center text-lg justify-center rounded-md w-16 h-12">
                            {service.emoji}
                        </div>
                        <div className="">
                            <h1 className="text-[#1B1E4B] font-bold text-lg">{service.header}</h1>
                            <p className="text-[#475569] w-[70%] text-base">{service.body}</p>
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
