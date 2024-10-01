"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { navLinks } from "../../../constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <Image
                src="assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-2/3">
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route == pathname;
                    return (
                      <li
                        key={link.route}
                        className={`${isActive && "gradient-text"}  flex
                        white-space-nowrap text-dark-700                            
                        cursor-pointer`}
                      >
                        <Link href={link.route} className="sidebar-link">
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}

                  <li className="flex-center cursor-pointer gap-2 p-4"></li>
                </ul>
              </>
            </SheetContent>
            <SignedOut>
              <Button asChild className="button bg-black bg-cover">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </Sheet>
        </SignedIn>
      </nav>
    </header>
  );
};

export default MobileNav;
