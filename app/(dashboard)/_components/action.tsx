"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuContentProps, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Link2 } from "lucide-react";
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
            <DropdownMenuContent onClick={(e)=>e.stopPropagation()} side={side}  sideOffset={sideoffset} className="w-60 z-50  bg-white rounded-md">

                <DropdownMenuItem className="p-3 cursor-pointer ">
                    <Link2 className="h-4 w-4 mr-2"/>
                    Copy Board Link
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
      );
}//
 
export default Actions;

//