import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "../app/style/Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from 'next/link'; // Import Next.js Link
import {
  Sheet as UISheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <main className="flex justify-center">
        <div className="navbar xl:w-[1352px] lg:w-[95%]  w-[95%] mx-[282px] px-[30px] md:h-[80px] h-[50px] lg:px-[48px] flex justify-between items-center lg:py-[28px] bg-navBgColor  text-white rounded-[50px]">
          <div>

            <h1 className="font-secondary  text-[24px] leading-[28px] xl:text-[32px] xl:leading-[48px] lg:text-[32px] lg:leading-[48px] md:text-[32px] md:leading-[48px] font-bold">
              indya.ai
            </h1>
          </div>
          <div className="hidden md:hidden lg:flex xl:flex">
            <nav className="flex gap-[35px]">
            <DropdownMenu>
  <DropdownMenuTrigger className="flex items-center border-none outline-none">
    Product
    <FaChevronDown className="ml-2 text-[13px]" />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
    <DropdownMenuItem className="menu rounded-[4px]">
      <Link href="/cleo">
        Cleo
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem className="menu rounded-[4px]">
      <Link href="/agent">
        AI Agents
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem className="menu rounded-[4px]">
      <Link href="/integrations">
        Integrations
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem className="menu rounded-[4px]">
      <a href="#">No Link</a>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center border-none outline-none">
                  <Link href="#">Solutions</Link>
                  <FaChevronDown className="ml-2 text-[13px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="#">By Industry</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="#">By Use Case</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center border-none outline-none">
                  <Link href="#">Resources</Link>
                  <FaChevronDown className="ml-2 text-[13px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="/blog-post">Blog</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="#">Whitepapers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="#">Case Studies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="#">Webinars</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="#">Ebooks</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center border-none outline-none">
                  <Link href="#">Company</Link>
                  <FaChevronDown className="ml-2 text-[13px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="#">About Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="#">Careers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="menu rounded-[4px]">
                    <Link href="#">Contacts</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center border-none outline-none">
                  <Link href="#">Pricing</Link>
                </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center border-none outline-none">
                  <Link href="request-sent">Demo</Link>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </nav>
          </div>

          <div className="md:block lg:hidden xl:hidden">
            <UISheet>
              <SheetTrigger asChild>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black text-primary border border-black bg:opacity-50">
                <SheetHeader>
                  <div>
                    <h1 className="w-[75%] mb-3 font-secondary text-center text-[32px] leading-[48px] font-bold">
                      indya.ai
                    </h1>
                  </div>
                </SheetHeader>
                <nav className="flex flex-col gap-[32px]">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      <Link href="#">Product</Link>
                      <FaChevronDown className="ml-2 text-[13px]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="/cleo">Cleo</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="/agent">AI Agents</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">Integrations</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      <Link href="#">Solutions</Link>
                      <FaChevronDown className="ml-2 text-[13px]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">By Industry</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">By Use Case</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      <Link href="#">Resources</Link>
                      <FaChevronDown className="ml-2 text-[13px]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="/blog-post">Blog</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">Whitepapers</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">Case Studies</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">Webinars</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">Ebooks</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      <Link href="#">Company</Link>
                      <FaChevronDown className="ml-2 text-[13px]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-bgColor p-[16px] w-[209px] text-white border-[1px] border-black rounded-[12px]">
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">About Us</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">Careers</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="menu rounded-[4px]">
                        <Link href="#">Contacts</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      <Link href="#">Pricing</Link>
                    </DropdownMenuTrigger>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center border-none outline-none">
                      <Link href="request-sent">Demo</Link>
                    </DropdownMenuTrigger>
                  </DropdownMenu>
                </nav>
              </SheetContent>
            </UISheet>
          </div>
          <div className="hidden md:hidden lg:block xl:block">
<Button className="bg-primary text-center hover:bg-white rounded-[6px] text-colorBlack text-[14px] leading-[21px] font-[600]">
  Get Early Access
</Button>
</div>
        </div>
      </main>
    </>
  );
};

export default Navbar;





