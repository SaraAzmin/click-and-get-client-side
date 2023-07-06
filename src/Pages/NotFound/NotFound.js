import React from "react";
import Error_img from "../../assets/error.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="bg-white dark:bg-gray-900 lg:px-20 py-10">
      <div class="container min-h-screen px-6 py-12 mx-auto lg:flex items-center justify-center">
        <div class="wf-ull">
          <p class="text-xl font-medium text-blue-800 dark:text-blue-400">
            404 error
          </p>
          <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.
          </p>

          <div class="flex items-center justify-center mt-6 gap-x-3">
            <Link type="button" to='/' class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-blue-800 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-slate-100 hover:border-blue-800 hover:text-blue-800 dark:text-black dark:border-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back to homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
