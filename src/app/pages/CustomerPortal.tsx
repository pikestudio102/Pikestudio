import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Lock, User } from "lucide-react";
import iconImage from "figma:asset/7d08f8e90c7d98fd67a7ca36e854f9f4c97bd7c1.png";

export function CustomerPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to Square in a real implementation
    console.log("Login attempt:", { email });
  };

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-border p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
              
            </div>
            <h1 className="text-3xl mb-2">Customer Portal</h1>
            <p className="text-foreground/60">
              Access your projects, invoices, and files
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              <Lock className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </form>

          {/* Square Integration Note */}
          <div className="mt-8 p-4 rounded-lg bg-muted">
            <p className="text-sm text-foreground/60 text-center">
              <strong>Note:</strong> This portal will be integrated with Square for payment processing
              and invoice management. Contact us if you need assistance accessing your account.
            </p>
          </div>

          {/* Support Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-foreground/60">
              Need help?{" "}
              <a href="mailto:hello@pikestudio.com" className="text-primary hover:underline">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}