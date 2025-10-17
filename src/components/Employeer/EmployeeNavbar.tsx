"use client";

import { Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Optional: clear session / auth token
    localStorage.removeItem("token"); // if you use JWT
    // Redirect to home
    router.push("/");
  };

  return (
    <header className="bg-white border-b border-[#e8e8e8] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-[#1e2d42]">Teachnow</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-[#333333] hover:text-[#1e2d42]">
              Find Jobs
            </a>
            <a href="#" className="text-[#333333] hover:text-[#1e2d42]">
              Free Resume Builder
            </a>
            <a href="#" className="text-[#333333] hover:text-[#1e2d42]">
              Teaching Resources
            </a>
            <a href="#" className="text-[#333333] hover:text-[#1e2d42]">
              Pricing
            </a>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-[#737791]" />
            <Badge className="absolute -top-1 -right-1 h-3 w-3 p-0 bg-[#eb5757]" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/indian-male-admin.jpg" />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="text-sm font-medium text-[#1e2d42]">
                    Dipanjan
                  </div>
                  <div className="text-xs text-[#737791]">Admin</div>
                </div>
                <ChevronDown className="h-4 w-4 text-[#737791]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
