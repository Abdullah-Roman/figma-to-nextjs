import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import Nav from "./Nav";

const MobileView = () => {
  return (
    <div className="block sm:hidden">
      <Sheet>
        <SheetTrigger>
          <IoMenu className="text-3xl mt-2" />
        </SheetTrigger>
        <SheetContent className="bg-gray-600 text-white ">
          <SheetHeader>
            <SheetTitle className="mb-5 mt-2">Timber Trove</SheetTitle>
            <SheetDescription className="mt-5">
              <Nav className="flex flex-col gap-4 font-bold" />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileView;
