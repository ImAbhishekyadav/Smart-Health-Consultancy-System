import img1 from "../Assets/pexels-anna-shvets-4225920.jpg";
import img2 from "../Assets/pexels-tima-miroshnichenko-8376232.jpg";
import img3 from "../Assets/pexels-anna-shvets-4586994.jpg";
export default function Carousel(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval={"1000"}
             data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active"
                        aria-current="true" aria-label="Slide 1"/>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"/>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"/>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100"
                         alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

