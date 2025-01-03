"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

export default function NavBar() {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
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
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Log out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Log in</Link>
        )}
      </Box>
    </nav>
  );
}
