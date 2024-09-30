/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from "react-toastify";
import './css/book-ss.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useCustomContext } from "../../../Context/ContextApi";

export const BookScreenShots = () => {

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const { books } = useCustomContext();

    const [file, setFile] = useState([])
    const [fileName, setFileName] = useState([])
    const [input, setInput] = useState({
        bookId: books._id,
        title: books.title,
        auther: books.auther.firstName + ' ' + books.auther.lastName,
        description: ''
    })
    console.log(input)
    const handleInput = (e) => {
        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleFile = (e) => {
        setFile((prev) => ([...prev, ...e.target.files]))
        readURL([...e.target.files])
    }
    const readURL = (files) => {
        files.forEach((file) => {
            setFileName((prev) => ([...prev, file.name]));
        })
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        file.forEach((file, i) => {
            formData.append(`pictures[]`, file);
        })
        formData.append('bookId', input.bookId);
        formData.append('title', input.title);
        formData.append('auther', input.auther);
        formData.append('description', input.description);
        try {
            await axios.post('http://localhost:8001/book/pdf/store', formData).then((res) => {
                toast.success(res.data.message, toastOptions)
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <form className="jotform-form">
                <div role="main" className="form-all">
                    <ul className="form-section page-section">
                        <li id="cid_1" className="form-input-wide" data-type="control_head">
                            <div style={{ display: "table", width: "100%" }}>
                                <div className="form-header-group hasImage header-large" data-imagealign="Left">
                                    <div className="header-logo">
                                        <img
                                            src="https://www.jotform.com/uploads/MarkPastor/form_files/top.com-open-book-icon--download-book-black-and-white-2316x1469.609529a88d4e68.60982600.png"
                                            alt="Book Entry Form" width="80" className="header-logo-left"
                                        />
                                    </div>
                                    <div className="header-text httal htvam">
                                        <h2 id="header_1" className="form-header" data-component="header">Book Screen Shots Form</h2>
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
                                    value={input.title}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-1" data-type="control_fullname" id="id_6">
                            <label className="form-label form-label-top form-label-auto" id="label_3" htmlFor="first_6" aria-hidden="false"> Author </label>
                            <div id="cid_6" className="form-input-wide" data-layout="full">
                                <div data-wrapper-react="true">
                                    <span className="form-sub-label-container" style={{ verticalAlign: "top" }} data-input-type="first">
                                        <input
                                            type="text"
                                            id="first_6"
                                            name="auther"
                                            className="form-textbox"
                                            data-defaultvalue=""
                                            size="10"
                                            data-component="first"
                                            aria-labelledby="label_3 sublabel_3_first"
                                            value={input.auther}
                                            onChange={handleInput}
                                        />
                                    </span>
                                </div>
                            </div>
                        </li>
                        <div className="file-upload">
                            <div className="image-upload-wrap">
                                <input className="file-upload-input" type='file'
                                    onChange={(e) => handleFile(e)}
                                    accept="image/*"
                                    multiple
                                />
                                <div className="drag-text">
                                    {
                                        fileName.length !== 0 ?
                                            <p>{fileName + ','} </p> :
                                            <h4>Drag and drop a file or select add Image</h4>
                                    }
                                </div>
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
                                    // value={input.description}
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
                                        onClick={(e) => handleSubmitForm(e)}
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
