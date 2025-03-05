const usePaginationQuery = () => {
  const getPaginationQuery = (queryObj: SearchQueryType) => {
    const { queryFacCtg, queryCity, querySearchText, queryDetailCtg, queryProfit, queryGrade, queryPageNum } = queryObj;

    let searchQuery = `?facCtg=${queryFacCtg}&city=${queryCity}&searchText=${querySearchText}`;
    switch (queryFacCtg) {
      case "요양병원":
        searchQuery += `&grade=${queryGrade}`;
        break;
      case "요양시설":
      case "재가노인복지시설":
        searchQuery += `&detailCtg=${queryDetailCtg}&profit=${queryProfit}`;
        break;
      default:
        throw Error;
    }
    searchQuery += `&p=${queryPageNum}`;
    return searchQuery;
  };

  return getPaginationQuery;
};

export default usePaginationQuery;
