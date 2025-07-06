"use client"

import { useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import {api} from "@/convex/_generated/api"

import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
const EmptyBoards = () => {
    const create = useMutation(api.board.create)
    const {organization} = useOrganization();
    const onClick = ()=>{
        if(!organization) return;
        create (
            {   
                title:"Untitled",
                orgId:organization.id

            }
        )
    }
    return ( 

        <div className="h-full flex flex-col items-center justify-center">
            <Image src="empty-boards.svg" height={140} width={140}  alt="Empty"/>
            <h2 className="text-2l font-semibold mt-6"> Create your first board</h2>
            <p className="text-muted-foreground text-sm mt-2"> Start creating a board for your organization </p>

            <div className="mt-6">

                <Button size='lg' onClick={onClick}> Create board </Button>

            </div>
        </div>

     );
}
 
export default EmptyBoards;