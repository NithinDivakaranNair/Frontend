import React from 'react';

const Header = () => {
  return (
    <header className="bg-white ">
      <div className="flex justify-around items-center max-w-7xl mx-auto">
   
   <img 
       src='/freepik__candid-image-photography-natural-textures-highly-r__38442 1 (1).svg' 
            alt="Company Logo"
            className="h-22 w-auto" 
          />
       
        
      <div className='flex space-x-10'>
      <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-raleway text-navy hover:text-red-600 font-normal		 transition-colors">About Us</a>
          <a href="#" className="font-raleway text-navy hover:text-red-600 font-normal		 transition-colors">Features</a>
          <a href="#" className=" font-raleway text-navy hover:text-red-600 font-normal		 transition-colors">More Option</a>
          <a href="#" className=" font-raleway text-navy hover:text-red-600 font-normal	 transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
        <button className="px-8 py-2 text-red-600 border border-red-600 font-normal	 rounded-md hover:text-white hover:bg-red-600 transition-colors">
       Log in
       </button>

          <button className="px-8 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-normal		">
            Sign Up
          </button>
        </div>
      </div>
        

      </div>
    </header>
  );
};

export default Header;