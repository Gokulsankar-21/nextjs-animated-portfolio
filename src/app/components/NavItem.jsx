import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ link }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={link.url}
      className={`p-1 rounded text-black ${
        pathName === link.url && "bg-black text-white"
      } hover:bg-black hover:text-white`}
    >
      {link.title}
    </Link>
  );
}
/**
 *
 * react la use pandra ella hooks um next la iruku
 * next fetch thevayan params and route than thani nama manage pannuvom
 * otherwise next lauum client side la ella hooks um use pannalam
 * already na next js oda workflow solli iruken
 */
