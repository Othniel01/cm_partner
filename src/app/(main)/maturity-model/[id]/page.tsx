export default function QuizPage() {
    return (
        <div className="max-w-7xl mt-20  flex items-center justify-center mx-auto p-4 md:p-8">
            <div className="flex flex-col justify-center ">
                <div className="flex items-center gap-2">
                    <div className="border-2 border-secondary text-xs text-secondary rounded-2xl font-semibold flex items-center justify-center bg-ring px-5 py-2">
                        📋 1 Beleid
                    </div>
                    <div className="border border-[#E2E8F0] text-xs text-[#94A3B8] rounded-2xl font-semibold flex items-center   px-5 py-2">
                        ⚙️ 2 Proces
                    </div>
                    <div className="border border-[#E2E8F0] text-xs text-[#94A3B8] rounded-2xl font-semibold flex items-center   px-5 py-2">
                        👥 3 Mens
                    </div>
                    <div className="border border-[#E2E8F0] text-xs text-[#94A3B8] rounded-2xl font-semibold flex items-center   px-5 py-2">
                        💻 4 Systeem
                    </div>
                    <div className="border border-[#E2E8F0] text-xs text-[#94A3B8] rounded-2xl font-semibold flex items-center   px-5 py-2">
                        📁 5 Contractportfolio
                    </div>
                </div>

                <div className="mt-10 text-xs font-semibold text-[#94A3B8] flex items-center justify-between">
                    <p>Dimension 1 of 5</p>
                    <p>20%</p>
                </div>
                <div className="mt-3 h-1.5 rounded-2xl bg-[#E2E8F0]">
                    <div className="h-full w-[20%] bg-secondary rounded-l-2xl"></div>
                </div>
                <div className="w-[700px] h-[281px] mt-4 border border-[#E2E8F0]  rounded-2xl p-10">
                    <div className=" text-xs text-[#F7941D]  uppercase rounded-2xl font-bold w-fit bg-[#F7941D18] px-5 py-2">
                        📋Beleid
                    </div>
                    <h1 className="text-[#1B1E4B] text-xl font-bold mt-4">
                        Zijn de uitgangspunten voor het inrichten en uitvoeren van
                        contractmanagement vastgelegd?
                    </h1>
                    <div className="mt-5 flex gap-3">
                        <button className="bg-[#F8F9FC] text-[#1B1E4B] font-semibold border rounded-md border-[#E2E8F0] w-75.75 h-13.5">
                            ✓ Ja
                        </button>
                        <button className="bg-[#F8F9FC]  text-[#1B1E4B] font-semibold border rounded-md border-[#E2E8F0] w-75.75 h-13.5">
                            ✗ Nee
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
