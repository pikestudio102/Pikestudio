import { Outlet, Link, useLocation } from "react-router";
import logo from "figma:asset/500a862ae867724429e412dfd1966b7fecf1d05c.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/services", label: "Services" },
    { path: "/start-project", label: "Start a Project" },
    { path: "/customer-portal", label: "Customer Portal" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-white dark:bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Pike Studio" className="h-8 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, -1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/customer-portal"
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Customer Portal
              </Link>
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white dark:bg-background mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="Pike Studio" className="h-8 w-auto mb-4" />
              <p className="text-foreground/60">
                Creative studio specializing in marketing, branding, design, and video production.
              </p>
            </div>
            <div>
              <h3 className="mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/projects" className="text-foreground/60 hover:text-primary transition-colors">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/start-project" className="text-foreground/60 hover:text-primary transition-colors">
                    Start a Project
                  </Link>
                </li>
                <li>
                  <Link to="/customer-portal" className="text-foreground/60 hover:text-primary transition-colors">
                    Customer Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Contact</h3>
              <p className="text-foreground/60">
                office@pikestudio.co
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-foreground/60">
            <p>&copy; {new Date().getFullYear()} Pike Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}