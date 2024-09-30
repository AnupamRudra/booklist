/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";

export const PageHeader = ({ setBooklist, pathname }) => {

    const searchBooks = async (search) => {
        try {
            await axios.get(`http://localhost:8001/book/get/type${pathname}/${search}`).then((res) => {
                setBooklist(res.data.response)
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="bg-white p-4 mt-4">
                <form className="d-flex m-4" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search by Title, Sub Title, and Auther" aria-label="Search"
                        onChange={(e) => searchBooks(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </>
    );
};





export const HomeHeader = ({ setSearchList }) => {

    const searchBook = async (search) => {
        try {
            await axios.get(`http://localhost:8001/book/get/search/${search}`).then((res) => {
                setSearchList(res.data.response)
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="w-100 hero-header-div">
                <input className="form-control me-2 hero-header" type="search" placeholder="Search by Title, Sub Title, and Auther" aria-label="Search"
                    onChange={(e) => searchBook(e.target.value)}
                />
            </div>
        </>
    );
};





export const AdminPageHeader = ({ setBooklist }) => {

    const searchBooks = async (search) => {
        try {
            await axios.get(`http://localhost:8001/book/get/search/${search}`).then((res) => {
                setBooklist(res.data.response)
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="bg-white p-4 mt-4">
                <form className="d-flex m-4" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search by Title, Sub Title, and Auther" aria-label="Search"
                        onChange={(e) => searchBooks(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </>
    );
};