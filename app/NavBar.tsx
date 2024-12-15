"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

export default function NavBar() {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-10 px-5 h-14 items-center">
      <Link href="/">
        <FaBug size={28} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            className={
              link.href === currentPath
                ? "text-zinc-900"
                : `text-zinc-500 hover:text-zinc-800 transition-colors`
            }
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
