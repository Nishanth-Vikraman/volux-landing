import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="#" className="flex items-center gap-2" aria-label="JITCode home">
          <span className="text-lg font-semibold tracking-tight text-gradient-brand">JITCode</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <a href="#features">Explore</a>
          </Button>
          <Button asChild variant="hero" size="sm">
            <a href="#cta">Request access</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
