import { Dialog } from "@/components/ui/dialog";
import Image from "next/image";
const EmptyOrg = () => {
    return ( 
        <div className="h-full flex flex-col items-center justify-center">

            <Image src="/globe.svg" alt="empty" height={200} width={200}></Image>

            <h2 className="text-2xl font-semibold mt-12"> Welcome to  Home </h2>

            <p className="text-muted-foreground text-sm mt-3">create an organization to get started</p>

            <div className="mt-6">
                <Dialog>

                </Dialog>

            </div>

        </div>

     );
}
 
export default EmptyOrg;