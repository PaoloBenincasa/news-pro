
export const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="d-flex flex-column justify-content-between">
            <div className="card bg-dark text-light m-2 d-flex flex-column justify-content-between" >
                <img src={src ? src : "https://picsum.photos/id/10/200/180"} className="card-img-top cardImage" alt="..." />
                <div className="d-flex flex-column justify-content-between h-100">


                    <h5 className="card-title p-1">{title}</h5>
                    <p className="card-text p-1 mb-5 ">{description ? description.slice(0, 220): "no description available"}</p>
                    <a href={url} className="btn btn-primary mx-auto mt-5 mb-3">Read More</a>
                </div>

            </div>

        </div>

    )
}
