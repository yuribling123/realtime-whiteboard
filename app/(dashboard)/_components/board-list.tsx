"use client"

interface BoardListProps{
    orgId: string
    query:{
        search?: string
        favorites?: string
    }

}


const Boardlist = (
    {orgId,query}:BoardListProps
) => {
    return (  
        <div> {orgId} </div>
    );
}
 
export default Boardlist;