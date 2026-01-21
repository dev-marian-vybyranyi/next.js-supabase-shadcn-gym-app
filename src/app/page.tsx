import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

export default function Home() {
  return (
    <div className="home-parent py-10 px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white uppercase">Fit.Gym</h1>
        <Button variant={"outline"}>Sign-in</Button>
      </div>
      <div className="flex flex-col justify-center items-center h-[80vh] gap-7 mt-20">
        <h1 className="text-6xl font-bold text-center">
          <b className="text-white">Fit.</b>
          <b className="text-green-600">Gym</b>
        </h1>
        <p className="text-sm font-semibold text-gray-500">
          A perfect gym for you to get fit and healthy with the best trainersand
          equipment.
        </p>

        <Button variant={"outline"}>Explore Plans</Button>

        <ArrowDownToLine
          size={20}
          color="gray"
          className="animate-bounce cursor-pointer mt-20"
        />
      </div>
    </div>
  );
}
