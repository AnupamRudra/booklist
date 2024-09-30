/* eslint-disable react/prop-types */
import { UpdateBook } from "../page/Admin/UpdateBook";


export const RightModalCanva = () => {

    return (
        <>
            <div className="offcanvas-header mt-1 header-text form-header-group httal htvam">
                <div className="header-logo">
                    <img
                        src="https://www.jotform.com/uploads/MarkPastor/form_files/top.com-open-book-icon--download-book-black-and-white-2316x1469.609529a88d4e68.60982600.png"
                        alt="Book Entry Form" width="60" className="header-logo-left"
                    />
                    <h3 className="offcanvas-title form-header ms-5" id="offcanvasRightLabel">Book Update Form</h3>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body main-canvas">
                <UpdateBook />
            </div>
        </>
    );
};
