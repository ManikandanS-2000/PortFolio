import Image from "next/image";
import "./content.css"

export default function Content() {
    const skills = [
        { label: "Python", icon: "./svg/python.svg", color: "rgba(35, 113, 178, 0.53) 24%, rgba(254, 212, 53, 0.4) 78%" },
        { label: "HTML", icon: "./svg/html.svg", color: "rgba(228, 77, 38, 0.53) 24%, rgba(241, 101, 41, 0.4) 78%" },
        { label: "CSS", icon: "./svg/css.svg", color: "rgba(17, 114, 184, 0.4) 24%, rgba(51, 170, 221, 0.4) 78%" },
        { label: "Javascript", icon: "./svg/javascript.svg", color: "rgba(247, 223, 30, 0.4) 24%, rgba(0, 0, 0, 0.4) 78%" },
        { label: "Django", icon: "./svg/django.svg", color: "#44b78b7d" },
        { label: "Flask", icon: "./svg/flask.svg", color: "#0000007d" },
        { label: "PyQt", icon: "./svg/pyqt.svg", color: "rgba(55, 114, 163, 0.4) 33%, rgba(255, 212, 68, 0.4) 67%, rgba(124, 192, 64, 1) 87%" },
        { label: "Odoo", icon: "./svg/odoo.svg", color: "rgba(113, 75, 103, 0.4) 28%, rgba(143, 143, 143, 0.4) 71%" },
        { label: "React", icon: "./svg/react.svg", color: "#53c1de7d" },
        { label: "Angular", icon: "./svg/angular.svg", color: "rgba(226, 50, 55, 0.4) 28%, rgba(255, 255, 255, 0.4) 71%" },
        { label: "Tailwind CSS", icon: "./svg/tailwind.svg", color: "#53c1de7d" },
        { label: "Bootstrap CSS", icon: "./svg/bootstrap.svg", color: "rgba(86, 61, 124, 0.4) 28%, rgba(255, 255, 255, 0.4) 71%" },
        { label: "MySQL", icon: "./svg/mysql.svg", color: "#53c1de7d" },
        { label: "Postgresql", icon: "./svg/postgresql.svg", color: "rgba(51, 103, 145, 0.4) 28%, rgba(255, 255, 255, 0.4) 71%" },
        { label: "Git", icon: "./svg/git.svg", color: "rgba(238, 81, 59, 0.4) 28%, rgba(255, 255, 255, 0.4) 71%" },
    ]

    const experAndAcedemics = {
        jobs: [{
            header: "V2etechnologies",
            date: "Feb 2023 - Oct 2025",
            content: [
                "Developed and maintained front-end web applications using HTML, CSS, JavaScript and ReactJS.",
                "Created back-end services for data manipulation and business logic using Django with DRF (Django Rest Framework) and Flask.",
                "Designed database schemas to store application data using MySql and Postgresql.",
                "Built responsive websites compatible with mobile devices using Tailwind CSS.",
                "Developed 10+ Python services to automate data processing tasks.",
                "Developed 4+ Custom Modules in Odoo."
            ]
        }],
        projects: [{
            header: "Google Drive Files Sync",
            content: [
                "Built a Python-based service to sync files from Google Drive, including shared folders, preserving the original folder hierarchy locally that is in Google Drive.",
                "Overcame a key limitation of the default Drive sync by directly accessing shared-with-me files via the Drive API.",
                "Used a local timestamp to download only new files, saving time and system resources.",
                "Maintained comprehensive logs that contains local paths, Drive paths, download timestamps, and sync history for traceability.",
            ]
        },
        {
            header: "Image Attribute Extraction Tool",
            content: [
                "Designed a Django-based image annotation tool with Riot.JS for users to define attribute fields and unique template identifiers.",
                "Stored positional metadata (attribute and identifier coordinates) in a MySQL database to support dynamic template matching.",
                "Integrated CLOVA OCR API to extract identifier text from uploaded images and automatically match them to the find correct template.",
                "Cropped image regions based on stored coordinates and processed them through CLOVA OCR for precise field-level text extraction when the template matches with input image.",
            ]
        },
        {
            header: "Report Maker",
            content: [
                "Developed a web based report generation application for creation, formatting, and delivery of business reports.",
                "Built the front-end interface using React.js with responsive pages, multiple essential report elements like text box and shapes and report preview for enhanced user experience.",
                "Designed and implemented the backend using Django, with role- based authentication and optimized ORM structure for storing reports with MySQL Database.",
                "Introduced report sharing feature via email and direct app link.",
            ]
        }],
        academics: [{
            content: "Chettinad College of Engineering & Technology",
            subHeader: "Apr 2018 - Mar 2022",
            header: "Bachelor of Engineering CSE",
            subContent: "Karur, Tamil Nadu"
        },
        {
            content: "P.A.VIDHYABHAVAN HR.SEC.SCHOOL",
            subHeader: "Apr 2016 - Mar 2018",
            header: "HSC - Science",
            subContent: "Karur, Tamil Nadu"
        }]
    }
    return (
        <div className="content-container w-full h-[90%] bg-[rgba(16,18,27,0.6)] rounded-xl p-4 overflow-auto">
            <div className="about-container h-[50%] flex gap-5 bg-[#4bc47324] rounded-xl p-6" id="about-container">
                <div className="w-[70%]"><p className="text-5xl mb-5">Manikandan S</p><p className="leading-7">Full Stack Developer with 2.5 years of experience in building responsive sites  using
                    Angular, Vue, and React. Passionate about merging user-centric design with cutting-edge technology to solve complex problems.
                    Proven ability to lead cross-functional teams, mentor junior developers, and deliver scalable solutions aligned with Agile workflows.</p></div>
                <div className="w-[30%] profile-pic text-center relative">
                    <Image className="m-auto rounded-xl object-cover" src="./image/profile-pic.png" alt="My Profile Pic" fill />
                </div>
            </div>
            <div className="skill-container h-[max-content] p-6" id="skill-container">
                <p className="text-2xl">Skills</p>
                <div className="flex flex-wrap px-10 py-5 items-center justify-center">
                    {
                        skills.map((skill, index) =>
                            <div className="mx-8 mb-8 w-[100px] h-[100px] flex flex-col justify-center 
                            items-center rounded-xl bg-[#4bc47324] relative overflow-hidden card education" key={`skill-item-${index}`}>
                                <div className="overlay" style={{ background: `linear-gradient(163deg,${skill.color})` }} key={`overlay-design-${index}`}></div>
                                <Image className="object-cover" src={skill.icon} alt={skill.label} width={55} height={55} />
                                <p className="text-[12px] pt-1.5">{skill.label}</p>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                Object.entries(experAndAcedemics).map(([header, contents]: any) => (
                    <div className={`${header}-container h-max p-6`} id={`${header}-container`} key={`${header}-container`}>
                        <p className="text-2xl capitalize">{header}</p>
                        <div className="px-10 py-5 flex flex-wrap justify-center gap-10">
                            {
                                contents.map((content: any, index: number) =>
                                    <div className="job-card p-5 w-[48%] bg-[#4bc47324] rounded-xl" key={`${header}-card-${index}`}>
                                        {
                                            (!(typeof content.content === "string")) ?
                                                <>
                                                    <div className="flex justify-between items-baseline"><p className="mb-5 text-2xl">{content.header}</p><p className="text-xs text-[#b6b6b6] italic">{content.subHeader}</p></div>
                                                    <ul>
                                                        {
                                                            content.content.map((subContent: string, index: number) => <li className="text-[14px]  leading-5 mb-5" key={`job-sentence-${index}`}>&ndash; &nbsp;&nbsp;&nbsp;{subContent}</li>)
                                                        }
                                                    </ul>
                                                </>
                                                :
                                                <>
                                                    <div className="flex justify-between items-baseline mb-5 text-2xl">{content.header} <span className="text-xs text-[#b6b6b6] italic">{content.subHeader}</span></div>
                                                    <div className="flex justify-between items-baseline text-1xl">{content.content}<span className="text-xs text-[#b6b6b6] italic">{content.subContent}</span></div>
                                                </>
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    )
}