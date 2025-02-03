"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(""); // Track which dropdown is open

  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.svg" alt="Topgrades Abroad" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-black font-dmSans">
          {/* Study Abroad Dropdown */}
          <div className="relative group">
            <button
              className="hover:text-gray-800"
              onClick={() => setDropdownOpen(dropdownOpen === "study" ? "" : "study")}
            >
              Study Abroad
            </button>
            {dropdownOpen === "study" && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg">
                {["USA", "United Kingdom", "Australia", "Canada", "New Zealand", "Germany", "France", "Dubai"].map((country) => (
                  <Link key={country} href={`/study-abroad/${country.toLowerCase()}`} className="block px-4 py-2 hover:bg-gray-100">
                    {country}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Courses Dropdown */}
          <div className="relative group">
            <button
              className="hover:text-gray-800"
              onClick={() => setDropdownOpen(dropdownOpen === "courses" ? "" : "courses")}
            >
              Courses
            </button>
            {dropdownOpen === "courses" && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-md rounded-lg">
                {[
                  { name: "Management", sub: ["Finance", "Accounting", "HR", "Marketing", "International Business", "Supply Chain"] },
                  { name: "Computer Science", sub: ["AI", "Data Science", "Software Engg", "Cybersecurity", "IT Management"] },
                  { name: "Healthcare", sub: ["Medicine", "Nursing", "Pharmacy", "Public Health", "Biotechnology"] },
                  { name: "Engineering", sub: ["Mechanical", "Civil", "Electrical", "AI & Robotics", "Environmental Engg"] },
                  { name: "Beauty & Fashion", sub: ["Fashion Design", "Cosmetology", "Interior Design", "Luxury Brand Mgmt"] },
                ].map((category) => (
                  <div key={category.name} className="border-b">
                    <p className="px-4 py-2 font-semibold">{category.name}</p>
                    {category.sub.map((course) => (
                      <Link key={course} href={`/courses/${course.toLowerCase()}`} className="block px-6 py-2 hover:bg-gray-100">
                        {course}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other Menu Items */}
          <Link href="/services" className="hover:text-gray-800">
            Our Expertise
          </Link>
          <Link href="/blog" className="hover:text-gray-800">
            Blog
          </Link>
          <Link href="/resources" className="hover:text-gray-800">
            Resources
          </Link>
        </nav>

        {/* Start Your Journey Button */}
        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-lg" onClick={() => alert("Open Form Popup!")}>
          Start Your Journey
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <Link href="/study-abroad" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            Study Abroad
          </Link>
          <Link href="/courses" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            Courses
          </Link>
          <Link href="/services" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            Our Expertise
          </Link>
          <Link href="/blog" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/resources" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            Resources
          </Link>
          <button className="bg-black text-white px-5 py-2 rounded-lg w-full mt-4" onClick={() => alert("Open Form Popup!")}>
            Start Your Journey
          </button>
        </div>
      )}
    </header>
  );
}
