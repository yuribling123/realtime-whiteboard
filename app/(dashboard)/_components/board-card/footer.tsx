import { Star} from "lucide-react";


import { cn } from "@/lib/utils";

interface FooterProps {
    title: string;
    authorLabel: string;
    createdAtLabel: string;
    isFavorite: boolean;
    onClick: () => void;
    disabled: boolean;
}

const Footer = (
    { title, authorLabel, createdAtLabel, isFavorite, onClick, disabled }: FooterProps


) => {
    return ( 
    <div className="relative p-3 bg-white">
        <p className="text-[13px] truncate max-w-[calc(100%-20px)]"> {title} </p>
        <p className="opoacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate"> 
            {authorLabel},{createdAtLabel}
        </p>

        <button disabled = {disabled}
                onClick={onClick}
                   className={cn("opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text=muted-foreground hover:text-blue-600",disabled &&"cursor-not-allowed opacity-75" )}             
                >
            <Star
                className={cn("h-4 w-4", isFavorite && "fill-blue-600")}
            />
             
        </button>
    </div> 
    );
}
 
export default Footer;