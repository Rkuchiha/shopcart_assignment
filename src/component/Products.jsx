import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "./comps/ProductCard";
import { paginationItems } from "../constants/index";

const items = paginationItems;

function Items({ currItems, selectedCategory }) {
  console.log(selectedCategory);

  const filteredProducts =
    selectedCategory === "all"
      ? currItems
      : currItems.filter((product) => product.category === selectedCategory);

  return (
    <>
      {filteredProducts &&
        filteredProducts.map((product) => (
          <div key={product._id} className="w-full">
            <ProductCard
              key={product.id}
              title={product.productName}
              color={product.color}
              price={product.price}
              imageSrc={product.img}
              category={product.category}
            />
          </div>
        ))}
    </>
  );
}

const Products = ({ itemsPerPage = 12, selectedCategory }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  console.log(pageCount);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset},`
    // );
    setItemStart(newOffset);
  };

  return (
    <div className="mt-10">
      <div className="grid grid-cols-4">
        <Items currItems={currItems} selectedCategory={selectedCategory} />
      </div>

      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
          {items.length}
        </p>
      </div>
    </div>
  );
};

export default Products;
