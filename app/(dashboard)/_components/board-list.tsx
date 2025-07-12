"use client"

import EmptyBoards from "./empty-boards"
import EmptyFavorites from "./empty-favorites"
import EmptySearch from "./empty-search"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel";

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

        const data=[useQuery(api.boards.get, {orgId}) ]//todo : change to api calls 

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

    
    return (
        <div>
        <h2 className="text-3xl">
                {query.favorites ? "favourite board" :"Team board"}
        </h2>
        </div>

    );
}

export default Boardlist;