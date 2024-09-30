/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";


export const ProductData = ({ books }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className="m-5">
                <div className="h2 pb-2 mb-4 text-dark border-bottom border-dark">
                    {books.title}
                </div>
                <div className="mt-5rem">
                    {
                        books.subTitle ?
                            <div className="pb-2 mb-4 text-dark border-bottom border-success">
                                <span className="fs-14px fw-600">
                                    Book Sub Title -
                                </span>
                                <span className="fs-14px"> {books.subTitle} </span>
                            </div>
                            :
                            <></>
                    }
                    {
                        books.auther.firstName || books.auther.lastName ?
                            <div className="pb-2 mb-4 text-dark border-bottom border-success">
                                <span className="fs-14px fw-600">
                                    Auther -
                                </span>
                                <span className="fs-14px"> {books.auther.firstName + ' ' + books.auther.lastName} </span>
                            </div>
                            :
                            <></>
                    }
                    {
                        books.usabilityCondition ?
                            <div className="pb-2 mb-4 text-dark border-bottom border-success">
                                <span className="fs-14px fw-600">
                                    Condition -
                                </span>
                                <span className="fs-14px"> {books.usabilityCondition} </span>
                            </div>
                            :
                            <></>
                    }
                    {
                        books.pages ?
                            <div className="pb-2 mb-4 text-dark border-bottom border-success">
                                <span className="fs-14px fw-600">
                                    Number of Pages -
                                </span>
                                <span className="fs-14px"> {books.pages} pages</span>
                            </div>
                            :
                            <></>
                    }
                    {
                        books.publishPlace ?
                            <div className="pb-2 mb-4 text-dark border-bottom border-success">
                                <span className="fs-14px fw-600">
                                    Publish Place -
                                </span>
                                <span className="fs-14px"> {books.publishPlace} </span>
                            </div>
                            :
                            <></>
                    }
                    {
                        books.copyNo ?
                            <div className="pb-2 mb-4 text-dark border-bottom border-success">
                                <span className="fs-14px fw-600">
                                    Number of copies -
                                </span>
                                <span className="fs-14px"> {books.copyNo} </span>
                            </div>
                            :
                            <></>
                    }
                    {
                        books.isbn ?
                            <div className="pb-2 mb-4 text-dark border-bottom border-success">
                                <span className="fs-14px fw-600">
                                    ISBN No. -
                                </span>
                                <span className="fs-14px"> {books.isbn} </span>
                            </div>
                            :
                            <></>
                    }
                    {
                        books.accessionNo ?
                            <div className="pb-2 mb-4 text-dark border-bottom border-success">
                                <span className="fs-14px fw-600">
                                    Accession No. -
                                </span>
                                <span className="fs-14px"> {books.accessionNo} </span>
                            </div>
                            :
                            <></>
                    }
                    <div className="pb-2 mb-4 text-dark border-bottom border-success">
                        <span className="fs-14px fw-600">
                            Price (₹) -
                        </span>
                        <span className="fs-14px"> {books.price ? parseFloat(books.price).toFixed(2) : "0.00"} </span>
                    </div>
                    <div className="mt-5rem">
                        <button type="button" className="btn btn-success btn-lg me-3"
                            onClick={() => navigate(`/update/id=${books._id}/title=${books.title}/auther=${books.auther.firstName + ' ' + books.auther.lastName}`)}
                        >Update</button>
                        <button type="button" className="btn btn-secondary btn-lg" onClick={() => navigate('/book/store')}>Back</button>
                    </div>
                </div>
            </div>
        </>
    );
};










const Description = ({ description }) => {

    return (
        <>
            <div className="pb-2 m-5 mx-4rem text-dark">
                <span className="fs-18px fw-600 mb-2">
                    Know more from the bucket -
                </span>
                <div className="p-3 mt-2 fs-14px text-justify bg-success bg-opacity-10 border border-success border-top-0 rounded-bottom">
                    {description}
                </div>
            </div>
        </>
    )
}

export { Description }