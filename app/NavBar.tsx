"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";

export default function NavBar() {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <Container>
      <nav className="border-b mb-10 px-5 py-3">
        <Flex justify="between">
          <Flex align="center" gap="3">
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
          </Flex>
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Flex gap="2">
                    <Avatar
                      src={session.user?.image!}
                      fallback="A"
                      size="2"
                      radius="full"
                      className="cursor-pointer"
                    />
                  </Flex>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <Text size="2">
                    <DropdownMenu.Label>
                      {session.user?.email}
                    </DropdownMenu.Label>
                  </Text>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Log out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Log in</Link>
            )}
          </Box>
        </Flex>
      </nav>
    </Container>
  );
}
