
export default function MovieCard({title, description, poster}) {

    return (
        <div className="card shadow-sm">
        <img src={poster} alt="card image" className="card-img-top" />

            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
