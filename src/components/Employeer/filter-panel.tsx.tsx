import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function FilterPanel() {
  return (
    <aside className="w-80 bg-white border-l border-[#e5e7eb] min-h-screen p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#000000]">Filter</h3>
          <Button variant="ghost" className="text-[#eb5757] text-sm p-0">
            Clear All
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-[#333333]">Include Unlock Resumes</span>
          <Switch defaultChecked className="data-[state=checked]:bg-[#447d9b]" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#333333]">Search by Name</label>
          <Input placeholder="Alexa" className="bg-white border-[#e5e7eb]" />
        </div>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-0">
            <span className="text-sm font-medium text-[#333333]">Keyword</span>
            <ChevronDown className="h-4 w-4 text-[#737791]" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="space-y-2">
              <Input placeholder="Enter keywords..." className="bg-white border-[#e5e7eb]" />
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-0">
            <span className="text-sm font-medium text-[#333333]">Skills</span>
            <ChevronUp className="h-4 w-4 text-[#737791]" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" className="bg-[#c3dcfb] text-[#447d9b] text-xs">
                Any skill
              </Button>
              <Button variant="secondary" size="sm" className="bg-[#c3dcfb] text-[#447d9b] text-xs">
                .Net
              </Button>
              <Button variant="secondary" size="sm" className="bg-[#c3dcfb] text-[#447d9b] text-xs">
                C#
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-0">
            <span className="text-sm font-medium text-[#333333]">Experience</span>
            <ChevronDown className="h-4 w-4 text-[#737791]" />
          </CollapsibleTrigger>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-0">
            <span className="text-sm font-medium text-[#333333]">Salary</span>
            <ChevronDown className="h-4 w-4 text-[#737791]" />
          </CollapsibleTrigger>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-0">
            <span className="text-sm font-medium text-[#333333]">Preferred Work Type</span>
            <ChevronDown className="h-4 w-4 text-[#737791]" />
          </CollapsibleTrigger>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-0">
            <span className="text-sm font-medium text-[#333333]">Preferred Job Type</span>
            <ChevronDown className="h-4 w-4 text-[#737791]" />
          </CollapsibleTrigger>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-0">
            <span className="text-sm font-medium text-[#333333]">Active In</span>
            <ChevronDown className="h-4 w-4 text-[#737791]" />
          </CollapsibleTrigger>
        </Collapsible>
      </div>
    </aside>
  )
}
