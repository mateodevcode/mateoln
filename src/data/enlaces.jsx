import { FaWhatsapp } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { IoIosApps } from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SiHackthebox, SiTryhackme } from "react-icons/si";

export const botones = [
    {
        id: 1,
        nombre: "LinkedIn",
        url: "https://www.linkedin.com/in/mateo-lizcano-noriega/",
        icono: <IoLogoLinkedin className="mr-2 text-xl" />,
        color: "bg-[#2867B2] hover:bg-[#5d97dd] text-white"
    },
    {
        id: 2,
        nombre: "GitHub",
        url: "https://github.com/mateodevcode",
        icono: <IoLogoGithub className="mr-2 text-xl" />,
        color: "bg-black hover:bg-black/50 text-white"
    },
    {
        id: 3,
        nombre: "Proyectos",
        url: "https://mateo-lizcano-noriega.vercel.app/",
        icono: <IoIosApps className="mr-2 text-xl" />,

        color: "bg-green-600 hover:bg-green-500 text-white"
    },
    {
        id: 4,
        nombre: "TryHackMe",
        url: "https://tryhackme.com/p/mateo.dev",
        icono: <SiTryhackme className="mr-2 text-xl" />,
        color: "bg-red-700 hover:bg-red-600 text-white"
    },
    {
        id: 5,
        nombre: "Hack The Box",
        url: "https://app.hackthebox.com/profile/1472461",
        icono: <SiHackthebox className="mr-2 text-xl" />,
        color: "bg-[#0B121F] hover:bg-[#172235] text-green-600"
    },
    {
        id: 6,
        nombre: "Certificaciones",
        url: "https://www.credly.com/users/mateo-lizcano-noriega/badges",
        icono: <GrCertificate className="mr-2 text-xl" />,
        color: "bg-yellow-400 hover:bg-yellow-300 text-white"

    },
    {
        id: 7,
        nombre: "WhatsApp",
        url: "https://wa.me/34675464502",
        icono: <FaWhatsapp className="mr-2 text-xl" />,
        color: "bg-green-500 hover:bg-green-400 text-white"
    }


]