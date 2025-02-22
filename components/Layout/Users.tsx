"use client"

import type React from "react"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ClerkLoaded, useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { LogOut, UserPlus, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Users: React.FC = () => {
  const { user } = useUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-full">
          {user ? <UserButton afterSignOutUrl="/" /> : <User className="w-5 h-5 text-gray-600" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {user ? (
          <>
            <DropdownMenuItem>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <ClerkLoaded>
            <div className="flex flex-col space-y-2 p-2">
              <SignInButton mode="modal">
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="default" className="w-full justify-start">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </ClerkLoaded>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Users

