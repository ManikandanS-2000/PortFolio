"use client"
import Link from "next/link";
import "./navBar.css"
import Image from "next/image"
import usePopup from "@/hooks/usePopup";
import React from "react";

export default function NavBar() {
    const popupHook = usePopup();
    const navLinks = [
        {label : "About", link : "#about-container", type : "page"},
        {label : "Skills", link : "#skill-container", type : "page"},
        {label : "Jobs", link : "#jobs-container",type : "page"},
        {label : "Projects", link : "#projects-container",type : "page"},
        {label : "Academics", link : "#academics-container",type : "page"},
        {label : "LinkedIn", link : "https://www.linkedin.com/in/manikandan-s-523259194/",icon:"./svg/linkedIn.svg",type : "site-link"},
        {label : "GitHub", link : "https://github.com/ManikandanS-2000",icon:"./svg/github.svg",type : "site-link"},
        {label : "Resume", link : "./documents/Resume_Manikandan_S.pdf",icon:"./svg/file-download.svg",type : "site-link"},
        {label : "Contact", link : "",icon:"./svg/contact.svg",type : "site-link"},
    ]

    const handleScroll = (elemId:string) => {
        const el = document.querySelector(elemId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <nav className="h-[10%] p-4 flex items-center relative bg-[rgba(16,18,27,0.6)] rounded-xl">
            <ul className="w-full h-full flex items-center justify-center gap-10 ">
                {
                    navLinks.filter(navLink=>navLink.type == "page").map((navLink,index)=>(
                        <li className="cursor-pointer" key={`nav-item-${index}`} onClick={()=>{handleScroll(navLink.link)}}>{navLink.label}</li>
                    ))
                }
            </ul>
            <div className="doc-contact absolute flex right-0 p-4 gap-3">
                {
                    navLinks.filter(navLink=>navLink.type == "site-link").map((navLink,index)=>(
                        navLink.link ?
                        <Link  key={`nav-links-${index}`}  href={navLink.link} target="_blank">
                            <button className="btn w-max flex items-center bg-[#4bc473] rounded-full p-1.5 cursor-pointer">
                                <span className="btn-icon"><Image src={navLink.icon ?? ""} alt="" width={25} height={25}/></span>
                                <span className="btn-text overflow-hidden max-w-[0px]" >{navLink.label}</span>
                            </button>
                        </Link>
                        :
                        <React.Fragment key={`nav-links-${index}`}>
                            <button className="btn w-max flex items-center bg-[#4bc473] rounded-full p-1.5 cursor-pointer" id="popup-trigger" onClick={popupHook.handleView} >
                                <span className="btn-icon"><Image src={navLink.icon ?? ""} alt="" width={25} height={25}/></span>
                                <span className="btn-text overflow-hidden max-w-[0px]" >{navLink.label}</span>
                            </button>
                            {popupHook.popupComponent}
                        </React.Fragment>
                    ))
                }
            </div>
        </nav>
    )
}