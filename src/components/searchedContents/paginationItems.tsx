import usePaginationQuery from "@hooks/usePaginationQuery";
import { Pagination } from "react-bootstrap";

interface Props {
  pageNum: number;
  lastIndex: number;
  showMaxItemsCount: number;
  querys: SearchQueryType;
}

const PaginationItems = (props: Props) => {
  const { pageNum, lastIndex, showMaxItemsCount, querys } = props;
  const getPaginationQuery = usePaginationQuery();
  const result: JSX.Element[] = [];
  const sectionNum = Math.ceil(pageNum / showMaxItemsCount);
  const startNum = (sectionNum - 1) * showMaxItemsCount + 1;
  const endNum = sectionNum * showMaxItemsCount;

  for (let num = startNum; num <= endNum && num <= lastIndex; num++) {
    result.push(
      <Pagination.Item key={num} href={getPaginationQuery({ ...querys, queryPageNum: num })} active={num === pageNum}>
        {num}
      </Pagination.Item>
    );
  }
  return result;
};

export default PaginationItems;
