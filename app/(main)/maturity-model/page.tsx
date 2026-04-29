import { Hero } from "@/components/Hero";
import Service from "@/components/Service";

export default function Page() {
    return (
        <div className="">
            <Hero />
            <div className="max-w-7xl flex items-center h-full  justify-between mx-auto p-4 md:p-8">
                <Service />
            </div>
        </div>
    );
}
