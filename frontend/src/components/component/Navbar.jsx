/* eslint-disable no-unused-vars */
import './css/style.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-book.png'
import { useCustomContext } from '../../Context/ContextApi';

export const Navbar = () => {

    const { user, setUser } = useCustomContext()

    const navigate = useNavigate();
    const token = localStorage.getItem('admin_token')

    const handleLogout = () => {
        localStorage.removeItem('user_token')
        localStorage.removeItem('admin_token')
        setUser([])
        navigate('/user/login')
    }

    return (
        <>
            <nav className={`navbar navbar-expand-md p-0 navbar-light bg-gainsboro box-shadow mb-0`}>
                <div className="container-fluid mt-0">
                    <Link className="navbar-brand me-auto py-0" to="/">
                        <img src={logo} width='50' className='bg-remove' />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" style={{}}>
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/history">History</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle toggle-btn"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Myth
                                </Link>
                                <ul className={`dropdown-menu`}>
                                    <li><Link className="dropdown-item" to="/ved">Ved</Link></li>
                                    <li><Link className="dropdown-item" to="/purana">Purana</Link></li>
                                    <li><Link className="dropdown-item" to="/upnishad">Upnishad</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/others">Others</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle toggle-btn"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Other Books
                                </Link>
                                <ul className={`dropdown-menu`}>
                                    <li><Link className="dropdown-item" to="/AutobioGraphy">AutobioGraphy</Link></li>
                                    <li><Link className="dropdown-item" to="/Biography">Biography</Link></li>
                                    <li><Link className="dropdown-item" to="/Horror">Horror</Link></li>
                                    <li><Link className="dropdown-item" to="/Crime Fiction">Crime Fiction</Link></li>
                                    <li><Link className="dropdown-item" to="/Poetry">Poetry</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/Others">Others</Link></li>
                                </ul>
                            </li>
                            {
                                token ?
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link dropdown-toggle toggle-btn login-toggle"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {user.username}
                                        </Link>
                                        <ul className={`dropdown-menu py-4 px-2 w-fit-content mn-w-100`} >
                                            <li><Link className="btn dropdown-item user-icon-link p-1" to="/user/login">
                                                <i className='fa fa-user user-icon'></i>
                                            </Link></li>
                                            <li><button
                                                className="btn dropdown-item mt-4 btn-outline-info justify-content-md d-flex"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </button></li>
                                        </ul>
                                    </li>
                                    :
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link dropdown-toggle toggle-btn login-toggle"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Login
                                        </Link>
                                        <ul className={`dropdown-menu py-4 px-2 w-fit-content mn-w-100`}>
                                            <li><Link className="dropdown-item" to="/user/login">User</Link></li>
                                            <li><Link className="dropdown-item" to="/admin/login">Admin</Link></li>
                                        </ul>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            {
                token ?
                    <ul className="nav bg-light justify-content-center admin-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/book/store">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/book/add">Add Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/Blog/${user._id}/${user.username}`}>Blog</Link>
                        </li>
                    </ul>
                    :
                    <></>
            }
        </>
    );
};
