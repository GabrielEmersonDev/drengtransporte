import React from "react";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col items-start p-4">
      <h2 className="text-2xl font-bold mb-6">[Company Name]</h2>
      <ul className="space-y-4">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
        <li><a href="#services" className="hover:text-gray-400">Services</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p>&copy; 2024 [Company Name]. All Rights Reserved.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to [Company Name]</h1>
        <p className="text-lg mb-8">
          At [Company Name], we provide top-quality services to help your business grow.
          Our solutions are designed with innovation and efficiency in mind.
        </p>

        {/* Section: About */}
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p>
            We are a company committed to delivering exceptional services and solutions to our clients,
            ensuring their success in a competitive market.
          </p>
        </section>

        {/* Section: Services */}
        <section id="services" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc pl-5">
            <li>Consulting Services</li>
            <li>Product Development</li>
            <li>Marketing Solutions</li>
          </ul>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            Get in touch with us at: <a href="mailto:contact@company.com" className="text-blue-500">contact@company.com</a>
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
