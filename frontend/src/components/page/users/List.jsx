import { PageHeader } from "../../component/PageHeader";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Pagination } from "../../component/Pagination";
import { useEffect, useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import { useCustomContext } from "../../../Context/ContextApi";
import { SearchList } from "../../component/SearchList";

export const List = () => {

    const { setBooks } = useCustomContext()

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const location = useLocation();
    const navigate = useNavigate()
    const [booklist, setBooklist] = useState([])
    const token = localStorage.getItem('user_token')
    useEffect(() => {
        if (!token) {
            navigate('/user/login')
        }
    })

    useEffect(() => {
        const fetchBook = async () => {
            try {
                await axios.get(`http://localhost:8001/book/get/type${location.pathname}`).then((res) => {
                    setBooklist(res.data.response)
                })
            } catch (error) {
                toast.error(error.message, toastOptions)
            }
        }
        fetchBook();
    }, [location])

    //--------------------pagination handling start-------------------------
    const data = booklist.length
    const itemsPerPage = 12;

    const [currentPage, setCurrentPage] = useState(1);
    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the data for the current page
    const currentData = booklist.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    //--------------pagination handling end------------------------

    const handleReadBook = (bookId) => {
        booklist.forEach(element => {
            if (element._id === bookId) {
                setBooks(element)
                navigate(`/${element.bookType}/${element._id}/${element.title}/${element.auther.firstName + ' ' + element.auther.lastName}`)
            }
        })
    }

    return (
        <>
            {
                booklist.length === 0 ?
                    <div className="d-flex flex-column justify-content-center place-item-center h-74vh">
                        <i className="fa-solid fa-cart-flatbed-suitcase fa-beat my-5" style={{ color: "#74C0FC", fontSize: '70px' }}></i>
                        <h3 >Cart is empty! </h3>
                        <Link to="/" className="btn btn-outline-info">Go To Home</Link>
                    </div>
                    :
                    <>
                        <PageHeader setBooklist={setBooklist} pathname={location.pathname} />
                        <div className="ps-5">
                            <h3>All {booklist.length > 0 ? booklist[0].bookType : location.pathname}</h3>
                        </div>
                        <SearchList currentData={currentData} handleReadBook={handleReadBook} />
                        <Pagination handlePageChange={handlePageChange} currentPage={currentPage} data={data} itemsPerPage={itemsPerPage} />
                        <ToastContainer />
                    </>
            }
        </>
    );
};
