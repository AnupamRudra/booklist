// import { PDFDownloadLink } from "@react-pdf/renderer";
import { useCustomContext } from "../../Context/ContextApi";
import logo from '../../assets/logo-book.png'
// import { MyDocument } from "./pdf/PdfCreater";

export const FirstPage = () => {

    const { PDF, books } = useCustomContext();

    return (
        <>
            <span className='d-flex ms-auto download-icon w-40px h-40px'>
                {/* <PDFDownloadLink document={<MyDocument />} fileName="PDF">
                    {({ loading }) => (loading ?
                        <button type='button' className='btn btn-primary' title='Download pdf form'>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </button>
                        : */}
                <button type='button' className='btn btn-primary disabled' title='Download pdf form'>
                    <i className='fa fa-download text-light'></i>
                </button>
                {/* )}
                </PDFDownloadLink> */}
            </span>
            <img src={logo} width='200' className='bg-hard-light mx-auto' />
            <h2 className='d-flex mx-auto fw-500 flex-column'>
                Bookish Worm
            </h2 >
            <div className='d-flex flex-column my-auto'>
                <div className='border-bottom border-dark border-2'></div>
                <h1 className='d-flex mx-auto my-4 fw-600 text-dark text-capitalize'>
                    {PDF.title}
                </h1>
                <div className='border-top border-dark border-2'></div>
            </div>
            <div className='row' style={{ marginBottom: '150px' }}>
                <div className="col text-capitalize">
                    <i>Auther: </i>
                    <h4>{PDF.auther} </h4>
                </div>
                <div className="col text-capitalize"></div>
                <div className="col text-capitalize">
                    <i>Publisher: </i>
                    <h4>{books.publisher} </h4>
                </div>
            </div>
        </>
    );
};
