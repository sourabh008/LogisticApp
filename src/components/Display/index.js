import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import DataCard from "./DataCard";
import "./display.scss";

const DisplayTodo = ({ data, postDelete, postUpdate }) => {
  const [page, setPage] = useState(1);
  const [arrayData, setArrayData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let newA = data?.slice((page - 1) * 15, page * 15);
    let newArr = [...arrayData, ...newA];
    setArrayData([...new Set(newArr)]);
  }, [page]);

  const FetchData = () => {
    if (arrayData?.length === data?.length) {
      setHasMore(false);
    }
    setPage(page + 1);
  };
  return (
    <div className="list">
      {data?.length ? (
        <InfiniteScroll
          dataLength={arrayData.length}
          next={FetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ul>
            {arrayData?.map((post) => {
              return (
                <DataCard
                  key={post.id}
                  post={post}
                  postUpdate={postUpdate}
                  postDelete={postDelete}
                />
              );
            })}
          </ul>
        </InfiniteScroll>
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
};
export default DisplayTodo;
