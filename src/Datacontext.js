import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = provider => {
  const[articles,setArticles]=useState([]);
  const[search,setSearch]=useState("India");
  const[loading,setLoading]=useState([]);
  const[filter,setFilter]=useState(false);
  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: "adorable", lang: 'en'},
        headers: {
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
          'X-RapidAPI-Key': 'db123ddc63msh47176205146b614p158fe8jsn44902bef6a83'
        }
      };
      
      axios.request(options).then(function (response) {
            setArticles(response.data.articles);
            setLoading(response.data.articles);
      }).catch(function (error) {
          console.error(error);
      });
    }, []);
    
  return (
    <DataContext.Provider value={{articles,setSearch,setArticles,loading,filter,setFilter}}>
      {provider.children}
    </DataContext.Provider>
  );
}


