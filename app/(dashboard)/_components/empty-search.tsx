import Image from "next/image";
const EmptySearch = () => {
    return ( 

        <div className="h-full flex flex-col items-center justify-center">
            <Image src="empty-search.svg" height={140} width={140}  alt="Empty"/>
            <h2 className="text-2l font-semibold mt-6"> No Results Found </h2>
            <p className="text-muted-foreground text-sm mt-2"> Try search Something else </p>
        </div>

     );
}
 
export default EmptySearch;