"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import img from "@/public/es.png";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  return (
    <Navbar
      isBlurred
      isBordered
      maxWidth="xl"
      className=""
    >
      <NavbarContent justify="start">
        
        <NavbarBrand>
          <Image width={32} height={32} src={img} alt=""></Image>
        </NavbarBrand>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link color={"primary"} className="ml-20" href="#" size="lg">
              Link
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent justify="end">
        <Link >Descargar CV</Link>
        <ThemeSwitcher></ThemeSwitcher>
      </NavbarContent>
    </Navbar>
  );
}
