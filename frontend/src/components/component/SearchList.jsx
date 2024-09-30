/* eslint-disable react/prop-types */


export const SearchList = ({currentData, handleReadBook}) => {

    const token = localStorage.getItem('user_token')

    return (
        <>
            <div className="row p-5 bg-white">
                {
                    currentData.map((items, i) => {
                        let image = items.picture.split(',')
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2 mn-h-369" key={i}>
                                <div className="card card-shadow bg-aliceblue h-100">
                                    <div className="h-75 p-5">
                                        <img
                                            src={image[0]}
                                            className="card-img card-img-shadow mx-auto d-flex mx-w-260 mn-w-100" alt="..."
                                        />
                                    </div>
                                    <div className="card-body h-auto mx-w-260 mx-4">
                                        <div className="h-60">
                                            <h4 className="card-title one-line fw-600 text-capitalize ">{items.title}</h4>
                                            <p className="card-text one-line fs-13px text-capitalize text-wrap badge bg-info p-2 px-4">{items.auther.firstName + ' ' + items.auther.lastName}</p>
                                        </div>
                                        <div className="pb-5" style={{ marginTop: 'auto', display: 'flex' }}>
                                            <button
                                                className={`btn btn-primary mt-auto ${token ? '': 'disabled'}`}
                                                onClick={() => handleReadBook(items._id)}
                                            >
                                                Read More
                                                <i className="fa fa-solid fa-angles-right bg-transparent ms-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};
