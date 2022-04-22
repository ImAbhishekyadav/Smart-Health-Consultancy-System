import doctorImage from "../Assets/undraw_doctors_hwty.svg"
import {Link, useNavigate} from "react-router-dom";
export default function Login(){
    let navigate = useNavigate();
    return(
        <section className="vh-100" style={{backgroundColor: "#ffffff"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{borderRadius: "1rem"}}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block pt-5">
                                    <img
                                        src={doctorImage}
                                        alt="login form"
                                        className="img-fluid align-self-center" style={{borderRadius: "1rem 0 0 1rem"}}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form method="post">

                                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into
                                                your account</h5>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example17">Email
                                                    address:</label>
                                                <input type="email" id="form2Example17"
                                                       className="form-control form-control-lg"/>

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example27">Password:</label>
                                                <input type="password" id="form2Example27"
                                                       className="form-control form-control-lg"/>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-success btn-lg btn-block"
                                                        type="submit" onClick={()=>{
                                                            navigate("/Home");
                                                }}>Login
                                                </button>
                                            </div>

                                            <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an
                                                account? <Link to="/register" style={{color: "#393f81"}}>Register
                                                    here</Link></p>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
