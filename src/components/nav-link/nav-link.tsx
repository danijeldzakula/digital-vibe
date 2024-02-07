'use client';

import { usePathname } from 'next/navigation'
import Link from 'next/link';

type ActiveLinkProps = {
  href: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
}) => {
  const pathname = usePathname();
  const isActive = pathname !== '/' && pathname.startsWith(href) ? 'text-red-500' : '';


  return (
    <Link href={href} className={isActive}>
      {children}
    </Link>
  );
};

export default ActiveLink;
