import Image from "next/image";
//loading for authentication
export const Loading = ()=>{
    return(
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image src="/logo.svg" alt="logo" width={120} height={120} className="animate-pulse duration-700"></Image>
        </div>

    )
}