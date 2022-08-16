import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Inputs = () => {
    const[loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [searchTitle,setSearchTitle]=useState("");
    useEffect(()=>{
        const loadPosts = async () =>{
            setLoading(true);
            const response = await axios.get("https://countriesnow.space/api/v0.1/countries/info?returns=unicode,currency,flag,dialCode");
            setPosts(response.data);
            setLoading(false);
            
        }
        loadPosts();
    }, []);
  return (
    <div>
       <div>
      <div class="input">
        <div>
          <input
            type="search"
            placeholder="Search for a country"
            class="search"
            onkeyup="search(event)" 
            onChange={(e)=>setSearchTitle(e.target.value)}

          />
          {loading ? (
            <h4>Loading...</h4>
          ):(
            posts
            .filter((value)=>{
                if (searchTitle ===""){
                    return value;
                }else if(
                    value.title.tolowerCase().includes(searchTitle.tolowerCase())
                ){
                    return value;
                }
            })
            .map((item)=><h5 key={item.data}>{item.data.data}</h5>)
          )}
          
          <input type="search" placeholder="Search for a filter" class="end" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Inputs
