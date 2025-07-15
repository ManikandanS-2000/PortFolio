import Image from "next/image";
import "./content.css"

export default function Content(){

    let skills = [
        { label : "Python", icon : "svg/python.svg",color:"rgba(35, 113, 178, 0.53) 24%, rgba(254, 212, 53, 0.4) 78%"},
        { label : "HTML", icon : "svg/html.svg" , color:"rgba(228, 77, 38, 0.53) 24%, rgba(241, 101, 41, 0.4) 78%"},
        { label : "CSS", icon : "svg/css.svg", color:"rgba(17, 114, 184, 0.4) 24%, rgba(51, 170, 221, 0.4) 78%" },
        { label : "Javascript", icon : "svg/javascript.svg",color:"rgba(247, 223, 30, 0.4) 24%, rgba(0, 0, 0, 0.4) 78%"},
        { label : "Django", icon : "svg/django.svg", color:"#44b78b7d"},
        { label : "Flask", icon : "svg/flask.svg",color:"#0000007d"},
        { label : "PyQt", icon : "svg/pyqt.svg",color:"rgba(55, 114, 163, 0.4) 33%, rgba(255, 212, 68, 0.4) 67%, rgba(124, 192, 64, 1) 87%"},
        { label : "Odoo", icon : "svg/odoo.svg",color:"rgba(113, 75, 103, 0.4) 28%, rgba(143, 143, 143, 0.4) 71%"},
        { label : "React", icon : "svg/react.svg",color:"#53c1de7d"},
        { label : "Angular", icon : "svg/angular.svg",color:"rgba(226, 50, 55, 0.4) 28%, rgba(255, 255, 255, 0.4) 71%"},
        { label : "Tailwind CSS", icon : "svg/tailwind.svg",color:"#53c1de7d"},
        { label : "Bootstrap CSS", icon : "svg/bootstrap.svg",color:"rgba(86, 61, 124, 0.4) 28%, rgba(255, 255, 255, 0.4) 71%"},
        { label : "MySQL", icon : "svg/mysql.svg",color:"#53c1de7d"},
        { label : "Postgresql", icon : "svg/postgresql.svg",color:"rgba(51, 103, 145, 0.4) 28%, rgba(255, 255, 255, 0.4) 71%"},
        { label : "Git", icon : "svg/git.svg",color:"rgba(238, 81, 59, 0.4) 28%, rgba(255, 255, 255, 0.4) 71%"},
    ]

    return (
        <div className="content-container w-full h-[90%] bg-[rgba(16,18,27,0.6)] rounded-xl p-4 overflow-auto">
            <div className="about-content h-[50%] flex gap-5 bg-[#4bc47324] rounded-xl p-6">
                <div className="w-[70%]"><p className="text-5xl mb-5">Manikandan S</p><p className="leading-7">Full Stack Developer with 2.5 years of experience in building responsive sites  using 
                    Angular, Vue, and React. Passionate about merging user-centric design with cutting-edge technology to solve complex problems. 
                    Proven ability to lead cross-functional teams, mentor junior developers, and deliver scalable solutions aligned with Agile workflows.</p></div>
                <div className="w-[30%] profile-pic text-center relative">
                    <Image className="m-auto rounded-xl object-cover" src="/image/profile-pic.png" alt="My Profile Pic" fill/>
                </div>
            </div>
            <div className="h-[max-content] p-6">
                <p className="text-2xl">Skills</p>
                <div className="flex flex-wrap px-10 py-5 items-center justify-center">
                    {
                        skills.map((skill,index)=>{
                            return (
                                <div className="mx-8 mb-8 w-[100px] h-[100px] flex flex-col justify-center 
                                items-center rounded-xl bg-[#4bc47324] relative overflow-hidden card education" key={`skill-item-${index}`}>
                                    <div className="overlay" style={{background:`linear-gradient(163deg,${skill.color})`}} key={`overlay-design-${index}`}></div>
                                    <Image className="object-cover z-1" src={skill.icon} alt={skill.label} width={55} height={55}/>
                                    <p className="text-[12px] pt-1.5 z-1">{skill.label}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="h-[30%] p-6">
                <p className="text-2xl">Jobs</p>
            </div>
        </div>
    )
}