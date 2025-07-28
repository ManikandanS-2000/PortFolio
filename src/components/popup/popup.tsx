import Image from "next/image"
import "./popup.css"
import { Ref, useRef } from "react";
import useNotification from "@/hooks/useNotification";

export default function Popup({ close }: any) {
    const submitBtn: Ref<HTMLButtonElement> | null = useRef(null);
    const mailSend = useNotification();

    const formFields = [
        { name: "mobileno", label: "Mobile No", value: "8072010345", disable: true },
        { name: "myemail", label: "My Email", value: "manikandan.s161220@gmail.com", disable: true },
        { name: "name", label: "Name", value: "", disable: false },
        { name: "yourmail", label: "Your Email", value: "", disable: false },
        { name: "message", label: "Message", value: "", disable: false },
    ]

    const myFunction = (elementId: string) => {
        const copyText: any = document.getElementById(elementId);
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    }

    const formSubmit = async (event: any) => {
        event.preventDefault();
        mailSend.handleView(true, { message: "Mail is sending", status: "Loading" });
        submitBtn.current!.disabled = true
        const formData = new FormData(event.target);
        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        });
        if (res.ok) mailSend.handleView(false, { message: "Mail sent successfully", status: "Success" });
        else mailSend.handleView(false, { message: "Mail failed to sent", status: "Error" });
        submitBtn.current!.disabled = false;
    }
    return (
        <div className="fixed w-full h-full top-0 left-0 z-1 content-center" id="popup-container" onClick={close}>
            <div className="form-container w-2/5 h-2/3 backdrop-blur-3xl m-auto grid items-center px-10 py-7 rounded-md border border-[#d3d3d34d]">
                <form onSubmit={formSubmit} className="grid h-full items-center">
                    {
                        formFields.map((field) => (
                            <label className="relative" htmlFor={field.name} key={`${field.name}-input-key`}>
                                <span>{field.label}</span>
                                {
                                    (field.name == "message") ?
                                        <textarea name={field.name} className="w-2/3 bg-[rgba(16,18,27,0.6)] float-right p-1.5 outline-hidden rounded-sm" id={field.name + "-input"} defaultValue={field.value} disabled={field.disable}></textarea>
                                        :
                                        <>
                                            <input name={field.name} type="text" className="w-2/3 bg-[rgba(16,18,27,0.6)] float-right p-1.5 outline-hidden rounded-sm" id={field.name + "-input"} defaultValue={field.value} disabled={field.disable} />
                                            <Image src="./svg/copy.svg" alt="Copy Icon" width={20} height={20} className={(field.disable) ? "right-[1%] top-1/2 translate-y-[-50%] translate-x-0 absolute " : "hidden"} onClick={() => myFunction(field.name + "-input")} />
                                        </>
                                }
                            </label>
                        ))
                    }
                    <button ref={submitBtn} type="submit" className="w-max px-3 py-1.5 m-auto rounded-md bg-[#4bc473] active:bg-[#205331] disabled:bg-[#205331]">Send</button>
                </form>
            </div>
            {mailSend.notifiComponent}
        </div>
    )
}