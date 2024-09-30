/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomContext } from "../../../Context/ContextApi";


export const ProductData = ({ books }) => {

    const { setPDF } = useCustomContext();
    const navigate = useNavigate()
    const token = localStorage.getItem('user_token')
    useEffect(() => {
        if (!token) {
            navigate('/user/login')
        }
    })

    const [inputData, setInputData] = useState({
        title: books.title,
        auther: books.auther.firstName + ' ' + books.auther.lastName
    })

    const handlePdf = async () => {
        await axios.post(`http://localhost:8001/book/pdf/getone`, inputData).then(response => {
            setPDF(response.data.result)
            if (response.data.result) {
                navigate(`/book/pdf/${books._id}/${books.title}/${books.auther.firstName + ' ' + books.auther.lastName}`)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <div className="m-5">
                <div className="h2 pb-2 mb-4 text-dark border-bottom border-dark">
                    {books.title}
                </div>
                <div className="mt-5rem">
                    {books.subTitle ?
                        <div className="pb-2 mb-4 text-dark border-bottom border-success">
                            <span className="fs-14px fw-600">
                                Book Sub Title -
                            </span>
                            <span className="fs-14px"> {books.subTitle} </span>
                        </div>
                        :
                        <></>
                    }
                    {books.auther.firstName || books.auther.lastName ?
                        <div className="pb-2 mb-4 text-dark border-bottom border-success">
                            <span className="fs-14px fw-600">
                                Auther -
                            </span>
                            <span className="fs-14px"> {books.auther.firstName + ' ' + books.auther.lastName} </span>
                        </div>
                        :
                        <></>
                    }
                    {books.usabilityCondition ?
                        <div className="pb-2 mb-4 text-dark border-bottom border-success">
                            <span className="fs-14px fw-600">
                                Condition -
                            </span>
                            <span className="fs-14px"> {books.usabilityCondition} </span>
                        </div>
                        :
                        <></>
                    }
                    {books.pages ?
                        <div className="pb-2 mb-4 text-dark border-bottom border-success">
                            <span className="fs-14px fw-600">
                                Number of Pages -
                            </span>
                            <span className="fs-14px"> {books.pages} pages</span>
                        </div>
                        :
                        <></>
                    }
                    {books.publishPlace ?
                        <div className="pb-2 mb-4 text-dark border-bottom border-success">
                            <span className="fs-14px fw-600">
                                Publish Place -
                            </span>
                            <span className="fs-14px"> {books.publishPlace} </span>
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
                        <button type="button" className="btn btn-success btn-lg me-3" onClick={handlePdf}>Read Free</button>
                        <button type="button" className="btn btn-primary btn-lg">Purchase</button>
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