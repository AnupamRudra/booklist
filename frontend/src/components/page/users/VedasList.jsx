/* eslint-disable no-unused-vars */
// import { Link } from "react-router-dom"
import rigved from '../../../assets/rigved.webp'
import yajurved from '../../../assets/yajurved.webp'
import samved from '../../../assets/samved.webp'
import atharved from '../../../assets/atharved.webp'

export const VedasList = () => {
    const book = [
        { title: 'Rigved', img: rigved },
        { title: 'Yajurved',img: yajurved },
        { title: 'Samved',img: samved },
        { title: 'Atharv Ved',img: atharved },
    ]

    return (
        <>
            <div className="row p-5 bg-white justify-content-center my-4">
                <h3 className="border border-start-0 rounded-end border-2 border-info p-3">Vedas</h3>
                {
                    book.map((title, i) => {
                        return(
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 my-15px" key={i}>
                            <img
                                src={title.img}
                                className="card-img card-img-shadow mx-auto d-flex m-0" alt="..."
                            />
                            <div className="card-body">
                                <div className="d-flex flex-row justify-content-center my-4">
                                    <button className="one-line fs-15px fw-600 text-white text-capitalize w-fit-content rounded-5 bg-info p-2 px-4 mx-2">{title.title} in Hindi</button>
                                    <button className="one-line fs-14px fw-600 text-white text-capitalize w-fit-content rounded-5 bg-info p-2 px-4 mx-2">{title.title} in English</button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12 my-15px">
                    <img
                        src={rigved}
                        className="card-img card-img-shadow mx-auto d-flex m-0" alt="..."
                    />
                    <div className="card-body">
                        <div className="d-flex flex-row my-4">
                            <p className="one-line fs-14px fw-600 text-white text-capitalize w-fit-content rounded-5 bg-info p-2 px-4 mx-2">title</p>
                            <p className="one-line fs-14px fw-600 text-white text-capitalize w-fit-content rounded-5 bg-info p-2 px-4 mx-2">items.auther.firstName</p>
                        </div>

                    </div>
                </div> */}
            </div>
        </>
    );
};
