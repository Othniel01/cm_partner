import NewTag from "@/components/NewTag";
import Image from "next/image";

export function Hero() {
    return (
        <div className="bg-primary w-full h-120.75">
            <div className="max-w-7xl flex items-center h-full  justify-between mx-auto p-4 md:p-8">
                <div className="">
                    <NewTag blink label="For organisations in transition" />
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:w-[70%] mt-4 text-white tracking-[-1.5px]">
                        How <span className="text-secondary">mature</span> is your organisation,
                        really?
                    </h1>
                    <p className="text-[#FFFFFFB2]  lg:mt-5 w-full text-lg lg:w-[66%] ">
                        The CM Partners Maturity Model Assessment gives you a clear picture in 10
                        minutes — and a concrete path forward.
                    </p>
                </div>
                <Image src="/hero-image.png" alt="Logo" width={400} height={400} />
            </div>
        </div>
    );
}
