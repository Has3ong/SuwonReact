import React from 'react';

function App_footer() {
    return (
        <div>
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase font-weight-bold">Products</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase font-weight-bold">Products</h5>
                        <ul className="list-unstyled">
                            
                            <li><a href="#!">Kim Ha Sung</a></li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase font-weight-bold">Contact</h5>
                        <ul className="list-unstyled">
                            <p><i className="fas fa-home mr-3"></i> Suwon University IT 407 VR LAB</p>
                            <p><i className="fas fa-envelope mr-3"></i> suwonchatbot@gmail.com</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <a href=""> VR Lab</a>
            </div>
        </div>
    );
}

export default App_footer;
