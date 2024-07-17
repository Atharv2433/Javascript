import React, { useState } from "react";



const biodata = [
    {
      id : 0,
      name : "ABC",
      age: 23
    },
    {
      id : 1,
      name : "XYZ",
      age: 23
    },
    {
      id : 2,
      name : "PQR",
      age: 23
    }
  ]    
  
const Usestatearr = () =>{
    const [data,setdata] = useState(biodata);

    const remove_rec = () =>{
        setdata([]);
    }
    const remove_ele = (id) => {
      const myarray = data.filter((currele)=> {
        return currele.id !== id;
      })
      setdata(myarray);
      alert("Removed")
    }

    return (
        <div>
           {
        data.map((currData) => {
          return (
            <div key={currData.id}>
              <h1>ID = {currData.id + 1} NAME = {currData.name} & AGE : {currData.age}</h1>
              <button className="btn" onClick={()=> {remove_ele(currData.id)}}>CLEAR</button>
            </div>
          )
        })
      }
            <button className="submitbtn" onClick={remove_rec}>CLEAR ALL</button>
        </div>
    )

    }


export default Usestatearr;