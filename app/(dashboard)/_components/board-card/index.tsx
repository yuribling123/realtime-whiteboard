"use client";
import Link from "next/link";
import Image from "next/image";
import Overlay from "./overlay";
 
interface BoardCardProps{
    id:string;
    title:string;
    authorName:string;
    authorId: string;
    createdAt: number;
    imageUrl : string;
    orgId: string;
    isFavorite: boolean

}
const BoardCard = (
    {id,
     title,
     authorId,
     authorName,
     createdAt,
     imageUrl,
     orgId,
     isFavorite,

    }:BoardCardProps
) => {
    return ( 
        <Link href={`/board/${id}`}>
            <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">

                <div className="relative flex-1 bg-amber-50"> 

                    <Image src={imageUrl} alt={title} fill className="object-fit"></Image>
                    <Overlay/>

                    <p className="pt-5">{imageUrl}</p>
                </div>

            </div>
        
        </Link>
        

  
    );
}
 
export default BoardCard;