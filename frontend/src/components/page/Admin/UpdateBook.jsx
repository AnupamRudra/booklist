/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useCustomContext } from "../../../Context/ContextApi";
import { useNavigate } from "react-router-dom";


export const UpdateBook = () => {

    const { books, setBooks } = useCustomContext();
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const navigate = useNavigate()
    const [file, setFile] = useState([])
    const [bookData, setBookData] = useState({
        title: books.title,
        subTitle: books.subTitle,
        firstName: books.auther.firstName,
        lastName: books.auther.lastName,
        bookType: books.bookType,
        pages: books.pages,
        copyNo: books.copyNo,
        isbn: books.isbn,
        accessionNo: books.accessionNo,
        publisher: books.publisher,
        version: books.version,
        printer: books.printer,
        usabilityCondition: books.usabilityCondition,
        price: books.price,
        description: books.description,
    })

    const handleInput = (e) => {
        e.preventDefault();
        setBookData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleUpdateForm = async (e, bookId) => {
        e.preventDefault();
        const formData = new FormData();
        file.forEach((file, i) => {
            formData.append(`picture[]`, file);
        })
        formData.append('title', bookData.title);
        formData.append('subTitle', bookData.subTitle);
        formData.append('firstName', bookData.firstName);
        formData.append('lastName', bookData.lastName);
        formData.append('bookType', bookData.bookType);
        formData.append('pages', bookData.pages);
        formData.append('copyNo', bookData.copyNo);
        formData.append('isbn', bookData.isbn);
        formData.append('accessionNo', bookData.accessionNo);
        formData.append('publisher', bookData.publisher);
        formData.append('version', bookData.version);
        formData.append('printer', bookData.printer);
        formData.append('usabilityCondition', bookData.usabilityCondition);
        formData.append('price', bookData.price);
        formData.append('description', bookData.description);
        try {
            await axios.post(`http://localhost:8001/book/update/${bookId}`, formData).then((res) => {
                setBooks(res.data.response)
                toast.success(res.data.message, toastOptions)
                setTimeout(() => {
                    navigate(-1)
                }, 2000);
            })
        } catch (error) {
            toast.error(error.message, toastOptions)
        }
    }


    return (
        <>
            <form className="jotform-form overflow-canvas">
                <div role="main" className="form-all mt-0">
                    <ul className="form-section page-section">
                        <li id="cid_1" className="form-input-wide" data-type="control_head">
                            <div style={{ display: "table", width: "100%" }}>
                                <div className="form-header-group hasImage header-large">
                                    <div className="header-text httal htvam d-flex flex-row mx-auto w-fit-content">
                                        <img src="https://www.jotform.com/uploads/MarkPastor/form_files/top.com-open-book-icon--download-book-black-and-white-2316x1469.609529a88d4e68.60982600.png"
                                            alt="Book Update Form" width="60" className="header-logo-left" />
                                        <h1 id="header_1" className="form-header" data-component="header">Book Update Form</h1>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_5">
                            <label className="form-label form-label-top" id="label_1" htmlFor="input_5" aria-hidden="false"> Book Title </label>
                            <div id="cid_5" className="form-input-wide" data-layout="half">
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    data-type="input-textbox"
                                    className="form-textbox"
                                    data-defaultvalue=""
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_1"
                                    value={bookData.title}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-1" data-type="control_textbox" id="id_subtitle">
                            <label className="form-label form-label-top" id="label_2" htmlFor="input_5" aria-hidden="false"> Book Sub Title </label>
                            <div id="cid_5" className="form-input-wide" data-layout="half">
                                <input
                                    type="text"
                                    id="subTitle"
                                    name="subTitle"
                                    data-type="input-textbox"
                                    className="form-textbox"
                                    data-defaultvalue=""
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_2"
                                    value={bookData.subTitle}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line" data-type="control_fullname" id="id_6">
                            <label className="form-label form-label-top form-label-auto" id="label_3" htmlFor="first_6" aria-hidden="false"> Author </label>
                            <div id="cid_6" className="form-input-wide" data-layout="full">
                                <div data-wrapper-react="true">
                                    <span className="form-sub-label-container" style={{ verticalAlign: "top" }} data-input-type="first">
                                        <input
                                            type="text"
                                            id="first_6"
                                            name="firstName"
                                            className="form-textbox"
                                            data-defaultvalue=""
                                            size="10"
                                            data-component="first"
                                            aria-labelledby="label_3 sublabel_3_first"
                                            value={bookData.firstName}
                                            onChange={handleInput}
                                        />
                                        <label className="form-sub-label" htmlFor="first_6" id="sublabel_4_first" style={{ minHeight: "13px" }}>First Name</label>
                                    </span>
                                    <span className="form-sub-label-container" style={{ verticalAlign: "top" }} data-input-type="last">
                                        <input
                                            type="text"
                                            id="last_6"
                                            name="lastName"
                                            className="form-textbox"
                                            data-defaultvalue=""
                                            size="15"
                                            data-component="last"
                                            aria-labelledby="label_4 sublabel_4_last"
                                            value={bookData.lastName}
                                            onChange={handleInput}
                                        />
                                        <label className="form-sub-label" htmlFor="last_6" id="sublabel_4_last" style={{ minHeight: "13px" }}>Last Name</label>
                                    </span></div>
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-1" data-type="control_number" id="booktype">
                            <label className="form-label form-label-top" id="type" htmlFor="type" aria-hidden="false"> Type of Books </label>
                            <div id="bookType" className="form-input-wide" data-layout="half">
                                <select
                                    className="form-select form-textbox"
                                    aria-label="Default select example"
                                    name="bookType"
                                    value={bookData.bookType}
                                    onChange={handleInput}
                                >
                                    <option value="Others"> --select Option--</option>
                                    <option value="Ved">Ved</option>
                                    <option value="Purana">Purana</option>
                                    <option value="Upnishad">Upnishad</option>
                                    <option value="Autobiography">Autobiography</option>
                                    <option value="Biography">Biography</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Crime Fiction">Crime Fiction</option>
                                    <option value="Poetry">Poetry</option>
                                    <option value="Relegious">Religious</option>
                                    <option value="History">History</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-1" data-type="control_number" id="id_7">
                            <label className="form-label form-label-top" id="label_5" htmlFor="input_7" aria-hidden="false"> # number of pages </label>
                            <div id="cid_7" className="form-input-wide" data-layout="half">
                                <input
                                    type="number"
                                    id="pages"
                                    name="pages"
                                    data-type="input-number"
                                    className=" form-number-input form-textbox"
                                    data-defaultvalue="" style={{ width: "310px" }}
                                    size="310"
                                    placeholder="ex: 23"
                                    data-component="number"
                                    aria-labelledby="label_5"
                                    step="any"
                                    value={bookData.pages}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-2" data-type="control_number" id="id_12">
                            <label className="form-label form-label-top" id="label_6" htmlFor="input_12" aria-hidden="false"> # number of copies </label>
                            <div id="cid_12" className="form-input-wide" data-layout="half">
                                <input
                                    type="number"
                                    id="copyNo"
                                    name="copyNo"
                                    data-type="input-number"
                                    className=" form-number-input form-textbox"
                                    data-defaultvalue="" style={{ width: "310px" }}
                                    size="310"
                                    placeholder="ex: 23"
                                    data-component="number"
                                    aria-labelledby="label_6"
                                    step="any"
                                    value={bookData.copyNo}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-1" data-type="control_number" id="id_9">
                            <label className="form-label form-label-top" id="label_7" htmlFor="input_9" aria-hidden="false"> ISBN No </label>
                            <div id="cid_9" className="form-input-wide" data-layout="half">
                                <input
                                    type="number"
                                    id="isbn"
                                    name="isbn"
                                    data-type="input-number"
                                    className=" form-number-input form-textbox"
                                    data-defaultvalue="" style={{ width: "310px" }}
                                    size="310"
                                    placeholder="ex: 23"
                                    data-component="number"
                                    aria-labelledby="label_7"
                                    step="any"
                                    value={bookData.isbn}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-2" data-type="control_number" id="id_14">
                            <label className="form-label form-label-top" id="label_8" htmlFor="input_14" aria-hidden="false"> Accession No </label>
                            <div id="cid_14" className="form-input-wide" data-layout="half">
                                <input
                                    type="number"
                                    id="accessionNo"
                                    name="accessionNo"
                                    data-type="input-number"
                                    className=" form-number-input form-textbox"
                                    data-defaultvalue=""
                                    style={{ width: "310px" }}
                                    size="310"
                                    placeholder="ex: 23"
                                    data-component="number"
                                    aria-labelledby="label_8"
                                    step="any"
                                    value={bookData.accessionNo}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_11">
                            <label className="form-label form-label-top" id="label_9" htmlFor="input_11" aria-hidden="false"> Publisher </label>
                            <div id="cid_11" className="form-input-wide" data-layout="half">
                                <input
                                    type="text"
                                    id="publisher"
                                    name="publisher"
                                    data-type="input-textbox"
                                    className="form-textbox"
                                    data-defaultvalue=""
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_9"
                                    value={bookData.publisher}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_13">
                            <label className="form-label form-label-top" id="label_12" htmlFor="input_13" aria-hidden="false"> Version </label>
                            <div id="cid_11" className="form-input-wide" data-layout="half">
                                <input
                                    type="text"
                                    id="version"
                                    name="version"
                                    data-type="input-textbox"
                                    className="form-textbox"
                                    data-defaultvalue=""
                                    placeholder="ex: First/Second/Third"
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_12"
                                    value={bookData.version}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_16">
                            <label className="form-label form-label-top" id="label_14" htmlFor="input_16" aria-hidden="false"> Printer </label>
                            <div id="cid_11" className="form-input-wide" data-layout="half">
                                <input
                                    type="text"
                                    id="printer"
                                    name="printer"
                                    data-type="input-textbox"
                                    className="form-textbox"
                                    data-defaultvalue=""
                                    placeholder="ex: Valmiki Printing Press"
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_14"
                                    value={bookData.printer}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_10">
                            <label className="form-label form-label-top form-label-auto" id="label_10" htmlFor="input_10" aria-hidden="false"> Usability Condition </label>
                            <div id="cid_10" className="form-input-wide" data-layout="half">
                                <input
                                    type="text"
                                    id="usabilityCondition"
                                    name="usabilityCondition"
                                    data-type="input-textbox"
                                    className="form-textbox"
                                    data-defaultvalue=""
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_10"
                                    value={bookData.usabilityCondition}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-2" data-type="control_textbox" id="id_11">
                            <label className="form-label form-label-top" id="label_11" htmlFor="input_11" aria-hidden="false"> Book Price </label>
                            <div id="cid_11" className="form-input-wide" data-layout="half">
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    data-type="input-textbox"
                                    className="form-textbox form-number-input "
                                    data-defaultvalue=""
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_11"
                                    value={bookData.price}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <div className="form-line d-flex flex-row" data-type="control_fileupload" id="id_18">
                            <div id="cid_18" className="form-input-wide form-col-2" data-layout="full">
                                <label className="form-label form-label-top form-label-auto" id="label_18" htmlFor="input_18" aria-hidden="false"> File Upload </label>
                                <input type="file" id="input_18" name="image"
                                    className="form-upload-multiple"
                                    data-imagevalidate="yes"
                                    data-file-maxsize="10854"
                                    data-file-minsize="0"
                                    data-component="fileupload"
                                    aria-label="Browse Files"
                                    onChange={(e) => setFile([...file, ...e.target.files])}
                                    multiple
                                />
                            </div>
                        </div>
                        <li className="form-line" data-type="control_textarea" id="id_15">
                            <label className="form-label form-label-top form-label-auto" id="label_15" htmlFor="input_15" aria-hidden="false"> Additional comments (Description) </label>
                            <div id="cid_15" className="form-input-wide" data-layout="full">
                                <textarea
                                    id="description"
                                    className="form-textarea"
                                    name="description"
                                    style={{ width: "648px", height: "163px" }}
                                    data-component="textarea"
                                    aria-labelledby="label_15"
                                    value={bookData.description}
                                    onChange={handleInput}
                                >
                                </textarea>
                            </div>
                        </li>
                        <li className="form-line" data-type="control_button" id="id_2">
                            <div id="cid_2" className="form-input-wide" data-layout="full">
                                <div data-align="auto"
                                    className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField">
                                    <button id="input_2" type="submit"
                                        className="btn btn-success jf-form-buttons"
                                        data-component="button" data-content=""
                                        onClick={(e) => handleUpdateForm(e, books._id)}
                                    >
                                        Submit
                                    </button>
                                    <button id="input_1" type="submit"
                                        className="btn btn-outline-success jf-form-buttons"
                                        data-component="button" data-content="">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
            <ToastContainer />
        </>
    );
};
