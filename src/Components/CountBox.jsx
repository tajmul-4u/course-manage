import React from "react";
import Container from "./Container";

const CountBox = ({ data }) => {
   const pendingData = data.filter(
     (element) => element.status == "Pending"
   );
   const submittedData = data.filter(
     (element) => element.status == "Submitted"
   );

   const reviewedData = data.filter(
     (element) => element.status == "Reviewed"
   );
  //  console.log({ pendingData, submittedData, reviewedData });
  return (
    <div>
      {/* Box */}
      <Container>
        <div className="grid grid-cols-3 gap-[20px] my-[50px]">
          <div className="rounded-md p-7 text-white h-[250] bg-gray-600 flex items-center flex-col justify-center">
            <h2 className="font-bold text-[35px]">Pending</h2>
            <p className="font-semibold text-[26px]">{pendingData.length}</p>
          </div>
          <div className="rounded-md p-7 text-white h-[250] bg-purple-600 flex flex-col items-center justify-center">
            <h2 className="font-bold text-[35px]">Submitted</h2>
            <p className="font-semibold text-[26px]">{submittedData.length}</p>
          </div>
          <div className="rounded-md p-7 text-white h-[250] bg-teal-600 flex flex-col items-center justify-center">
            <h2 className="font-bold text-[35px]">Reviewed</h2>
            <p className="font-semibold text-[26px]">{reviewedData.length}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountBox;
