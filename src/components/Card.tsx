import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock } from "lucide-react";

export default function Card() {
    return (
        <>
            <div className="border border-[#E2E8F0] rounded-xl w-130 h-108.25 shadow-sm p-10">
                <p className="uppercase text-secondary font-bold text-sm">Free Assessment</p>
                <h1 className="text-[#1B1E4B] mt-4 font-bold text-3xl">
                    Start your Maturity Model Assessment
                </h1>
                <p className="text-[#475569] mt-4 text-sm">
                    Enter your work email to get instant access. Your personalised results will be
                    sent to your inbox upon completion.
                </p>
                <Field className="mt-4">
                    <FieldLabel className="text-[#1B1E4B]  text-sm" htmlFor="email">
                        Work email address
                    </FieldLabel>
                    <Input
                        id="email"
                        className="border h-11.75 text-[#1B1E4B] border-[#E2E8F0]"
                        type="email"
                        placeholder="you@organisation.com"
                    />
                    <button className="text-sm flex items-center font-semibold text-white gap-1 bg-secondary h-11.75 rounded-md w-full justify-center">
                        Take Assessment <ArrowRight className="w-4 text-white h-4" />
                    </button>

                    <FieldDescription className="flex gap-2 items-center">
                        <Lock className="w-4  h-4" />
                        No spam. your data is secure.
                    </FieldDescription>
                </Field>
            </div>
        </>
    );
}
