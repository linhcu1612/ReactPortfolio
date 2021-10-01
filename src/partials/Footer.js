/** @format */

import React from "react";

function Footer() {
  return (
    <div className='text-center w-full mt-16'>
      <p className='text-gray-600 mb-4'>
        Made with
        <span role='img' className='mx-2' aria-label='heart'>
          💙
        </span>
        by
        <a
          className='text-blue-500 hover:underline ml-2'
          href='https://github.com/BraydenTW'>
          Linh Cu
        </a>
      </p>
    </div>
  );
}

export default Footer;
