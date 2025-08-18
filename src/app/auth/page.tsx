"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X, Mail, Phone, Eye, EyeOff, ChevronDown, Search } from "lucide-react";
import Link from "next/link";

const countries = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
  { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
  { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria" },
  { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium" },
  { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark" },
  { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway" },
  { code: "+358", country: "FI", flag: "🇫🇮", name: "Finland" },
  { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
  { code: "+30", country: "GR", flag: "🇬🇷", name: "Greece" },
  { code: "+48", country: "PL", flag: "🇵🇱", name: "Poland" },
  { code: "+420", country: "CZ", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+36", country: "HU", flag: "🇭🇺", name: "Hungary" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
  { code: "+51", country: "PE", flag: "🇵🇪", name: "Peru" },
  { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
  { code: "+20", country: "EG", flag: "🇪🇬", name: "Egypt" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+380", country: "UA", flag: "🇺🇦", name: "Ukraine" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
  { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
  { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietnam" },
  { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
  { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia" },
];

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    setCountrySearch("");
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.code.includes(countrySearch) ||
      country.country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.email === "test" && formData.password === "test") {
      router.push("/dashboard");
    } else {
      alert('Use "test" for both username and password');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="p-6 space-y-6">
            <div className="flex bg-white/5 rounded-lg p-1 backdrop-blur-sm">
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  isSignUp
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                Sign up
              </button>
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  !isSignUp
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                Sign in
              </button>

              <Link href="/">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-semibold text-white">
              {isSignUp ? "Create an account" : "Welcome back"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white/30 focus:ring-white/20"
                  />
                  <Input
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white/30 focus:ring-white/20"
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white/30 focus:ring-white/20"
                  required
                />
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="pr-10 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white/30 focus:ring-white/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 font-medium py-3"
              >
                {isSignUp ? "Create an account" : "Sign in"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/60">
                  {isSignUp ? "OR SIGN UP WITH" : "OR SIGN IN WITH"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.81.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple
              </Button>
            </div>

            {isSignUp && (
              <p className="text-xs text-white/60 text-center">
                By creating an account, you agree to our{" "}
                <a
                  href="#"
                  className="text-white/80 hover:text-white underline"
                >
                  Terms & Service
                </a>
              </p>
            )}
          </div>
        </Card>
      </div>

      {showCountryDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowCountryDropdown(false);
            setCountrySearch("");
          }}
        />
      )}
    </div>
  );
}
