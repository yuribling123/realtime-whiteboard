"use client"
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

const font = Poppins({
    subsets: ["latin"],
    weight: "600",
});

const OrgSidebar = () => {
    return (<div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 bg-red-5" >
        <Link href="/">
            <div className="flex items-center gap-x-2">
                <Image src="/logo.svg" alt="logo" height={60} width={60} ></Image>
                <span className={cn("font-semibold text-2xl", font.className)}>
                    Board
                </span>


            </div>
        </Link>
        <OrganizationSwitcher
        hidePersonal
        appearance={{
            elements:{
                rootBox:{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%"
                },
                organizationSwitcherTrigger:{
                    padding:"6px",
                    width:"100",
                    borderRadius:"8px",
                    border:"1px solid #E5E7EB",
                    justifyContent:"space-between",
                    backgroundColor:"white",
                }
            }
        }}
        ></OrganizationSwitcher>
        <div className="space-y-1 w-full">
            <Link href="/">
            <Button><LayoutDashboard className="h-4 w-4 mr-2"></LayoutDashboard></Button>
            </Link>
        </div>
    </div>);
}

export default OrgSidebar;