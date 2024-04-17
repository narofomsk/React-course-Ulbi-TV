import React from 'react';
import {usePagination} from "../../../hooks/usePagination.js";

const Pagination = ({totalPages, changePage, page}) => {
    let pagesArray = usePagination(totalPages, page)
    return (
        <div style={{display: 'flex', gap: '5px'}}>
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page-active' : 'page'}
                >{p}
                </button>
            )}
        </div>
    );
};

export default Pagination;