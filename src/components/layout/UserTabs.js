'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function UserTabs({isAdmin}) {
  const path = usePathname();
  return (
    <div className="flex mx-auto gap-2 tabs justify-center flex-wrap">
      <Link
        className={path === '/profile' ? 'active' : ''}
        href={'/profile'}
      >
        פרופיל
      </Link>
      {isAdmin && (
        <>
          <Link
            href={'/categories'}
            className={path === '/categories' ? 'active' : ''}
          >
            קטגוריות
          </Link>
          <Link
            href={'/menu-items'}
            className={path.includes('menu-items') ? 'active' : ''}
          >
            תפריט פריטים
          </Link>
          <Link
            className={path.includes('/users') ? 'active' : ''}
            href={'/users'}
          >
            משתמשים
          </Link>
        </>
      )}
      <Link
        className={path === '/orders' ? 'active' : ''}
        href={'/orders'}
      >
        הזמנות
      </Link>
    </div>
  );
}