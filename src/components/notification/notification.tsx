import Image from "next/image"
import "./notification.css"
import { NotificationContent } from "@/hooks/useNotification";

interface NotificationProps{
    view : boolean,
    content : NotificationContent
}
export default function Notification({view,content}:NotificationProps){
    let imagePath = (content.status == "Error") ? "./svg/error.svg" : (content.status == "Success") ? "./svg/success.svg" : ""
    let loadingElement = <></>
    if(content.status == "Loading"){
        loadingElement = <span className="loader"></span>
    }
    else if (imagePath){
        loadingElement =  <Image className="p-1" src={imagePath} alt="Success GIF" width={40} height={40}/>
    }
    return (
        <div className={`notification-container w-1/5 h-[50px] flex items-center gap-3 pl-4 pr-6  backdrop-blur-3xl text-center content-center 
        rounded-md border border-[#d3d3d34d] fixed right-0 bottom-0 m-6 ${(view) ?  "" : "hidden"}`}>
            {loadingElement} <span className="m-auto">{content.message}</span> 
        </div>
    )
}