import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


const InviteButton = () => {
    return (  
        <Dialog>
            <DialogTrigger asChild>
                <Button value="outline">
                    <Plus className="h-4 w-4 mr-2"> </Plus>
                    Invite Members
                </Button>
            </DialogTrigger>

            <DialogContent className="p-0 bg-transparent border-none w-full max-w-[95%] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[880px] overflow-hidden">
                <DialogTitle className="sr-only">Invite Members</DialogTitle>
                <OrganizationProfile  routing="hash">
                    
                </OrganizationProfile>
            </DialogContent>


        </Dialog>
    );
}
 
export default InviteButton;