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
  //let [search_data,setSearchData] = useState('');
  let [search_item,setSearchItem] = useState('');

  let query =qs.parse(location.search, {ignoreQueryPrefix: true});

  let [start,setStart] = useState(1);
  let [current,setCurrent] = useState(1);
  let [last,setLast] = useState(0);

  let [postedItemCount,setPostedItemCount] = useState(16);  //화면에 뜨는 갯수
  let [pageCount,setPageCount] = useState(5);               
  let [pagenationCode,setPagenationCode] = useState('');

    

  //apu 호출부분 
  useEffect(() => { const apiCall = async () => {
    let query =qs.parse(location.search, {ignoreQueryPrefix: true});    
    let API_url = "";
    let json_title = 0;

    let newCurrent = query.p ?? 1;
    let pagenation_start = start;
    let pagenation_last = last;
    let newPageCount =pageCount == 1 ? 5 : pageCount ;
    
    let _search_text ="";
    let _type ="";
    let _city ="";

    if(query.hasOwnProperty('search_text')){
      _search_text = query.search_text;
      setSearch_text(_search_text); 
    }        
    if(query.hasOwnProperty('type')){
      _type = query.type;
      setType(_type);
    }          
    if(query.hasOwnProperty('city')){
      _city = query.city;
      setCity(_city);
    }
      
    console.log(newCurrent,newPageCount,pagenation_start,pagenation_last);
    setCurrent(newCurrent);
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

      //console.log(json_array);


      var searchedData = [];
      var result = [];
      
      let slice_start = (newCurrent-1)*16;
      let slice_end =  newCurrent*16;

      //console.log(_search_text);
      if(json_title === 0){
        searchedData = json_array.filter(row => row.INST_NM.search(_search_text) !== -1 );      
        result = searchedData.slice(slice_start, slice_end).map(row =>                 
          <div className="item">
            <div className="title">{row.INST_NM}</div>
            <div className="address">{row.REFINE_ROADNM_ADDR}</div>
            <div className="type">{row.DIV_NM}</div>
            <div className="tag">{row.GRAD}</div>
          </div>
        ); 
      }else{
        searchedData = json_array.filter(row => row.FACLT_NM.search(_search_text) !== -1 );      
        
        result = searchedData.slice(slice_start, slice_end).map(row =>
          <div className="item">
            <div className="title">{row.FACLT_NM}</div>
            <div className="address">{row.REFINE_ROADNM_ADDR}</div>
            <div className="type">{row.FACLT_KIND_NM}</div>
            <div className="tag">{row.FACLT_INSTL_DETAIL_DE}</div>
          </div>
        );                      
      }    
      
      setSearchItem(result);
      //console.log(searchedData.length);
      console.log(searchedData.length);
      console.log(postedItemCount);
      // 16개 이하일대 
      if(searchedData.length < postedItemCount){
        pagenation_last = 1;
        newPageCount =1;
        setLast(pagenation_last);
      }else{
        if ((searchedData.length) % postedItemCount > 0){
          pagenation_last = parseInt((searchedData.length) / postedItemCount + 1);
          setLast(pagenation_last);
        }else{
          pagenation_last =parseInt((searchedData.length) / postedItemCount);
          setLast(pagenation_last);
        }        
      }
      setPageCount(newPageCount);

      //console.log(newPageCount);      
      
      console.log(newCurrent,newPageCount,pagenation_start,pagenation_last);
      if(newCurrent > newPageCount){
        if(newPageCount+5 <= last){
          newPageCount +=5;
        }else{                       
          newPageCount = pagenation_last;
        }
        pagenation_start += 5;     
        
      }else if(newCurrent < start){                                  
          pagenation_start -= 5;
          newPageCount = pagenation_start * 5;                                    
      }
      setPageCount(newPageCount);

      setStart(pagenation_start);

      makePagenation(newCurrent,newPageCount,pagenation_start,pagenation_last);
     
      
      //console.log(result);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행       
    });
    
  }; 
    apiCall(); 
  }, [location])
  
  function makePagenation(_current,_pageCount,_start,_last) {
    let previous = '?';
    var result = []; 

    console.log(_current,_pageCount,_start,_last);
    if(query?.type) 
      previous += `type=${query.type}`;
    if(query?.city) 
      previous += `&city=${query.city}`;    
    if(query?.search_text) 
      previous += `&search_text=${query.search_text}`;    

    if(_current > 1){
      result.push(<Link to={{
        pathname: '/search',
        search: `${previous}&p=${Number(_current)-1}`    
      }}><a>&lt;</a></Link>);
    }

    for(var i = _start; i <= _pageCount;i++){                  
      result.push(<Link to={{
        pathname: '/search',
        search: `${previous}&p=${i}`
      }}><a>{i}</a></Link>);        
    }

    if(_current < _last){
      result.push(<Link to={{
        pathname: '/search',
        search: `${previous}&p=${Number(_current)+1}`
      }}><a>&gt;</a></Link>);
    }
    setPagenationCode(result);
  }

  return (
    <div className="Search">
      <div className="Main_content">
        <div className="containor_box">
          <div className="containor_content"> 
            {!!search_item.length && search_item}
          </div>
          <div className="pagination">
            {!!pagenationCode.length && pagenationCode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;