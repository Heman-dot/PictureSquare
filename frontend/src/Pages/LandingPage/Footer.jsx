import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-8 pb-6 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Column 1 */}
          <div className="grid grid-cols-1 gap-4 xl:col-span-1">
            <div>
              <p className="text-white font-bold text-xl">Your Company</p>
              <p className="mt-2 text-gray-400">123 Street Name, City, Country</p>
              <p className="mt-2 text-gray-400">info@yourcompany.com</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="mt-12 grid grid-cols-1 gap-4 xl:col-span-2 xl:grid-cols-2">
            <div>
              <p className="text-white font-bold">About</p>
              <a href="#" className="mt-2 text-gray-400 hover:text-white">About Us</a>
              <a href="#" className="mt-2 text-gray-400 hover:text-white">Our Team</a>
              <a href="#" className="mt-2 text-gray-400 hover:text-white">Careers</a>
            </div>
            <div>
              <p className="text-white font-bold">Services</p>
              <a href="#" className="mt-2 text-gray-400 hover:text-white">Web Design</a>
              <a href="#" className="mt-2 text-gray-400 hover:text-white">Graphic Design</a>
              <a href="#" className="mt-2 text-gray-400 hover:text-white">SEO</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 xl:flex xl:items-center xl:justify-between">
          <p className="text-gray-400">© 2024 Your Company. All rights reserved.</p>
          <div className="mt-4 xl:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17 3h-2c-1.102 0-2 .898-2 2v2H9v3h4v9h3v-9h3l1-3h-4V5c0-.552-.448-1-1-1z" />
              </svg>
            </a>
            <a href="#" className="ml-4 text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 5.328c-.75.332-1.555.555-2.405.655a4.07 4.07 0 0 0 1.793-2.244 8.083 8.083 0 0 1-2.554.978A4.052 4.052 0 0 0 13.965 4c-2.203 0-3.994 1.792-3.994 3.994 0 .312.036.618.105.915C7.29 8.803 4.036 7.066 1.64 4.14c-.336.574-.527 1.24-.527 1.943 0 1.382.705 2.603 1.775 3.324a4.036 4.036 0 0 1-1.816-.505l-.001.051c0 1.929 1.373 3.54 3.192 3.902a4.047 4.047 0 0 1-1.812.068c.508 1.551 1.984 2.683 3.734 2.715a8.138 8.138 0 0 1-5.033 1.725c-.328 0-.655-.019-.977-.058a11.49 11.49 0 0 0 6.13 1.785c7.482 0 11.582-6.204 11.582-11.583 0-.176-.004-.348-.012-.52a8.279 8.279 0 0 0 2.032-2.105" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
