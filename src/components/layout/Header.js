'use client';
import { CartContext } from "@/components/AppContext";
import Bars2 from "@/components/icons/Bars2";
import Bee from "@/components/icons/bee";
import ShoppingCart from "@/components/icons/ShoppingCart";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";

function AuthLinks({ status, userName }) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'} className="whitespace-nowrap">
          שלום, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-primary rounded-full text-black px-8 py-2">
          התנתק
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={'/login'}>התחברות</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-black px-8 py-2">
          הרשמה
        </Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  return (
    <header>
      <div className="flex items-center md:hidden justify-between">
        <Link className="text-primary font-semibold text-2xl" href={'/'}>
          BeePIZZA
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-black text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen(prev => !prev)}>
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">
          <Link href={'/'}>בית</Link>
          <Link href={'/menu'}>תפריט</Link>
          <Link href={'/#about'}>עלינו</Link>
          <Link href={'/#contact'}>צור קשר</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link className="flex items-center text-primary font-semibold text-2xl" href={'/'}>
            <div className="w-10 h-10 ml-2"><Bee/></div>
            BeePIZZA
          </Link>
          <Link href={'/'}>בית</Link>
          <Link href={'/menu'}>תפריט</Link>
          <Link href={'/#about'}>עלינו</Link>
          <Link href={'/#contact'}>צור קשר</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <AuthLinks status={status} userName={userName} />
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-black text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}