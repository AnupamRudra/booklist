/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCustomContext } from "../../../Context/ContextApi";


export const BookListByTypes = ({ title, heading }) => {

    const { setBooks } = useCustomContext()
    const token = localStorage.getItem('user_token')
    const navigate = useNavigate()
    const [bookTypeData, setBookTypeData] = useState([])

    useEffect(() => {
        const bookType = async () => {
            await axios.get(`http://localhost:8001/book/get/type/${title}`).then(res => {
                setBookTypeData(res.data.response)
            }).catch(error => {
                console.log(error)
            })
        }
        bookType()
    }, [])

    const bookList = bookTypeData.slice(0, 4)

    const handleMoreItems = (title) => {
        if (token) {
            navigate(`/${title}`)
        } else {
            navigate('/user/login')
        }
    }

    const handleReadBook = (bookId) => {
        bookTypeData.forEach(element => {
            if (element._id === bookId) {
                setBooks(element)
                navigate(`/${element.bookType}/${element._id}/${element.title}/${element.auther.firstName + ' ' + element.auther.lastName}`)
            }
        })
    }

    return (
        <>
            {
                bookTypeData.length === 0 ? <> </>
                    :
                    <>
                        <div className="row p-5 bg-white justify-content-center my-4">
                            <h3 className="border border-start-0 rounded-end border-2 border-info p-3">{heading}</h3>
                            {
                                bookList.map((items, i) => {
                                    let image = items.picture.split(',')
                                    return (
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 my-2 mn-h-369 my-15px mx-w-360" key={i}>
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
                                                        <p className="card-text one-line fs-13px fw-600 text-white text-capitalize w-fit-content rounded-5 bg-info p-2 px-4">{items.auther.firstName + ' ' + items.auther.lastName}</p>
                                                    </div>
                                                    <div className="pb-5 d-flex mt-auto" >
                                                        <button
                                                            className={`btn btn-primary mt-auto ${token || i === 0 ? '' : 'disabled'}`}
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
                        <button
                            className="btn btn-outline-success d-flex mx-auto mb-5"
                            onClick={() => handleMoreItems(title)}
                        >
                            Show All {heading}
                        </button>
                    </>
            }
        </>
    );
};
