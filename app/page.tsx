import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div className="flex flex-col gap-y-4">
   <div>this is a screen for authenticated user only</div>
   <div> <UserButton></UserButton> </div>
   </div>
  );
}
