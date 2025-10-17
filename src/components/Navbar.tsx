"use client";

import { Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    // (Optional) Clear auth/session storage here
    localStorage.removeItem("token"); // example if using JWT

    // Redirect to homepage
    router.push("/");
  };

  return (
    <header className="bg-white border-b border-[#e8e8e8] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo + Nav links */}
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-[#000000]">
            <span className="text-[#000000]">Teach</span>
            <span className="text-[#447d9b]">now</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-[#505050] hover:text-[#000000] font-medium"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="text-[#505050] hover:text-[#000000] font-medium"
            >
              Free Resume Builder
            </a>
            <a
              href="#"
              className="text-[#505050] hover:text-[#000000] font-medium"
            >
              Teaching Resources
            </a>
            <a
              href="#"
              className="text-[#505050] hover:text-[#000000] font-medium"
            >
              Pricing
            </a>
          </nav>
        </div>

        {/* Notifications + Profile */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-[#ffa412]" />
            <span className="absolute -top-1 -right-1 bg-[#eb5757] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 p-2"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/professional-bearded-man.png" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="text-sm font-medium text-[#000000]">
                    Musfiq
                  </div>
                  <div className="text-xs text-[#737791]">Admin</div>
                </div>
                <ChevronDown className="w-4 h-4 text-[#737791]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
