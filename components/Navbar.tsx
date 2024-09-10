"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed inset-x-0 flex justify-end items-end", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" passHref>
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <Link href="/#about" passHref>
          <MenuItem setActive={setActive} active={active} item="About">
          </MenuItem>
        </Link>
        <Link href="/#projects" passHref>
          <MenuItem setActive={setActive} active={active} item="Project">
          </MenuItem>
        </Link>
        <Link href="/#contact" passHref>
          <MenuItem setActive={setActive} active={active} item="Contact">
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
