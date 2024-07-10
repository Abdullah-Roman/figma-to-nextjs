import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#E9F4EE]">
      <div className="container py-11 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Timber Trove</h1>
            <p className="pt-4 font-bold">Social Media</p>
            <div className="flex gap-3">
              <span>
                <AiOutlineFacebook className="text-2xl" />
              </span>
              <span>
                <CiTwitter className="text-2xl" />
              </span>
              <span>
                <FaInstagram className="text-2xl" />
              </span>
            </div>
          </div>
          <div>
            <ul>
              <li className="font-bold">Shop</li>
              <li>Products</li>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold">Company</li>
              <li>About Us</li>
              <li>Conatct</li>
              <li>News</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold">Stay up to date</h1>
            <div className="flex w-full max-w-sm items-center space-x-0 pt-6">
              <Input type="email" placeholder="Enter YourEmail" />
              <Button type="submit" className="bg-black text-white">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pt-24">
          <div className="sm:w-[750px] w-[250px] h-[3px] bg-black"></div>
          <p className="font-medium text-lg">Terms</p>
          <p className="font-medium text-lg">Privacy</p>
          <p className="font-medium text-lg">Cookie</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
