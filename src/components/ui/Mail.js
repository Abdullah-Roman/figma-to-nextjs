import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { VscMail } from "react-icons/vsc";

const Mail = () => {
  const pic = "/pic.png";
  return (
    <div className=" pt-20 grid place-items-center grid-cols-1 sm:grid-cols-2">
      <div className="mail ps-10 translate-y-1/3">
        <div className="flex gap-x-2">
          <p>
            <VscMail className="text-xl" />
          </p>
          <p className="text-xs">
            Subscribe to get $30 off* <br /> your first order
          </p>
        </div>

        <div className="flex w-full max-w-sm items-center space-x-0 pt-6">
          <Input type="email" placeholder="Enter YourEmail" />
          <Button type="submit" className="bg-black text-white">
            Submit
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={pic}
          height={368}
          width={772}
          alt=""
          className="w-full pt-10 sm:pt-0"
        />
      </div>
    </div>
  );
};

export default Mail;
