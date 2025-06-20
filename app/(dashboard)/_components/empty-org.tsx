import Image from "next/image";
const EmptyOrg = () => {
    return ( 
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/globe.svg" alt="empty" height={200} width={200}></Image>
        </div>
     );
}
 
export default EmptyOrg;