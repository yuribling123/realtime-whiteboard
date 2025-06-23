"use client"
import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";

//sfc
const DashBoardPage = () => {
  const {organization} = useOrganization();


  return ( 
  <div className="flex-1 h-[cal(100%-80px)] p-6"> 
  
    <EmptyOrg></EmptyOrg>

  </div> );
}
 
export default DashBoardPage;