import Link from "next/link"
import "./navBar.css"
import Image from "next/image"

export default function NavBar() {
    let navLinks = [
        {label : "About", link : "", type : "page"},
        {label : "Skill", link : "", type : "page"},
        {label : "Jobs", link : "",type : "page"},
        {label : "Project", link : "",type : "page"},
        {label : "Academics", link : "",type : "page"},
        {label : "LinkedIn", link : "",icon:"svg/linkedIn.svg",type : "site-link"},
        {label : "GitHub", link : "",icon:"svg/github.svg",type : "site-link"},
        {label : "Resume", link : "",icon:"svg/file-download.svg",type : "site-link"},
        {label : "Contact", link : "",icon:"svg/contact.svg",type : "site-link"},

    ]

    return (
        <nav className="h-[10%] p-4 flex items-center relative bg-[rgba(16,18,27,0.6)] rounded-xl">
            <ul className="w-full h-full flex items-center justify-center gap-10 ">
                {
                    navLinks.filter(navLink=>navLink.type == "page").map((navLink,index)=>(
                        <li className="cursor-pointer" key={`nav-item-${index}`}><Link  href={navLink.link}>{navLink.label}</Link></li>
                    ))
                }
            </ul>
            <div className="doc-contact absolute flex right-0 p-4 gap-3">
                {
                    navLinks.filter(navLink=>navLink.type == "site-link").map((navLink,index)=>(
                        <button className="btn w-max flex items-center bg-[#4bc473] rounded-full p-1.5 cursor-pointer" key={`nav-links-${index}`} >
                            <span className="btn-icon"><Image src={navLink.icon ?? ""} alt="" width={25} height={25}/></span>
                            <span className="btn-text overflow-hidden max-w-[0px]" >{navLink.label}</span>
                        </button>
                    ))
                }
            </div>
        </nav>
    )
}