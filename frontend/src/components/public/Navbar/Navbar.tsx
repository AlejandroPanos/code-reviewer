import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b bg-background z-2000">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex" variant="outline">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
