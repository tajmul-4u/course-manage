import React, { use } from "react";
import { useState } from "react";
import CountBox from "./CountBox";
import Toggles_btn from "./Toggles_btn";
import Container from "./Container";
import Card from "./Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  // console.log(toggleStatus);
  const initialData = use(fetchPromise);
  // console.log(initialData);
   const [data, setData] = useState(initialData);
  //  console.log(data);

  const filteredData = toggleStatus=='All'?data: data.filter((element) => element.status == toggleStatus);
  // console.log(toggleStatus, data);
  console.log(toggleStatus,filteredData)
  return (
    <div>
       {/* CountBox */}
      <CountBox data={data}></CountBox>
      {/* Toggle button */}
      <Toggles_btn
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></Toggles_btn>
      {/* Cards Container */}
      <Container>
        <div className="grid grid-cols-3 gap-[12px]">
          {filteredData.map((issue, ind) => {
            // console.log(issue);
            return (
              // Card
              <Card key={ind} issue={issue} data={data} setData={setData}></Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;
