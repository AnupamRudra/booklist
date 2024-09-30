/* eslint-disable react/prop-types */

function Carousels({ image }) {
    const array = image.split(',')

    return (
        <>
            <div id="carouselExampleControlsNoTouching" className="carousel slide m-5" data-bs-touch="false">
                <ol className="carousel-indicators">
                    <li type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                    {
                        array.map((items, i) => {
                            return (
                                <li type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={`${i + 1}`} aria-label={`Slide ${i + 2}`} key={i}></li>
                            )
                        })
                    }
                </ol>
                <div className="carousel-inner" id="zoom-icon" >
                    <div className="carousel-item active" >
                        <img src={array[0]} className="d-block w-auto m-auto" height="600" alt="..." />
                    </div>
                    {
                        array[1] ?
                            <div className="carousel-item">
                                <img src={array[1]} className="d-block w-auto m-auto" height="600" alt="..." />
                            </div>
                            :
                            <></>
                    }
                    {
                        array[2] ?
                            <div className="carousel-item">
                                <img src={array[2]} className="d-block w-auto m-auto" height="600" alt="..." />
                            </div>
                            :
                            <></>
                    }
                    {
                        array[3] ?
                            <div className="carousel-item">
                                <img src={array[3]} className="d-block w-auto m-auto" height="600" alt="..." />
                            </div>
                            :
                            <></>
                    }
                    {
                        array[4] ?
                            <div className="carousel-item">
                                <img src={array[4]} className="d-block w-auto m-auto" height="600" alt="..." />
                            </div>
                            :
                            <></>
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon green" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousels;

