"use client"

import EmptyBoards from "./empty-boards"
import EmptyFavorites from "./empty-favorites"
import EmptySearch from "./empty-search"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel";
import BoardCard from "./board-card"

interface BoardListProps {

    orgId: string
    query: {
        search?: string
        favorites?: string
    }

}


const Boardlist = (
    { orgId , query }: BoardListProps

) => {

        const data=useQuery(api.boards.get, {orgId}) //todo : change to api calls 

        if(data == undefined) {
            return ( 

            <div>
                Loading
            </div>)
           
        }


    if (!data.length && query.search){
        return(
          <EmptySearch></EmptySearch>
        )
    }
    if (!data.length && query.favorites){
        return(
           <EmptyFavorites></EmptyFavorites>
        )
    }

    if (!data.length ){
        return(
            <EmptyBoards></EmptyBoards>
        )
    }

    console.log("Boards data:", data); // ✅ Print data to check
  
    return (
        <div>
        <h2 className="text-3xl">
                {query.favorites ? "favourite board" :"Team board"}
        </h2>
 
        <div className=" grid grid-cols-1 sm: grid-flow-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
            {data?.map(
                (board) => ( 
                <BoardCard
                        key={board?._id}
                        id={board._id} title={board.title} authorName={board.authorName} authorId={board.authorId} createdAt={board._creationTime} imageUrl={board.imageUrl} orgId={board.orgId} isFavorite={false}                
                />
            )
            )}
        </div>
  

        </div>

    );
}

export default Boardlist;