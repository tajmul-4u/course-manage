import React from 'react';
import Container from './Container';

const Toggles_btn = ({ toggleStatus, setToggleStatus }) => {
     const btns=['All','Pending','Submitted','Reviewed']
  return (
    <div>
      <Container>
        <div className="text-right mb-[50px]">
            {
                btns.map((btn,ind)=>{
                    return (
                      <button
                      key={ind}
                        onClick={() => setToggleStatus(btn)}
                        className={`${ind==0 && 'rounded-l-md'}
                            ${ind==btns.length-1 && 'rounded-r-md'} toggle-btn ${
                          toggleStatus == btn && "bg-purple-500! text-white!"
                        }`}
                      >
                        {btn}
                      </button>
                    );
                })
            }
         
          {/* <button
            onClick={() => setToggleStatus("Pending")}
            className={`rounded-l-md toggle-btn ${
              toggleStatus == "Pending" && "bg-purple-500! text-white!"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setToggleStatus("Submitted")}
            className={`rounded-l-md toggle-btn ${
              toggleStatus == "Submitted" && "bg-purple-500! text-white!"
            }`}
          >
            Submitted
          </button>
          <button
            onClick={() => setToggleStatus("Reviewed")}
            className={`toggle-btn rounded-r-md ${
              toggleStatus == "Reviewed" && "bg-purple-500! text-white!"
            }`}
          >
            Reviewed
          </button> */}
        </div>
      </Container>
    </div>
  );
};

export default Toggles_btn;