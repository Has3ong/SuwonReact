import React from 'react';

function App_container() {
    return (
        <div class="bd-example">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img width="1000" src="https://proxy.goorm.io//service/5ccda9890e70de7aa094ede1_dbagmjvzeyafyjerlac.run.goorm.io/9080//file/load/apple.jpg?path=d29ya3NwYWNlJTJGU3V3b25Cb3QlMkZzdXdvbiUyRnB1YmxpYyUyRmltZyUyRmFwcGxlLmpwZw==&docker_id=dbagmjvzeyafyjerlac&secure_session_id=qv2i8NL4XcGB1nXLJT5P42dxAEOr4j2z" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img width="1000" src="https://proxy.goorm.io//service/5ccda9890e70de7aa094ede1_dbagmjvzeyafyjerlac.run.goorm.io/9080//file/load/cinnamon.jpg?path=d29ya3NwYWNlJTJGU3V3b25Cb3QlMkZzdXdvbiUyRnB1YmxpYyUyRmltZyUyRmNpbm5hbW9uLmpwZw==&docker_id=dbagmjvzeyafyjerlac&secure_session_id=qv2i8NL4XcGB1nXLJT5P42dxAEOr4j2z" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img width="1000" src="https://proxy.goorm.io//service/5ccda9890e70de7aa094ede1_dbagmjvzeyafyjerlac.run.goorm.io/9080//file/load/gummibarchen.jpg?path=d29ya3NwYWNlJTJGU3V3b25Cb3QlMkZzdXdvbiUyRnB1YmxpYyUyRmltZyUyRmd1bW1pYmFyY2hlbi5qcGc=&docker_id=dbagmjvzeyafyjerlac&secure_session_id=qv2i8NL4XcGB1nXLJT5P42dxAEOr4j2z" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default App_container;
