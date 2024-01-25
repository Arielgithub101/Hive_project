import Right from "@/components/icons/Right";
import Bee from "@/components/icons/bee";
import Pizza from "@/components/icons/Pizza";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better<br />
          with Bee&nbsp;
          <span className="text-primary">
            Pizza
          </span>
          <div className="flex items-center ">
            <div className="w-10 h-10 ml-2"><Bee /></div>
            <div className="w-10 h-10 ml-2"><Bee /></div>
            <div className="w-10 h-10 ml-2"><Bee /></div>
            <div className="w-10 h-10 ml-2"><Bee /></div>
          </div>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          פיצה זה החתיכה החסרה בחיים שלך שמשלימה את היום לכלכך יותר טוב,דרך פשוטה ויחד עם זאת טעימה להנות מהחיים
          <div className="flex items-center ">
            <div className="w-10 h-10 ml-2"><Pizza /></div>
            <div className="w-10 h-10 ml-2"><Pizza /></div>
            <div className="w-10 h-10 ml-2"><Pizza /></div>
            <div className="w-10 h-10 ml-2"><Pizza /></div>
          </div>
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-black px-4 py-2 rounded-full">
            <Link href={'/menu'}>!! הזמן עכשיו</Link>
            <Right />
          </button>
          <button className="flex justify-center uppercase flex items-center gap-2 text-BLACK px-4 py-2 rounded-full">
            למד עוד
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}