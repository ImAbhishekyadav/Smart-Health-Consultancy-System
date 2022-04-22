import logo from "../Assets/icons8-health-64.png";
import bell from "../Assets/bell.png";
import close from "../Assets/close.png";
import register from "../Assets/add-user.png";
import user from "../Assets/user (1).png";
import {Link} from "react-router-dom";
export default function Navabar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt={"icon"}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/Home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/doctors" className="nav-link active" aria-current="page">Doctors</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item ">
                            <Link className="btn  nav-link" to="/home">
                                <img style={{width:"24px"}} src={bell} alt="Notification"/>
                            </Link>
                        </li>
                        <li className=" nav-item ">
                            <Link to="/login" className=" btn nav-link">
                                <img style={{width:"24px"}} src={close} alt="login"/>
                            </Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link to="/register" className="btn  nav-link">
                                <img style={{width:"24px"}} src={register} alt="register"/>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="#" className="btn  nav-link">
                                <img style={{width:"24px"}} src={user} alt="Profile"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    // return <h1>Navbar</h1>
}