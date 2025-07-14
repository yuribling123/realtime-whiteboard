"use client";
 
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
const BoardCard = () => {
    return ( 
        <div> Board Card </div>
  
    );
}
 
export default BoardCard;