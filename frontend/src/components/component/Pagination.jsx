/* eslint-disable react/prop-types */


export const Pagination = (props) => {

    const { handlePageChange, currentPage, data, itemsPerPage } = props

    return (
        <>
            <div className='w-fit-content mx-auto py-3 mb-5'>
                <button className='btn btn-primary' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <i className="fa fa-solid fa-angle-left bg-transparent"></i>
                    <i className="fa fa-solid fa-angle-left bg-transparent me-1"></i>
                    Prev Page
                </button>
                <button className='btn btn-border-primary text-dark'>{currentPage} of {Math.ceil(data / itemsPerPage)} </button>
                <button
                    className='btn btn-primary'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === Math.ceil(data / itemsPerPage)}
                >
                    Next Page
                    <i className="fa fa-solid fa-angle-right bg-transparent ms-1"></i>
                    <i className="fa fa-solid fa-angle-right bg-transparent"></i>
                </button>
            </div>
        </>
    );
};
