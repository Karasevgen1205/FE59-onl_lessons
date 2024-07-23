import "./styles.scss";

export const Pagination = ({ count, limit, page, handleChangePage }) => {
  const pageCount = Math.ceil(count / limit) || 1;
  const numbersList = new Array(pageCount).fill(null).map((_, i) => ++i);

  console.log(pageCount, numbersList);
  return (
    <div className="pagination">
      {numbersList.map((item) => {
        return (
          <button
            type="button"
            className={`pagination__item ${
              page === item ? "pagination__item_active" : ""
            }`}
            key={item}
            onClick={() => handleChangePage(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
