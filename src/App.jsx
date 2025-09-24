import { useState } from "react";
import "./App.css";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {

  const[toggleStatus,setToggleStatus]=useState('All')
  console.log(toggleStatus)
  return (
    <>
      {/* Navgigation Bar */}
      <Navbar></Navbar>
      <Container>
        <div className="grid grid-cols-3 gap-[20px] my-[50px]">
          <div className="rounded-md p-7 text-white h-[250] bg-gray-600 flex items-center flex-col justify-center">
            <h2 className="font-bold text-[35px]">Pending</h2>
            <p className="font-semibold text-[26px]">0</p>
          </div>
          <div className="rounded-md p-7 text-white h-[250] bg-purple-600 flex flex-col items-center justify-center">
            <h2 className="font-bold text-[35px]">Submitted</h2>
            <p className="font-semibold text-[26px]">0</p>
          </div>
          <div className="rounded-md p-7 text-white h-[250] bg-teal-600 flex flex-col items-center justify-center">
            <h2 className="font-bold text-[35px]">Reviewed</h2>
            <p className="font-semibold text-[26px]">0</p>
          </div>
        </div>
      </Container>
      {/* Toggle button */}
      <Container>
        <div className="text-right mb-[50px]">
          <button onClick={()=>setToggleStatus('All')} className="rounded-l-md toggle-btn">
            All
          </button>
          <button onClick={()=>setToggleStatus('Pending')} className="toggle-btn">
            Pending
          </button>
          <button onClick={()=>setToggleStatus('Submitted')} className="toggle-btn">
            Submitted
          </button>
          <button onClick={()=>setToggleStatus('Reviewed')} className="rounded-r-md toggle-btn">
            Reviewed
          </button>
        </div>
      </Container>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
}

export default App;
