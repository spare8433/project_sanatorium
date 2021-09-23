import React, { useState, useEffect} from 'react';
import {useLocation,Link} from "react-router-dom";
import axios from 'axios';
import './search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import qs from "qs";

const Search = ({location}) => {
  let [search_text,setSearch_text] = useState('');  
  let [type,setType] = useState('');  
  let [city,setCity] = useState('');
  let [district,setDistrict] = useState(''); 
  let [search_data,setSearchData] = useState('');
  let [search_item,setSearchItem] = useState('');

  let query =qs.parse(location.search, {ignoreQueryPrefix: true});

  let [start,setStart] = useState(1);
  let [current,setCurrent] = useState(1);
  let [last,setLast] = useState(0);

  let [postedItemCount,setPostedItemCount] = useState(16);  //화면에 뜨는 갯수
  let [pageCount,setPageCount] = useState(5);               //페이지네이션 총 수
  let [pagenationCode,setPagenationCode] = useState('');

    
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
    if ((search_data.length + 1) % postedItemCount > 0){
      setLast((search_data.length + 1) / postedItemCount + 1);
    }else{
      setLast((search_data.length + 1) / postedItemCount);
    }
  }, [])

  //apu 호출부분 
  useEffect(() => { const apiCall = async () => {

    let query =qs.parse(location.search, {ignoreQueryPrefix: true});
    let _city=query.city;
    let API_url = "";
    let json_title = 0;
    setCurrent(query.p);
    let API_info ={
      KEY:'96cea9b672ae4c3a91008987ac395ed0',
      Type:'json'      
    }
    
    
    //console.log(type(API_info));

    if(query.hasOwnProperty('type')){
      switch(query.type){
        case '요양병원': 
          API_url = `https://openapi.gg.go.kr/Hosptlevaltnrcper?KEY=${API_info.KEY}&Type=${API_info.Type}&SIGUNGU_NM=${_city}`;          
          json_title =0;
          break;
        case '요양원': 
          API_url = `https://openapi.gg.go.kr/OldpsnMedcareWelfac?KEY=${API_info.KEY}&Type=${API_info.Type}&SIGUN_NM=${_city}`;                     
          json_title =1;
          break;
        case '방문요양':
        case '방문목욕':
        case '주야간보호': 
          API_url = `https://openapi.gg.go.kr/HtygdWelfaclt?KEY=${API_info.KEY}&Type=${API_info.Type}&SIGUN_NM=${_city}`;          
          json_title =2;
          break;
        default : 
          break;           
      }      
    }
    console.log(API_url);

    const response = await axios.get(`${API_url}`).then(function (response) {
      // response
      let json_data = "";   
      if(json_title === 0){
        json_data = JSON.stringify(response.data.Hosptlevaltnrcper[1].row);  
      }else if(json_title === 1){
        json_data = JSON.stringify(response.data.OldpsnMedcareWelfac[1].row);         
      }else if(json_title === 2){
        json_data = JSON.stringify(response.data.HtygdWelfaclt[1].row); 
      }else{
      }      
      let json_array = JSON.parse(json_data);
      setSearchData(json_array);

      var result = [];      
      if((current-1) / pageCount == 1){
        setPageCount(pageCount*2)
      }

      let previous = '?';
      console.log(query);
      if(query?.type) {
        previous += `type=${query.type}`;
        console.log('외않됌');
      }
      if(query?.city) {
        previous += `&city=${query.city}`;
      }
      if(query?.search_text) {
        previous += `&search_text=${query.search_text}`;
      }

      for(var i = pageCount-4; i <= pageCount;i++){
        result.push(<Link to={{
          pathname: '/search',
          search: `${previous}&p=${i}`
        }}>{i}</Link>);
      }
      setPagenationCode(result);

      var result = [];
      if(json_title === 0){
        for(var i = (current-1)*16;i < current*16;i++){
          result.push(
            <div className="item">
              <div className="title">{i}{json_array[i].INST_NM}</div>
              <div className="address">{json_array[i].REFINE_ROADNM_ADDR}</div>
              <div className="type">{json_array[i].DIV_NM}</div>
              <div className="tag">{json_array[i].GRAD}</div>
            </div>
          )
        }      
        // result =  json_array.map(row => 
        //   <div className="item">
        //     <div className="title">{row.INST_NM}</div>
        //     <div className="address">{row.REFINE_ROADNM_ADDR}</div>
        //     <div className="type">{row.DIV_NM}</div>
        //     <div className="tag">{row.GRAD}</div>
        //   </div>
        // );
      }else{  
        for(var i = (current-1)*16;i < current*16;i++){
          result.push(
            <div className="item">
              <div className="title">{i}{json_array[i].FACLT_NM}</div>
              <div className="address">{json_array[i].REFINE_ROADNM_ADDR}</div>
              <div className="type">{json_array[i].FACLT_KIND_NM}</div>
              <div className="tag">{json_array[i].FACLT_INSTL_DETAIL_DE}</div>
            </div>
          )
        }         
        // result =  json_array.map(row => 
        //   <div className="item">
        //     <div className="title">{row.FACLT_NM}</div>
        //     <div className="address">{row.REFINE_ROADNM_ADDR}</div>
        //     <div className="type">{row.FACLT_KIND_NM}</div>
        //     <div className="tag">{row.FACLT_INSTL_DETAIL_DE}</div>
        //   </div>
        // );      
      }
     
      setSearchItem(result);
      console.log(json_array);

    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행       
    });
    
  }; 
    apiCall(); 
  }, [location])
  
  return (
    <div className="Search">
      <div className="Main_content">
        <div className="containor_box">
          <div className="containor_content"> 
            {!!search_item.length && search_item}
          </div>
          {!!pagenationCode.length && pagenationCode}
        </div>
      </div>
    </div>
  );
};

export default Search;