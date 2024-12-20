"use client";

import { Button } from "@/components/ui/button";
import { Navbar, NavbarBrand, NavbarContent } from "@/components/ui/navbar";
import "@fontsource/major-mono-display";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(to bottom right, #4b5563, #111827)",
      }}
    >
      {/* Navbar */}
{/* Navbar */}
<Navbar className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50">
  <div className="container mx-auto px-6 flex justify-between items-center">
    <NavbarBrand
      className="text-2xl font-bold text-white cursor-pointer"
      style={{ fontFamily: "Major Mono Display, monospace" }}
      onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}
    >
      Kalk
    </NavbarBrand>
    <NavbarContent>
      <Button
        variant="ghost"
        className="text-white hover:text-gray-400"
        onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
      >
        Features
      </Button>
      <Button
        variant="ghost"
        className="text-white hover:text-gray-400"
        onClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })}
      >
        Pricing
      </Button>
      <Button
        variant="ghost"
        className="text-white hover:text-gray-400"
        onClick={() => document.getElementById("getting-started").scrollIntoView({ behavior: "smooth" })}
      >
        Getting Started
      </Button>
      <Button
        variant="default"
        className="bg-white text-black hover:bg-gray-200"
        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
      >
        Contact
      </Button>
    </NavbarContent>
  </div>
</Navbar>

      {/* Hero Section */}
      <section
          id="home"
        className="relative py-24 text-center mt-16 overflow-hidden"
        style={{
          background: "linear-gradient(to bottom right, #4b5563, #111827)",
        }}
      >
        <div className="container mx-auto px-6">
          <h1
            className="text-5xl font-extrabold md:text-7xl mb-6"
            style={{ fontFamily: "Major Mono Display, monospace" }}
          >
            Kalk: Precision in Every Calculation
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Simplify complex tasks with sleek and efficient calculation tools.
          </p>
          <Button className="bg-white text-black hover:bg-gray-300">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16"
        style={{
          background: "linear-gradient(to bottom right, #4b5563, #111827)",
        }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "Major Mono Display, monospace" }}
          >
            Kalk Features
          </h2>
          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <img
                src="/basic.png"
                alt="Perform Basic Calculations"
                className="rounded-lg shadow-lg mb-4 max-w-full"
                style={{ maxWidth: "400px" }}
              />
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Major Mono Display, monospace" }}
              >
                Perform Basic Calculations
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <img
                src="/function.png"
                alt="Function Analysis"
                className="rounded-lg shadow-lg mb-4 max-w-full"
                style={{ maxWidth: "400px" }}
              />
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Major Mono Display, monospace" }}
              >
                Function Analysis
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <img
                src="/engineer.png"
                alt="Engineering Calculations"
                className="rounded-lg shadow-lg mb-4 max-w-full"
                style={{ maxWidth: "600px" }}
              />
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Major Mono Display, monospace" }}
              >
                Engineering Calculations
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-16"
        style={{
          background: "linear-gradient(to bottom right, #4b5563, #111827)",
        }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "Major Mono Display, monospace" }}
          >
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-lg mb-6">For individual users.</p>
              <p className="text-4xl font-bold mb-6">$9.99/mo</p>
              <ul className="text-left space-y-2 mb-6">
                <li>- Perform Basic Calculations</li>
                <li>- Function Analysis</li>
              </ul>
              <Button className="bg-white text-black hover:bg-gray-300">
                Choose Plan
              </Button>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-lg mb-6">For power users.</p>
              <p className="text-4xl font-bold mb-6">$29.99/mo</p>
              <ul className="text-left space-y-2 mb-6">
                <li>- Everything in Basic</li>
                <li>- Engineering Calculations</li>
              </ul>
              <Button className="bg-white text-black hover:bg-gray-300">
                Choose Plan
              </Button>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-lg mb-6">For businesses.</p>
              <p className="text-4xl font-bold mb-6">$99.99/mo</p>
              <ul className="text-left space-y-2 mb-6">
                <li>- Everything in Pro</li>
                <li>- Team Collaboration</li>
              </ul>
              <Button className="bg-white text-black hover:bg-gray-300">
                Choose Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section
        id="getting-started"
        className="py-16"
        style={{
          background: "linear-gradient(to bottom right, #4b5563, #111827)",
        }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "Major Mono Display, monospace" }}
          >
            Getting Started with Kalk
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Clone the Repository:</h3>
              <pre className="bg-gray-700 text-sm rounded p-4 text-gray-300 overflow-x-auto">
                <code>git clone https://github.com/Tully9/Block-2-Project.git</code>
              </pre>
            </div>
            {/* Step 2 */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Run the Application:</h3>
              <pre className="bg-gray-700 text-sm rounded p-4 text-gray-300 overflow-x-auto">
                <code>./run</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6"
        id="contact">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Kalk. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/kalk_is_short_for_kalkulator/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@kalk066?_t=ZG-8sNtK3Ez5zk&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}