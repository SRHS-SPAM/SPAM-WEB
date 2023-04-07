import About from "./about";
import Menubar from "../components/menubar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">go to about</Link>

      <Menubar />
    </div>
  );
}
