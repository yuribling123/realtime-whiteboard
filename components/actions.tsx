"use client"

import { useApiMutation } from "@/hooks/use-api-mutation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuContentProps, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Ghost, Link2, Pencil, Trash2 } from "lucide-react";
import { Children } from "react";
import { toast } from "sonner";
// Import your api object here
import { api } from "@/convex/_generated/api";
import ConfirmModal from "@/components/confirm-modal";
import { Button } from "@/components/ui/button";
import { useRenameModal } from "@/store/use-rename-modal";
//
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
    const {onOpen} = useRenameModal()
    const  {mutate,pending} = useApiMutation(api.board.remove)
    const onCopyLink = () => {

        navigator.clipboard.writeText(`${window.location.origin}/board/${id}`)
        .then(() =>{toast.success("Board link copied to clipboard")})
    }

    const onDelete = () => {
        mutate({id}).then(()=>{
            toast.success("Board deleted successfully")
        }).catch((e)=>{
            toast.error(`Failed to delete board: ${e.message}`)
        })
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent onClick={(e)=>{e.preventDefault();e.stopPropagation()}} side={side}  sideOffset={sideoffset} className="w-60 z-50  bg-white rounded-md">

                <DropdownMenuItem className=" flex items-center p-3 w-full text-sm font-normal focus:outline-none " onClick={onCopyLink}>
                    <Link2 className="h-4 w-4 mr-2 ml-2"/>
                    Copy Board Link
                </DropdownMenuItem>
                <DropdownMenuItem className=" flex items-center p-3 w-full text-sm font-normal focus:outline-none " onClick={() => onOpen(id, title)} >
                    <Pencil className="h-4 w-4 mr-2 ml-2"/>
                    Rename
                </DropdownMenuItem>

                <ConfirmModal header="Delete Board" description="This will delete board and all of its contents." disabled={pending} onConfirm={onDelete}>
                <div  className="focus-visible:ring-2 flex items-center  p-3 w-full text-sm font-normal">
                    <Trash2 className="h-4 w-4 mr-2 ml-2"/>
                    Delete
                </div>
                
                </ConfirmModal>

            </DropdownMenuContent>
        </DropdownMenu>
      );
}//
 
export default Actions;
