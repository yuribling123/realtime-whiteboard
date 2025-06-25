"use client"
import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";

interface DashboardPageProps{
  
}

//sfc
const DashBoardPage = () => {
  const {organization} = useOrganization();


  return ( 
  <div className="flex-1 h-[cal(100%-80px)] p-6"> 
  {!organization ? (<EmptyOrg></EmptyOrg>): (<p>Board List!</p>)}
  
    

  </div> );
}
 
export default DashBoardPage;