import React from 'react';
import Container from './Container';

const Navbar = () => {
    return (
      <div className="bg-purple-300 shadow-md border-b-[0.5px] border-gray-300">
        <Container>
          <nav className="px-8 py-4 flex justify-between items-center">
            <h1 className="md:text-xl text-sm font-bold">PH University</h1>
            <div className="md:flex hidden items-center gap-6">
              <a href="#" className="text-gray-600">
                Home
              </a>

              <a href="#" className="text-gray-600">
                Faculty
              </a>

              <a href="#" className="text-gray-600">
                Students
              </a>

              <a href="#" className="text-gray-600">
                Contacts
              </a>
              <button className='btn bg-pink-600 text-black rounded-xl p-2'>+New Assaignment</button>
            </div>
          </nav>
        </Container>
      </div>
    );
};

export default Navbar;