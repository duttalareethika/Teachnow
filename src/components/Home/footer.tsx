import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#d9d9d9] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-[#1e2d42] mb-4">
              Teach<span className="text-[#4679b5]">now</span>
            </div>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-[#4679b5] cursor-pointer hover:text-[#3764b9]" />
              <Twitter className="w-5 h-5 text-[#4679b5] cursor-pointer hover:text-[#3764b9]" />
              <Linkedin className="w-5 h-5 text-[#4679b5] cursor-pointer hover:text-[#3764b9]" />
              <Instagram className="w-5 h-5 text-[#4679b5] cursor-pointer hover:text-[#3764b9]" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#1e2d42] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#505050]">
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1e2d42] mb-4">For JobSeekers</h3>
            <ul className="space-y-2 text-sm text-[#505050]">
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Free Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Teaching Resource&apos;s
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1e2d42] mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm text-[#505050]">
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Employer Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1e2d42] mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-[#505050] mb-4">
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4679b5]">
                  FAQs
                </a>
              </li>
            </ul>
            <div>
              <h3 className="font-semibold text-[#1e2d42] mb-2">Contact Us</h3>
              <p className="text-sm text-[#505050]">support@teachnow.com</p>
              <p className="text-sm text-[#505050]">+91 9874 561 230</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d9d9d9] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#505050]">
          <p>Copyright © 2025. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#4679b5]">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#4679b5]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
