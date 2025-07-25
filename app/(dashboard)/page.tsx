'use client';
import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import { useSearchParams } from 'next/navigation';
import Boardlist from "./_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };

}

//sfc
const DashBoardPage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || undefined;
  const favorites = searchParams.get("favorites") || undefined;


  return (
    <div className="flex-1 h-[cal(100%-80px)] p-6">
      {/* {JSON.stringify(Object.fromEntries(searchParams.entries()))} */}
      {!organization ? (<EmptyOrg></EmptyOrg>) : (<Boardlist orgId={organization.id} query={{
        search,
        favorites
      }} ></Boardlist>)}



    </div>);
}

export default DashBoardPage;