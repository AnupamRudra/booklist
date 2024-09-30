import { useEffect } from "react";
import { useCustomContext } from "../../../Context/ContextApi";
import Carousels from "../../component/Carousels";
import { Description, ProductData } from "./ProductData";
import { useNavigate } from "react-router-dom";


export const ProductProfile = () => {

    const { books } = useCustomContext()
    const navigate = useNavigate();
    const token = localStorage.getItem('user_token')
    useEffect(() => {
        if (!token) {
            navigate('/user/login')
        }
    })

    return (
        <>
            <div className="bg-light">
                <div className="row">
                    <div className="col-12 col-lg-5 col-md-6 col-sm-12">
                        <Carousels image={books.picture} />
                    </div>
                    <div className="col-12 col-lg-7 col-md-6 col-sm-12">
                        <ProductData books={books} />
                    </div>
                </div>
                {
                    books.description ?
                        <Description description={books.description} />
                        :
                        <></>
                }
            </div>
        </>
    );
};
