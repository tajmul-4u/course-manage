import React from 'react';
const handleClick=()=>{
    console.log('card clicked')
}
const Card = ({issue,data,setData}) => {

    console.log(issue)
     
    return (
      <div>
        <div onClick={handleClick} className="shadow-md rounded-md cursor-pointer bg-slate-100 p-4">
            
          <div>
            <img
              src={issue.userImg}
              alt={issue.requestedBy}
              title={issue.requestedBy}
              className="h-[80px] w-[80] rounded-full"
            />
            <h2 className="font-semibold text-lg">{issue.requestedBy}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold text-[26px]">{issue.subject}</h2>
            <div>
              <span
                className={`font-semibold px-1 py-2 shadow rounded-md mr-2 ${
                  issue.priority == "Hight"
                    ? "text-red-500 bg-red-100"
                    : issue.priority == "Medium"
                    ? "text-yellow-500 bg-yellow-100"
                    : "text-green-500 bg-green-100"
                }`}
              >
                {issue.priority}
              </span>
              <span
                className={`font-semibold px-1 py-2 shadow rounded-md mr-2 ${
                  issue.status == "Submitted"
                    ? "text-red-500 bg-red-100"
                    : issue.status == "Pending"
                    ? "text-yellow-500 bg-yellow-100"
                    : "text-green-500 bg-green-100"
                }`}
              >
                {issue.status}
              </span>
            </div>
          </div>
          <p className="text-[17px]">{issue.description}</p>
        </div>
      </div>
    );
};

export default Card;