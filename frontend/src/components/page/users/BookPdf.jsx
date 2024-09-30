/* eslint-disable no-unused-vars */
import './css/pdf.css'
import { useCustomContext } from '../../../Context/ContextApi';
import { FirstPage } from '../../component/FirstPage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const BookPdf = () => {

    const { PDF } = useCustomContext();
    const pics = PDF.pictures.split(',')
    const navigate = useNavigate();
    const token = localStorage.getItem('user_token')
    useEffect(() => {
        if (!token) {
            navigate('/user/login')
        }
    })
    return (
        <>
            <div className='pdf-bg py-2' tabIndex='0'>
                <div className="container A4 pdf-page-bg w-lg-50 w-md-75 w-sm-100 d-flex flex-column h-840 p-70px justify-content-start">
                    <FirstPage />
                    <span className='d-flex justify-content-center page-number' style={{marginBottom:'-60px'}}>1 </span>
                </div>
                {
                    pics.map((img, i) => {
                        return (
                            <div className="container A4 pdf-page-bg w-lg-50 w-md-75 w-sm-100 d-flex flex-column h-840 p-30px justify-content-start" key={i}>
                                <img src={img} className='h-100' />
                                <span className='d-flex justify-content-center page-number'>{i + 2} </span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};
