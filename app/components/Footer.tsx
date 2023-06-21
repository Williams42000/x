'use client';

import Container from './Container';
import Logo from './navbar/Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 via-cyan-200 to-sky-500 w-full  items-start  shadow dark:bg-gray-900  mt-10">
      <Container>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
              <Logo />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
              <li>
                <a href="/history" className="mr-4 hover:underline md:mr-6">Notre histoire</a>
              </li>
              <li>
                <a href="/blog" className="mr-4 hover:underline md:mr-6">Blog</a>
              </li>
              <li>
                <a href="/faq" className="mr-4 hover:underline md:mr-6">FAQ</a>
              </li>
              <li>
                <a href="/clientsp" className="mr-4 hover:underline md:mr-6">Nos Clients</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm sm:text-center text-black">&copy; 2023 <a href="#" className="hover:underline">Casas™</a>. All Rights Reserved.</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
