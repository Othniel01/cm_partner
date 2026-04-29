import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock } from "lucide-react";

export default function Card() {
    return (
        <>
            <div className="border border-[#E2E8F0] rounded-xl w-130 h-108.25 shadow-sm p-10">
                <p className="uppercase text-secondary font-bold text-sm">Gratis beoordeling</p>
                <h1 className="text-[#1B1E4B] mt-4 font-bold text-3xl">
                    Start uw Maturity Model Assessment
                </h1>
                <p className="text-[#475569] mt-4 text-sm">
                    Voer uw werk-e-mailadres in voor directe toegang. Uw gepersonaliseerderesultaten
                    worden na afloop naar uw inbox verzonden.
                </p>
                <Field className="mt-4">
                    <FieldLabel className="text-[#1B1E4B]  text-sm" htmlFor="email">
                        E-mailadres van het werk
                    </FieldLabel>
                    <Input
                        id="email"
                        className="border h-11.75 text-[#1B1E4B] border-[#E2E8F0]"
                        type="email"
                        placeholder="jij@organisatie.com"
                    />
                    <button className="text-sm flex items-center hover:opacity-90 active:bg-[#a10352] cursor-pointer  font-semibold text-white gap-1 bg-secondary h-11.75 rounded-md w-full justify-center">
                        Doe de toets <ArrowRight className="w-4 text-white h-4" />
                    </button>

                    <FieldDescription className="flex gap-2 items-center">
                        <Lock className="w-4  h-4" />
                        Geen spam. Uw gegevens zijn veilig.
                    </FieldDescription>
                </Field>
            </div>
        </>
    );
}
