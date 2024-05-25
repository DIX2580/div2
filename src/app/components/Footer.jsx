import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 py-4">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-wrap justify-between -mx-4">
          
          <div className="px-4 my-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
            <div>
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-yellow-400 hover:text-yellow-400 text-white font-Poppins font-bold">Recent Episodes</h2>
            </div>
            <ul className="leading-8">
              <li><a href="#" className="hover:text-yellow-400 text-white font-Poppins font-bold hover:underline">Recent Episode 1</a></li>
              <li><a href="#" className="hover:text-yellow-400 text-white font-Poppins font-bold hover:underline">Recent Episode 2</a></li>
              <li><a href="#" className="hover:text-yellow-400 text-white font-Poppins font-bold hover:underline">Recent Episode 3</a></li>
              <li><a href="#" className="hover:text-yellow-400 text-white font-Poppins font-bold hover:underline">Recent Episode 4</a></li>
            </ul>
          </div>

          <div className="px-4 my-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
            <div>
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-yellow-400 hover:text-yellow-400 text-white font-Poppins font-bold">Pages</h2>
            </div>
            <ul className="leading-8">
              <li><a href="#" className="hover:text-yellow-400 text-white font-Poppins font-bold hover:underline">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 text-white font-Poppins font-bold hover:underline">Episodes</a></li>
              <li><a href="#" className="hover:text-yellow-400 text-white font-Poppins font-bold hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:text-yellow-400 text-white font-Poppins font-bold hover:underline">Subscribe</a></li>
            </ul>
          </div>

          <div className="px-4 my-4 w-full md:w-1/2 lg:w-1/4">
            <div>
              <h2 className="text-2xl pb-4  mb-4 border-b-4 border-yellow-400 hover:text-yellow-400 text-white font-Poppins font-bold">Follow our Podcast</h2>
            </div>
            <div className="flex justify-start md:justify-around space-x-4">
              <a href="#" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube" className="fill-current text-gray-400 hover:text-yellow-400">
                  <g fillRule="evenodd" clipRule="evenodd">
                    <path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path>
                    <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
                  </g>
                </svg>
              </a>
              <a href="#" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" id="instagram" className="fill-current text-gray-400 hover:text-yellow-400">
                  <defs>
                    <linearGradient id="a" x1="-1.84" x2="32.16" y1="30.47" y2="-3.03" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#fed576"></stop>
                      <stop offset=".26" stopColor="#f47133"></stop>
                      <stop offset=".61" stopColor="#bc3081"></stop>
                      <stop offset="1" stopColor="#4c63d2"></stop>
                    </linearGradient>
                  </defs>
                  <g>
                    <g>
                      <rect width="28.87" height="28.87" fill="url(#a)" rx="6.48" ry="6.48"></rect>
                      <g>
                        <path fill="#fff" d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"></path>
                        <path fill="#fff" d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"></path>
                        <path fill="#fff" d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <a href="#" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" id="spotify" className="fill-current text-gray-400 hover:text-yellow-400">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#00DA5A" transform="translate(-200 -460)">
                      <path d="M238.16 481.36c-7.68-4.56-20.52-5.04-27.84-2.76-1.2.36-2.4-.36-2.76-1.44-.36-1.2.36-2.4 1.44-2.76 8.52-2.52 22.56-2.04 31.44 3.24 1.08.6 1.44 2.04.84 3.12-.6.84-2.04 1.2-3.12.6m-.24 6.72c-.6.84-1.68 1.2-2.52.6-6.48-3.96-16.32-5.16-23.88-2.76-.96.24-2.04-.24-2.28-1.2-.24-.96.24-2.04 1.2-2.28 8.76-2.64 19.56-1.32 27 3.24.72.36 1.08 1.56.48 2.4m-2.88 6.6c-.48.72-1.32.96-2.04.48-5.64-3.48-12.72-4.2-21.12-2.28-.84.24-1.56-.36-1.8-1.08-.24-.84.36-1.56 1.08-1.8 9.12-2.04 17.04-1.2 23.28 2.64.84.36.96 1.32.6 2.04M224 460c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.68-24-24-24"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="font-Poppins episode text-white text-center py-4">
        <p className="text-opacity-75 font-bold hover:underline">Mishka Productions Pvt. Ltd. © 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
