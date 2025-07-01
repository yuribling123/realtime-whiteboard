"use client"

import EmptyBoards from "./empty-boards"
import EmptyFavorites from "./empty-favorites"
import EmptySearch from "./empty-search"

interface BoardListProps {
    orgId: string
    query: {
        search?: string
        favorites?: string
    }

}


const Boardlist = (
    { orgId, query }: BoardListProps
) => {
    const data=[] //todo : change to api calls 
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
            <div>Org ID: {orgId}</div>
            <div>Search Query: {query.search || 'None'}</div>
            <div>Favorites: {query.favorites || 'None'}</div>
        </div>

    );
}

export default Boardlist;