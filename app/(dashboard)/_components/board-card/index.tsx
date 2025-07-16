"use client";
import Link from "next/link";
 
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

                <div className="relative flex-1 bg-amber-50"> <p>id:{id} </p> <p>author:{authorName} </p> </div>

            </div>
        
        </Link>
        

  
    );
}
 
export default BoardCard;