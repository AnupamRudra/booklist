import { Link } from "react-router-dom";


export const Footer = () => {

    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-auto mb-0 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li><Link className="text-body-secondary" to="/"><i className="fa fa-twitter fs-35px text-info"></i> </Link></li>
                    <li><Link className="text-body-secondary" to="/"><i className="fa fa-facebook fs-35px text-primary"></i></Link></li>
                    <li><Link className="text-body-secondary" to="/"><i className="fa fa-brands fa-square-instagram fs-35px" style={{color:'#6f0643'}}></i></Link></li>
                </ul>
            </footer>
        </>
    );
};
