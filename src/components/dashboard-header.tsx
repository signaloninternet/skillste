"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CalendarDays, ChevronDown } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center gap-2 bg-transparent text-gray-50 border-gray-700 hover:bg-gray-700"
            variant="outline"
          >
            All Symbols
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-gray-800 text-gray-50 border-gray-700">
          <DropdownMenuItem className="hover:bg-gray-700">Symbol 1</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-700">Symbol 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center gap-2 bg-transparent text-gray-50 border-gray-700 hover:bg-gray-700"
            variant="outline"
          >
            All Setups
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-gray-800 text-gray-50 border-gray-700">
          <DropdownMenuItem className="hover:bg-gray-700">Setup 1</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-700">Setup 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center gap-2 bg-transparent text-gray-50 border-gray-700 hover:bg-gray-700"
            variant="outline"
          >
            All Sides
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-gray-800 text-gray-50 border-gray-700">
          <DropdownMenuItem className="hover:bg-gray-700">Side 1</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-700">Side 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center gap-2 bg-transparent text-gray-50 border-gray-700 hover:bg-gray-700"
            variant="outline"
          >
            All Mistakes
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-gray-800 text-gray-50 border-gray-700">
          <DropdownMenuItem className="hover:bg-gray-700">Mistake 1</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-700">Mistake 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center gap-2 bg-transparent text-gray-50 border-gray-700 hover:bg-gray-700"
            variant="outline"
          >
            All Status
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-gray-800 text-gray-50 border-gray-700">
          <DropdownMenuItem className="hover:bg-gray-700">Status 1</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-700">Status 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center gap-2 bg-transparent text-gray-50 border-gray-700 hover:bg-gray-700"
            variant="outline"
          >
            Main Portfolio
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-gray-800 text-gray-50 border-gray-700">
          <DropdownMenuItem className="hover:bg-gray-700">Portfolio 1</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-700">Portfolio 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        className="flex items-center gap-2 bg-transparent text-gray-50 border-gray-700 hover:bg-gray-700"
        variant="outline"
      >
        mm/dd/yyyy
        <CalendarDays className="h-4 w-4" />
      </Button>
      <Button className="bg-blue-600 text-white hover:bg-blue-700">Apply Filters</Button>
    </div>
  )
}
