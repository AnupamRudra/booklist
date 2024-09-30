/* eslint-disable react/prop-types */
import ganesh_ji from '../../assets/ganesh_jii.jpeg'
import ganesh_mantra from '../../assets/ganesh_mantra.png'
import { HomeHeader } from './PageHeader';

export const Hero = ({setSearchList}) => {

    return (
        <>
            <div className="hero bg-dark-blue w-100 h-100" >
                <div className="row">
                    <div className="hero-col-1 col-lg-6 col-md-6 col-sm-12 col-12"></div>
                    <div className="hero-col-2 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src={ganesh_ji} width='500' />
                    </div>
                </div>
                <HomeHeader setSearchList={setSearchList} />
                <img src={ganesh_mantra} width="250" className='d-flex hero-img' />
            </div>
        </>
    );
};
