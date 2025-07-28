import Notification from "@/components/notification/notification";
import { useState } from "react";

export interface NotificationContent{
    message : string,
    status : "" | "Loading" | "Error" | "Success" | "Warning" 
}
export default function useNotification() {
    const [ view, setView] = useState(false);
    const [content,setContent] = useState<NotificationContent>({message : "Testing Purpose", status : "Success"})
    const handleView = (isShow : boolean,inputContent : NotificationContent) => {
        setContent(inputContent);
        if(!isShow){
            setTimeout(()=>setView(isShow),2000);
        }
        else setView(isShow)
    };
    const notifiComponent = view && <Notification view={view} content = {content}/>
    return { notifiComponent, handleView }
}