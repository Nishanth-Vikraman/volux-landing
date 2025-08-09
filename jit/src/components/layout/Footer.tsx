const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="container mx-auto px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} JITCode. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#cta" className="hover:text-foreground transition-colors">Request access</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
