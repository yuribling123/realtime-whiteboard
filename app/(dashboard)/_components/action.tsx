"use client"

import { DropdownMenu, DropdownMenuContentProps, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Children } from "react";

interface ActionProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideoffset?: DropdownMenuContentProps["sideOffset"];
    id:string;
    title:string
}

const Actions = (
    { children, side, sideoffset, id, title }: ActionProps

) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
        </DropdownMenu>
      );
}
 
export default Actions;