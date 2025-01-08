
export const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="badge bg-light text-dark">News Pro</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" onClick={()=>setCategory('general')}>General</a></li>
                                    <li><a className="dropdown-item" onClick={()=>setCategory('business')}>Business</a></li>
                                    <li><a className="dropdown-item" onClick={()=>setCategory('entertainment')}>Entertainment</a></li>
                                    <li><a className="dropdown-item" onClick={()=>setCategory('health')}>Health</a></li>
                                    <li><a className="dropdown-item" onClick={()=>setCategory('science')}>Science</a></li>
                                    <li><a className="dropdown-item" onClick={()=>setCategory('sports')}>Sports</a></li>
                                    <li><a className="dropdown-item" onClick={()=>setCategory('technology')}>Technology</a></li>


                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
