import { Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <div className="relative w-full h-[382px] p-16 gap-6 bg-black flex flex-col justify-center text-center">
      <div className="flex flex-row w-full h-[181px] gap-[190px] justify-center">
        <div className="flex flex-col w-[384px] h-[168px] gap-2">
          <h1 className="font-clash font-bold text-[56px] capitalize text-white leading-[100%] text-left">
            Sanaa
          </h1>
          <p className="text-white font-lato font-normal text-base leading-[140%] text-left mt-4">
            Sanaa is a unified platform where creators showcase their work,
            connect with fans, and build sustainable communities.
          </p>
        </div>
        <div className="flex flex-col w-[192px] h-[181px]">
          <h2 className="text-white font-bold font-lato text-[24px] leading-[100%] text-left">
            Links
          </h2>
          <div className="flex flex-col gap-6 pt-2.5 pb-2.5 w-[192px] h-auto mt-4">
            <p className="font-lato font-normal text-white text-[20px] leading-[140%] text-left">
              About Sanaa
            </p>
            <p className="font-lato font-normal text-white text-[20px] leading-[140%] text-left">
              For Artists
            </p>
            <p className="font-lato font-normal text-white text-[20px] leading-[140%] text-left">
              Categories
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[219px] h-[112px] gap-4">
          <h2 className="text-white font-bold font-lato text-[20px] leading-[100%] text-left">
            Contact Information
          </h2>

          <div className="flex flex-col w-[219px] h-[80px] gap-4">
            <div className="flex flex-row w-[219px] h-[32px] gap-2 items-center">
              <Mail className="text-white" />
              <p className="text-white font-lato font-normal text-[20px] leading-[140%]">
                example@email.com
              </p>
            </div>
            <div className="flex flex-row w-[219px] h-[32px] gap-2 items-center">
              <Phone className="text-white" />
              <p className="text-white">+254 7XX XXX XXX</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto flex flex-row h-[49px] gap-2.5 p-2.5 border-t border-white justify-center">
        <p className="font-lato font-normal text-base leading-none text-white mt-4">
          &copy; 2025 Sanaa. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
