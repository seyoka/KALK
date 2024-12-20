import React from "react";
import { cn } from "@/lib/utils";

export const Navbar = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav className={cn("flex items-center justify-between p-4", className)} {...props}>
      {children}
    </nav>
  );
};

export const NavbarBrand = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("font-bold text-xl", className)} {...props}>
      {children}
    </div>
  );
};

export const NavbarContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center space-x-4", className)} {...props}>
      {children}
    </div>
  );
};
