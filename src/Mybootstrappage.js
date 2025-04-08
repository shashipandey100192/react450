import React from 'react'
import myimg from './myphotos/img2.jpg';
const impath = "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg";


function Mybootstrappage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>use of bootstrap</h1>

                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card">
                        <img src={impath} className="card-img-top" alt='image'/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card">
                        <img src={impath} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card">
                        <img src={impath} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card">
                        <img src={impath} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card">
                        <img src={impath} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card">
                        <img src={impath} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">CDN image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mt-3'>
                    <div className="card">
                        <img src="images/img3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">image from public folder</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mt-3'>
                    <div className="card">
                        <img src={myimg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">image from src folder</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mybootstrappage