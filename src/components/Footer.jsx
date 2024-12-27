import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kabu Village. All Rights Reserved.</p>
        <p className="mt-2">
          <a
            href="#"
            className="hover:text-green-300 transition-colors"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="hover:text-green-300 transition-colors"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
