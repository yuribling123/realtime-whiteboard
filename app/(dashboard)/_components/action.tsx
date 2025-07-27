"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

interface ActionProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideoffset?: DropdownMenuContentProps["sideOffset"];
    id:string;
    title:string
}