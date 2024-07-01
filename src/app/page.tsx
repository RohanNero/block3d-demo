import styles from "./page.module.css";
import Image from "next/image";
import block3dInfographic from "../../public/block3d-infographic.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex flex-col gap-16 items-center justify-evenly text-center text-3xl bottom-full h-full">
        <div className="flex flex-col gap-4">
          <div>
            Hello, welcome to the block3d demo! This page is marked "public", so
            anyone can view it.{" "}
          </div>
          <div>
            {" "}
            The button below will take you to a private page that can only be
            accessed by users who hold 1 USDC on either Ethereum Mainnet,
            Arbitrum, Base, or Polygon.{" "}
          </div>
        </div>
        <Image
          src={block3dInfographic}
          width={720}
          height={720}
          alt="Block3d Logo"
        />
        <Link className="w-[10%]" href={"/private"}>
          <button className="bg-gray-300 rounded hover:-translate-y-1 hover:bg-gray-400 p-2">
            Click me
          </button>
        </Link>
      </div>
    </main>
  );
}
