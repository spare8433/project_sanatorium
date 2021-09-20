import React, { useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';
import './search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import qs from "qs";

const Search = ({location}) => {
    
  let [search_text,setSearch_text] = useState('');  
  let [type,setType] = useState('');  
  let [city,setCity] = useState('');
  let [district,setDistrict] = useState(''); 
  
  let query =qs.parse(location.search, {ignoreQueryPrefix: true});

  useEffect(()=> {
    if(query.hasOwnProperty('search_text')){
      setSearch_text(query.search_text);
    }
    if(query.hasOwnProperty('type')){
      setType(query.type);
    }
    if(query.hasOwnProperty('city')){
      setCity(query.city);
    }
  }, [])

  //apu 호출부분 
  useEffect(() => { const apiCall = async () => {
    let _city=query.city;
    console.log(query.city);
    console.log(query);
    let API_url = "";
    
    let API_info ={
      KEY:'96cea9b672ae4c3a91008987ac395ed0',
      Type:'json'      
    }      
    //console.log(type(API_info));

    if(query.hasOwnProperty('type')){
      switch(query.type){
        case '요양병원': 
          API_url = `https://openapi.gg.go.kr/Hosptlevaltnrcper?KEY=${API_info.KEY}&Type=${API_info.Type}&SIGUN_NM=${_city}`;          
          break;
        case '요양원': 
          API_url = `https://openapi.gg.go.kr/HtygdWelfaclt?KEY=${API_info.KEY}&Type=${API_info.Type}&SIGUN_NM=${_city}`;          
          break;
        case '방문요양':
        case '방문목욕':
        case '주야간보호': 
          API_url = `https://openapi.gg.go.kr/OldpsnMedcareWelfac?KEY=${API_info.KEY}&Type=${API_info.Type}&SIGUN_NM=${_city}`;           
          break;
        default : 
          break;           
      }      
    }
    console.log(API_url);
    const response = await axios.get(`${API_url}`).then(function (response) {
      // response
      console.log(response.data);   
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행       
    });
    
  }; 
    apiCall(); 
  }, [])
  
  return (
    <div>
      {search_text}
      {city}
      {type}
    </div>
  );
};

export default Search;