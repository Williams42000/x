"use client";

import React, { useEffect } from "react";
import { Collapse, Ripple, initTE } from "tw-elements";

interface ButtonAProps {
  detailsText: string;
  contactText: string;
}

const ButtonA: React.FC<ButtonAProps> = ({ detailsText, contactText }) => {
  useEffect(() => {
    initTE({ Collapse, Ripple });
  }, []);

  return (
    <>
      <button
        className="flex flex-wrap items-center justify-between mt-6 -m-2 rounded bg-primary px-6 pb-4 pt-2.5 mb-4 ml-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        type="button"
        data-te-collapse-init
        data-te-ripple-init
        data-te-ripple-color="light"
        data-te-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {detailsText}
        <div className='w-auto p-2 pl-[10px]'>
          <svg
            width={9}
            height={14}
            viewBox='0 0 9 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.5 1.16683L7.33333 7.00016L1.5 12.8335'
              stroke='#171A1F'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </button>
      <div
        className="!visible hidden"
        id="collapseExample"
        data-te-collapse-item
      >
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50">
          {contactText}
        </div>
      </div>
    </>
  );
};

export default ButtonA;
