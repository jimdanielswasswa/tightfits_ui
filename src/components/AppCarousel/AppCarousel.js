const AppCarousel = ({images}) => {
    return (<div>
    <div id="carousel-indicators" className="carousel slide m-0 p-0" data-bs-ride="carousel">
        <div className="carousel-indicators">                                
            {images.map((image, index) =>(
                <button type="button" key={index} data-bs-target="#carousel-indicators" data-bs-slide-to={index} className={(index === 0) ? "active" : ""} aria-current={(index === 0)} aria-label={`Slide ${index}`}></button>
            ))}
        </div>
        <div className="carousel-inner" role="listbox">                                
            {images.map((image, index) => (
                <div className={(index === 0) ? "carousel-item active" : "carousel-item"} key={index}>
                    <img src={`http://res.cloudinary.com/dwdonzmlv/${image.image}`} key={image.id} className="d-block w-100 vh-100" alt={`http://res.cloudinary.com/dwdonzmlv/${image.image}`} />
                </div>
            ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-indicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel-indicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>);
};

export default AppCarousel;