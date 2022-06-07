import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = provider => {
  const[articles,setArticles]=useState([]);
  const[search,setSearch]=useState("India");
  const[loading,setLoading]=useState([]);
  const[filter,setFilter]=useState(false);
  const[criteria,setCriteria]=useState("");
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://cors-layer-library.herokuapp.com/khabar-backend.herokuapp.com/MostRecentArticles`,
      Headers: {
        "Content-Type": "application/json"
      }
    };

      
      axios.request(options).then(function (response) {
            console.log(response.data);
            setArticles(response.data);
            setLoading(response.data);
      }).catch(function (error) {
          console.error(error);
      });
    }, []);
    
  return (
    <DataContext.Provider value={{articles,setSearch,setArticles,loading,filter,setFilter,criteria,setCriteria}}>
      {provider.children}
    </DataContext.Provider>
  );
}


