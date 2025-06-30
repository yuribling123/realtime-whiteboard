"use client"

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
            <div>
                Try something else 
            </div>
        )
    }
    if (!data.length && query.favorites){
        return(
            <div>
                No Favorites
            </div>
        )
    }

    if (!data.length ){
        return(
            <div>
                No boards at all  
            </div>
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