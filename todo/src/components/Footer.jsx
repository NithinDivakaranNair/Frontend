import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-10 px-35">
      
      <div className="grid grid-cols-1 md:grid-cols-4  container mx-auto">
        
        <div className="flex flex-col gap-3  ">
          <div>
          <img src="/freepik__candid-image-photography-natural-textures-highly-r__38442 1 (1).svg" alt="icon" />
          <p className="text-black text-xs font-medium	">
            Subscribe to our newsletter for the latest features and updates delivered to you.
          </p>
          </div>
          <div className="flex gap-3 ">
            <input
              type="text"
              placeholder="Your email here"
              className="border  px-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 text-white px-10 py-2 rounded-lg hover:bg-red-600 ml-2">
              Join
            </button>
          </div>
          <p className="text-xs text-gray-500">
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </p>
        </div>

      
        <div className="pl-38">
          <h1 className="text-lg font-semibold mb-3">Useful Links</h1>
          <ul className="space-y-2 text-gray-600">
            <li>Home Page</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog Posts</li>
            <li>FAQs</li>
          </ul>
        </div>

      
        <div className="pl-30">
          <h1 className="text-lg font-semibold mb-3">Resources</h1>
          <ul className="space-y-2 text-gray-600">
            <li>Help Center</li>
            <li>User Guide</li>
            <li>Community Forum</li>
            <li>Feedback</li>
            <li>Support</li>
          </ul>
        </div>

       
        <div className="pl-30">
          <h1 className="text-lg font-semibold mb-3">Follow Us</h1>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/Vector.svg" alt="Facebook" className="w-5" />
              <h1>Facebook</h1>
            </div>
            <div className="flex items-center gap-2">
              <img src="/insta.svg" alt="Instagram" className="w-5" />
              <h1>Instagram</h1>
            </div>
            <div className="flex items-center gap-2">
              <img src="/x.svg" alt="X" className="w-5" />
              <h1>X</h1>
            </div>
            <div className="flex items-center gap-2">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5" />
              <h1>LinkedIn</h1>
            </div>
            <div className="flex items-center gap-2">
              <img src="/yutb.svg" alt="YouTube" className="w-5" />
              <h1>YouTube</h1>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2024 Osumare. All rights reserved.</p>
        <div className="flex gap-4">
          <h1 className="cursor-pointer hover:text-red-500">Privacy Policy</h1>
          <h1 className="cursor-pointer hover:text-red-500">Terms of Service</h1>
          <h1 className="cursor-pointer hover:text-red-500">Cookie Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
