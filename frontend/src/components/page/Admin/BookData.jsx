/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react';
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
import { AdminPageHeader } from '../../component/PageHeader';
import { Pagination } from '../../component/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useCustomContext } from '../../../Context/ContextApi';
import { useNavigate } from 'react-router-dom';


export const BookData = () => {

    const icon = useMemo(() => {
        return <i className="fa fa-ellipsis-h" style={{ color: 'purple' }}></i>
    })

    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const { setBooks } = useCustomContext();

    const navigate = useNavigate();
    const [booklist, setBooklist] = useState([])
    const fetchBook = async () => {
        try {
            await axios.get('http://localhost:8001/book/get/').then((res) => {
                setBooklist(res.data.response)
            })
        } catch (error) {
            toast.error(error.message, toastOptions)
        }
    }

    useEffect(() => {
        fetchBook();
    }, [])

    //--------------------pagination handling start-------------------------
    const data = booklist.length
    const itemsPerPage = 10;

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

    const handleDelete = async (bookId) => {
        const shouldDelete = window.confirm('Are you sure, you want to delete?');

        if (shouldDelete) {
            await axios.delete(`http://localhost:8001/book/delete/${bookId}`).then(res => {
                toast.success(res.data.message, toastOptions)
                fetchBook();
            }).catch(error => {
                toast.error(error.message, toastOptions)
            })
        }
    }

    const handleUpdate = (bookId) => {
        booklist.forEach(element => {
            if (element._id === bookId) {
                setBooks(element)
                navigate(`/update/id=${element._id}/title=${element.title}/auther=${element.auther.firstName + ' ' + element.auther.lastName}`)
            }
        })
    }

    const viewData = (bookId) => {
        booklist.forEach(element => {
            if (element._id === bookId) {
                setBooks(element)
                navigate(`/book/overview/id=${element._id}/title=${element.title}/auther=${element.auther.firstName + ' ' + element.auther.lastName}`)
            }
        })
    }

    const handlePdf = (bookId) => {
        booklist.forEach(element => {
            if (element._id === bookId) {
                setBooks(element)
                navigate(`/create/pdf/id=${element._id}/title=${element.title}/auther=${element.auther.firstName + ' ' + element.auther.lastName}`)
            }
        })
    }


    return (
        <>
            <AdminPageHeader setBooklist={setBooklist} />
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th scope='col'>SR</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Sub Title</th>
                        <th scope='col'>Author</th>
                        <th scope='col'>ISBN</th>
                        <th scope='col'>Price (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((items, i) => (
                        <tr key={i}>
                            <td>{(currentPage - 1) * itemsPerPage + i + 1} </td>
                            {/* <td>{items.title}</td> */}
                            <td >
                                <DropdownButton
                                    id={`dropdown-button-drop`}
                                    size="md"
                                    variant=""
                                    title={items.title}
                                    style={{ marginLeft: 'auto' }}
                                >
                                    <Dropdown.Item eventKey="1"
                                        onClick={() => handleUpdate(items._id)}
                                    >
                                        <i className="fa fa-pencil w-20px"></i>
                                        Update
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="1"
                                        onClick={() => handlePdf(items._id)}
                                    >
                                        <i className="fa fa-pencil w-20px"></i>
                                        Create PDF
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="3"
                                        onClick={() => viewData(items._id)}
                                    >
                                        <i className="fa fa-eye w-20px"></i>
                                        Full View
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="2"
                                        onClick={() => handleDelete(items._id)}
                                    >
                                        <i className="fa fa-trash-o w-20px"></i>
                                        Delete
                                    </Dropdown.Item>
                                </DropdownButton>
                            </td>
                            <td>{items.subTitle}</td>
                            <td>{items.auther.firstName + ' ' + items.auther.lastName}</td>
                            <td>{items.isbn}</td>
                            <td>{parseFloat(items.price).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination handlePageChange={handlePageChange} currentPage={currentPage} data={data} itemsPerPage={itemsPerPage} />
            <ToastContainer />
        </>
    );
};




