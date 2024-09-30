/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


export const CreateBooks = () => {

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const [file, setFile] = useState([])
    const [input, setInput] = useState({
        title: "",
        subTitle: "",
        firstName: "",
        lastName: "",
        bookType: "",
        pages: "",
        copyNo: "",
        isbn: "",
        accessionNo: "",
        publisher: "",
        version: "",
        printer: "",
        usabilityCondition: "",
        price: "",
        description: "",
    })

    const handleInput = (e) => {
        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        file.forEach((file, i) => {
            formData.append(`picture[]`, file);
        })
        formData.append('title', input.title);
        formData.append('subTitle', input.subTitle);
        formData.append('firstName', input.firstName);
        formData.append('lastName', input.lastName);
        formData.append('bookType', input.bookType);
        formData.append('pages', input.pages);
        formData.append('copyNo', input.copyNo);
        formData.append('isbn', input.isbn);
        formData.append('accessionNo', input.accessionNo);
        formData.append('publisher', input.publisher);
        formData.append('version', input.version);
        formData.append('printer', input.printer);
        formData.append('usabilityCondition', input.usabilityCondition);
        formData.append('price', input.price);
        formData.append('description', input.description);
        try {
            await axios.post('http://localhost:8001/book/store', formData).then((res) => {
                toast.success(res.data.message, toastOptions)
                console.log(res.data)
            })
        } catch (error) {
            toast.error(error.message, toastOptions)
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
                                        <img src="https://www.jotform.com/uploads/MarkPastor/form_files/top.com-open-book-icon--download-book-black-and-white-2316x1469.609529a88d4e68.60982600.png" alt="Book Entry Form" width="180" className="header-logo-left" />
                                    </div>
                                    <div className="header-text httal htvam">
                                        <h1 id="header_1" className="form-header" data-component="header">Book Entry Form</h1>
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
                                    placeholder="ex: Ramayan"
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_1"
                                    value={input.title}
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
                                    placeholder="ex: Valmikikrit Ramayan"
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_2"
                                    value={input.subTitle}
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
                                            value={input.firstName}
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
                                            value={input.lastName}
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
                                    value={input.bookType}
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
                                    value={input.pageNo}
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
                                    value={input.copyNo}
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
                                    value={input.isbn}
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
                                    value={input.accessionNo}
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
                                    placeholder="ex: Publihser/Publication/Publish Place"
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_9"
                                    value={input.publisher}
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
                                    value={input.version}
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
                                    value={input.printer}
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
                                    placeholder="ex: New/Old"
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_10"
                                    value={input.usabilityCondition}
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
                                    placeholder="ex: 259.00"
                                    style={{ width: "310px" }}
                                    size="310"
                                    data-component="textbox"
                                    aria-labelledby="label_11"
                                    value={input.price}
                                    onChange={handleInput}
                                />
                            </div>
                        </li>
                        <li className="form-line" data-type="control_fileupload" id="id_18">
                            <label className="form-label form-label-top form-label-auto" id="label_18" htmlFor="input_18" aria-hidden="false"> File Upload </label>
                            <div id="cid_18" className="form-input-wide" data-layout="full">
                                <div className="jfQuestion-fields" data-wrapper-react="true">
                                    <div className="jfField isFilled">
                                        <div className="jfUpload-wrapper">
                                            <div className="jfUpload-files-container">
                                                <div className="validate[multipleUpload]">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
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
                                    value={input.description}
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
