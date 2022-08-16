import axios from "axios";
import React, { useEffect, useState } from "react";
import Inputs from "./Inputs";

const Home = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://countriesnow.space/api/v0.1/countries/info?returns=unicode,currency,flag,dialCode"
      )
      .then((response) => {
        console.log(response.data.data);
        setInfo(response.data.data);
      });
  }, []);
  return (
    
    <div className="cards " >
      <Inputs />
      <div className="row ">
      {info.map((item) => {
        return (
          <div className="col-md-3">
          <div className="card mb-5">
            
            <img className="image-fluid" src={item.flag} alt={item.name}  height="100%"/>
            <h1>{item.name}</h1>
            <h2>{item.currency}</h2>
            <h3>{item.dialCode}</h3>
          </div>
          </div>
          
        );
      })}
        

        
      </div>
  
      
    </div>
  );
};

export default Home;
