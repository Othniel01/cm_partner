"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/maturity-model", label: "Maturity Model" },
];

export default function Header() {
    const pathname = usePathname();
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        if (href.startsWith("/#")) {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };
    return (
        <>
            <header className="bg-white p-1 border-b border-[#E2E8F0]">
                <div className="flex items-center max-w-360 mx-auto px-4 lg:px-5 p-3.5 justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/icon/logo.svg" alt="Logo" width={130} height={130} />
                    </Link>
                    <div className=" lg:flex items-center gap-4">
                        <span className="py-2.5">
                            <span className="flex items-center gap-3 px-20.5 border-[#E2E8F0]">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={
                                            "text-[#26262699] text-[.9375rem] px-2.5 hover:text-[#262626]" +
                                            (isActive(link.href) ? " active-link" : "")
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </span>
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
}
