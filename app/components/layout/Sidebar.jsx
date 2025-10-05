"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Icons
import { FaGithub, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { Home, ImageIcon, Mail, Server, User } from "lucide-react";

const Sidebar = ({ className }) => {
    const pathname = usePathname();

    const NavLinks = [
        { name: "Home", link: "/", icon: <Home size={20} /> },
        { name: "Projects", link: "/projects", icon: <ImageIcon size={20} /> },
        { name: "Contact", link: "/contact", icon: <Mail size={20} /> },
        { name: "About", link: "/about", icon: <User size={20} /> },
        { name: "Services", link: "/services", icon: <Server size={20} /> },
    ];

    return (
        <aside className="fixed">
            <div
                data-aos="fade-right"
                className={`bg-[var(--secondary-color)]/70 border border-[var(--accent)] shadow-2xl p-6 rounded-2xl ${className}`}
            >
                {/* Logo */}
                <Link href="/">
                    <Image src="/favicon.webp" alt="Logo" width={250} height={250} />
                </Link>

                {/* Navigation */}
                <nav className="text-[--white-color]">
                    <ul className="flex mt-10 flex-col gap-6">
                        {NavLinks.map((item, index) => (
                            <li key={index} className="group transition-all">
                                <Link
                                    href={item.link}
                                    className="flex items-center gap-4"
                                >
                                    <span className="text-white group-hover:text-[var(--primary-color)]">
                                        {item.icon}
                                    </span>
                                    <div
                                        className={`group relative px-2 py-1 font-medium transition-all duration-300 ease-in-out flex items-center gap-4 ${pathname === item.link
                                            ? "text-[var(--primary-color)] font-semibold"
                                            : "text-white"
                                            }`}
                                    >
                                        {item.name}
                                        <span
                                            className={`absolute left-0 bottom-0 h-0.5 bg-[var(--primary-color)] transition-all duration-300 ease-in-out ${pathname === item.link ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Icons */}
                <div className="flex items-center mt-8 flex-wrap justify-center gap-4">
                    {[FaYoutube, FaGithub, FaTiktok, FaInstagram, FaTwitter].map((Icon, i) => (
                        <div
                            key={i}
                            className="rounded-full p-2 bg-gradient-to-br from-[var(--accent)] to-gray-800 shadow-lg hover:-translate-y-1 transition-all cursor-pointer text-white font-bold"
                        >
                            <Icon size={15} />
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;