import { useState, MouseEvent } from "react";
import PaginationPresenter from "./Pagination.presenter";

export default function PaginationPage(props: any) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const lastPage = Math.ceil(props.data?.length / 3);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    props.getData();
    setCurrent(Number((event.target as HTMLDivElement).id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 3);
    props.getData();
    setCurrent(startPage - 3);
  };

  const onClickNextPage = () => {
    if (!(startPage + 3 <= lastPage)) return;
    setStartPage((prev) => prev + 3);
    props.getData();
    setCurrent(startPage + 3);
  };

  return (
    <PaginationPresenter
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      current={current}
    />
  );
}
