import "./popup.css"

export default function Popup({ close }: any) {
    let formFields = [
        { name: "mobileno", label: "Mobile No", value: "8072010345", disable: true },
        { name: "myemail", label: "My Email", value: "manikandan.s161220@gmail.com", disable: true },
        { name: "yourmail", label: "Your Email", value: "", disable: false },
        { name: "message", label: "Message", value: "", disable: false },
    ]
    return (
        <div className="fixed w-full h-full top-0 left-0 z-1 content-center" id="popup-container" onClick={close}>
            <div className="w-2/5 h-2/3 backdrop-blur-3xl m-auto grid items-center px-10 py-7 rounded-md border border-[#d3d3d34d]">
                {
                    formFields.map((field) => (
                        <label htmlFor={field.name} key={`${field.name}-input-key`}>
                            {field.label}
                            {
                                (field.name == "message")?
                                <textarea className="w-2/3 bg-[rgba(16,18,27,0.6)] float-right p-1.5 outline-hidden rounded-sm" id={field.name+"-input"} defaultValue={field.value} disabled={field.disable}></textarea>
                                :
                                <input className="w-2/3 bg-[rgba(16,18,27,0.6)] float-right p-1.5 outline-hidden rounded-sm" id={field.name+"-input"} defaultValue={field.value} disabled={field.disable} />
                            }
                        </label>
                    ))
                }
                <button className="w-max px-3 py-1.5 m-auto rounded-md bg-[#4bc473]">Send</button>
            </div>
        </div>
    )
}