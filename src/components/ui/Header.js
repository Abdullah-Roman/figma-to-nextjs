import { BsHandbag } from "react-icons/bs";
import { Button } from "./button";
import MobileView from "./MobileView";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex justify-between container items-center bg-[#E9F4EE] py-4 z-50">
      <div>
        <h1 className="font-bold hidden sm:block uppercase font-bebus text-[2.5rem]">
          Timber Trove
        </h1>
      </div>
      <div>
        <Nav
          className="sm:flex gap-x-4"
          linkStyle="uppercase font-mochiy hidden sm:inline-block text-xl "
        />
      </div>
      <div className="flex gap-x-4">
        <div>
          <BsHandbag className="text-3xl mt-1" />
        </div>
        <Button
          className="uppercase  rounded-xl font-mochiy px-6 hidden sm:inline-block "
          variant="outline"
        >
          Login
        </Button>
        <div>
          <MobileView />
        </div>
      </div>
    </div>
  );
};

export default Header;
