
import { Suspense } from "react";
import "./App.css";

import Footer from "./Components/Footer";
import IssuesManagement from "./Components/IssuesManagement";
import Navbar from "./Components/Navbar";

const fetchIssues=async()=>{
  const result = await fetch("/data.json");
  return result.json()
}
function App() {
const fetchPromise=fetchIssues();
  return (
    <>
      {/* Navgigation Bar */}
      <Navbar></Navbar>
      <Suspense fallback={<p>Waiting the response</p>}>
        {/* IssuesManagement */}
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
}

export default App;
