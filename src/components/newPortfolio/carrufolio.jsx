import { useEffect, useState } from "react";

export default function Carru({ img }) {

  const [current,setCurrect] = useState();
  
  useEffect(()=>{
    setCurrect(img[0]);
  },[img])

  const handleCLick = ( e) =>{
    const newValue = parseInt(e.target.name)
    setCurrect(img[newValue])

  }

  return (

    <div className=" flex flex-col ">
      <div className="carousel w-full">
        <div id={img[0].split(".jpg")[0]} className="carousel-item w-full">
          <img
            src={current}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-center w-full py-2 mb-4 gap-2 ">
        {
          img.map((item,i) => {
            
            return(
              <button name={i.toString()} className="btn btn-xs btn-outline btn-primary" onClick={(e)=> handleCLick(e)} >
                {i+1}
              </button>
            )
          })
        }
        
      </div>
      
    </div>
  );
};