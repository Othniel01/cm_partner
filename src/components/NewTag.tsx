import { Status, StatusIndicator, StatusLabel } from "@/components/kibo-ui/status";

export default function NewTag({ label, blink }: { label: string; blink?: boolean }) {
    return (
        <>
            <Status
                className="border w-fit py-3.5 px-7  bg-[#FFFFFF1F] border-[#FFFFFF33] rounded-full"
                status="online"
            >
                {blink && <StatusIndicator />}

                <StatusLabel className="font-semibold uppercase  tracking-[1.1px] text-[#FFFFFFD9] text-xs">
                    {label}
                </StatusLabel>
            </Status>
        </>
    );
}
