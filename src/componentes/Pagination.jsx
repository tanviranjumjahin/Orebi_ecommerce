import ReactPaginate from "react-paginate";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

function Items({ currentItems }) {
  return (
    <div className="flex gap-x-10 flex-wrap pt-[140px]">
      {currentItems.map((items) => (
        <div key={items.id} className="w-[300px]">
          <Product
            badgename={"New"}
            imgsrc={items.thumbnail}
            hoverOne={"Add to Wish List"}
            hoverTwo={"Compare"}
            hoverThree={"Add to Cart"}
            pName={items.title}
            pPrice={items.price}
            pColor={"Black"}
          />
        </div>
      ))}
    </div>
  );
}

function Pagination({ itemsPerPage }) {
  const [alldata, setAllData] = useState([]); // Holds fetched API data
  const [itemOffset, setItemOffset] = useState(0); // Tracks the current page offset

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=100");
        setAllData(response.data.products); // Set data from the API
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures the data is fetched once on mount

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = alldata.slice(itemOffset, endOffset); // Slice based on current page offset
  const pageCount = Math.ceil(alldata.length / itemsPerPage); // Total number of pages

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % alldata.length; // Update the offset based on selected page
    setItemOffset(newOffset);
  };

  return (
    < >
      <Items currentItems={currentItems} />
      <div className="pt-[50px] flex justify-between">
      <ReactPaginate
        breakLabel="....."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-x-4"
        pageLinkClassName="border-[1px] border-black bg-white  hover:bg-black hover:text-white  duration-300 w-full block py-[8px] px-[8px]"
      />
      <h2>{`Products from ${itemOffset+1} to ${endOffset<alldata.length?endOffset:alldata.length} of ${alldata.length}`}</h2>
      </div>
    </>
  );
}

export default Pagination;
