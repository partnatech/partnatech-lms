"use client"
import { usePathname  } from 'next/navigation';

export const Logo = () => {
  const router = usePathname();
  
  const isAuthRoute = router === '/login' || router === '/register';

  const textColor = isAuthRoute ? 'text-black' : 'text-black dark:text-white';

  return (
    <div className={`font-bold ${textColor} hover:text-primary text-2xl transition-colors ease-linear duration-300`}>
      PartnaLearn
    </div>
  );
};
