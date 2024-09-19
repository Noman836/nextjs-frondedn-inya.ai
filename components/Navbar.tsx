import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "../app/style/Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "./ui/button";

import {
  Sheet as UISheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <main className="main-container">
        <div className="navbar container lg:w-full md:w-full w-[90%] lg:px-[48px] flex justify-between items-center lg:py-[20px] bg-navBgColor text-white rounded-[50px]">
          <div>
            <h1 className="font-secondary text-[32px] leading-[48px] font-bold">
              indya.ai
            </h1>
          </div>
          <div className="hidden md:flex">
            <nav className="flex gap-[32px]">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center border-none outline-none">
                  Product
                  <FaChevronDown className="ml-2 text-[13px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                  <DropdownMenuItem className="menu rounded-[4px]">
                    Cleo
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    AI Agents
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    Integrations
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center border-none outline-none">
                  Solutions
                  <FaChevronDown className="ml-2 text-[13px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                  <DropdownMenuItem className="menu rounded-[4px]">
                    By Industry
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    By Use Case
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center border-none outline-none">
                  Resources
                  <FaChevronDown className="ml-2 text-[13px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                  <DropdownMenuItem className="menu rounded-[4px]">
                    Blog
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    Whitepapers
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    Case Studies
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    Webinars
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    Ebooks
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center border-none outline-none">
                  Company
                  <FaChevronDown className="ml-2 text-[13px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                  <DropdownMenuItem className="menu rounded-[4px]">
                    About Us
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    Careers
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    Contacts
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                  Pricing
                </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                  Demo
                </DropdownMenuTrigger>
              </DropdownMenu>
            </nav>
          </div>

          <div className="md:hidden ">
            <UISheet>
              <SheetTrigger asChild>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent side="left" className="">
                <SheetHeader>
                  <div>
                    <h1 className="w-[75%] mb-3 font-secondary text-center text-[32px] leading-[48px] font-bold">
                      indya.ai
                    </h1>
                  </div>
                </SheetHeader>
                <nav className="flex flex-col lg:gap-[32px] md:gap-[24px] gap-[20px]">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      Product
                      <FaChevronDown className="ml-2 text-[13px]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                      <DropdownMenuItem className="menu rounded-[4px]">
                        Cleo
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        AI Agents
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        Integrations
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      Solutions
                      <FaChevronDown className="ml-2 text-[13px]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                      <DropdownMenuItem className="menu rounded-[4px]">
                        By Industry
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        By Use Case
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      Resources
                      <FaChevronDown className="ml-2 text-[13px]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                      <DropdownMenuItem className="menu rounded-[4px]">
                        Blog
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        Whitepapers
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        Case Studies
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        Webinars
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        Ebooks
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      Company
                      <FaChevronDown className="ml-2 text-[13px]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                      <DropdownMenuItem className="menu rounded-[4px]">
                        About Us
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        Careers
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        Contacts
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center">
                      Pricing
                    </DropdownMenuTrigger>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center">
                      Demo
                    </DropdownMenuTrigger>
                  </DropdownMenu>
                </nav>
                <SheetFooter className="bg-colorBlack mt-[30px] w-[100%] rounded-[12px]">
                  <SheetClose asChild>
                    <Button
                      className="text-primary bg-colorBlack rounded-[12px]"
                      type="submit"
                    >
                      Close
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </UISheet>
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary text-center hover:bg-primary rounded-[6px] text-colorBlack text-[14px] leading-[21px] font-[600]">
              Get Early Access
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
