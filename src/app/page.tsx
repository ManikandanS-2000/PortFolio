import NavBar from "@/components/navBar/navBar"
import Content from "@/components/content/content"
import Image from "next/image"
export default function Home() {
  return (
  <div className="size-full relative z-[60] px-30 py-3 flex flex-col gap-3">
    <NavBar></NavBar>
    <Content></Content>
  </div>
  )
}