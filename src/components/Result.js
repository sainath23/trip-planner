import React from 'react'
import "../styles/styles.css";
import { useLocation } from 'react-router-dom';

function Result() {

    const location = useLocation();

    return (
        
        <div className="p-3 m-0 border-0 bd-example m-0 border-0">
            <div>{console.log(location.state)}</div>
            <div className="container">
        <div className="tp-container bd-grid">
            <div className="tp-content">
                <div className="tp-time">
                    <span className="tp-rounder"></span>
                    <span className="tp-line"></span>
                </div>

                <div className="tp-data bd-grid">
                    <p className="d-inline-flex gap-1">
                        <a
                          className="btn btn-primary collapsed rounded-0 btn-lg btn-arrow-right"
                          data-bs-toggle="collapse"
                          href="#collapseExample"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                        <i className="fa-solid fa-location-dot"></i> Mumbai
                        </a>
                      </p>

                      <div className="collapse" id="collapseExample" >
                        <div className="container mt-3">
                          <br />
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                              
                              <a className="nav-link active" data-bs-toggle="tab" href="#home"><i className="fa-solid fa-hotel"></i> Hotels</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-bs-toggle="tab" href="#menu1"><i className="fa-solid fa-utensils"></i> Restaurants</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-bs-toggle="tab" href="#menu2"><i className="fa-solid fa-credit-card"></i> ATMs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu2"><i className="fa-solid fa-gas-pump"></i> Gas Stations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu2"><i className="fa-solid fa-umbrella-beach"></i> Places to Visit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu2"><i className="fa-solid fa-person-hiking"></i> Activities</a>
                            </li>
                          </ul>
                
                          <div className="tab-content">
                            <div id="home" className="container tab-pane active">
                              <br />
                              <div className="container text-center">
                                <div className="row">
                                  <div className="col">

                                    <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                                        <img src="https://assets.pclncdn.com/agodastatic/hotelImages/186/186713/186713_15052920440028060746.jpg?dpr=2&format=jpg&opto&auto=avif,webp" className="card-img-top rounded-0" alt="..." />
                                        <div className="card-body mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="card-title">Radisson Blue</h4>
                                                    <p className="card-text">
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        (123)
                                                    </p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center text-center g-0">
                                            <div className="col-4">
                                                <h5>$129</h5>
                                            </div>
                                            <div className="col-8">
                                                <a href="/#" className="btn btn-primary w-100 p-3 rounded-0">Book Now!</a>
                                            </div>
                                        </div>
                                    </div>

                                  </div>
                                  <div className="col">
                                    <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                                        <img src="https://assets.pclncdn.com/agodastatic/hotelImages/186/186713/186713_15052920440028060746.jpg?dpr=2&format=jpg&opto&auto=avif,webp" className="card-img-top rounded-0" alt="..." />
                                        <div className="card-body mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="card-title">Radisson Blue</h4>
                                                    <p className="card-text">
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        (123)
                                                    </p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center text-center g-0">
                                            <div className="col-4">
                                                <h5>$129</h5>
                                            </div>
                                            <div className="col-8">
                                                <a href="/#" className="btn btn-primary w-100 p-3 rounded-0">Book Now!</a>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                                        <img src="https://assets.pclncdn.com/agodastatic/hotelImages/186/186713/186713_15052920440028060746.jpg?dpr=2&format=jpg&opto&auto=avif,webp" className="card-img-top rounded-0" alt="..." />
                                        <div className="card-body mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="card-title">Radisson Blue</h4>
                                                    <p className="card-text">
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        <i className="bi bi-star-fill text-warning"></i>
                                                        (123)
                                                    </p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center text-center g-0">
                                            <div className="col-4">
                                                <h5>$129</h5>
                                            </div>
                                            <div className="col-8">
                                                <a href="/#" className="btn btn-primary w-100 p-3 rounded-0">Book Now!</a>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="menu1" className="container tab-pane fade">
                              <br />
                              <h3>Activities</h3>
                              <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                            <div id="menu2" className="container tab-pane fade">
                              <br />
                              <h3>ATMs</h3>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>

            </div>

            <div className="tp-content">
                <div className="tp-time">
                    <span className="tp-rounder"></span>
                    <span className="tp-line"></span>
                </div>

                <div className="tp-data bd-grid">
                    <p className="d-inline-flex gap-1">
                        <a
                          className="btn btn-primary collapsed"
                          data-bs-toggle="collapse"
                          href="#collapseExample2"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample2"
                        >
                          Panvel
                        </a>
                      </p>

                      <div className="collapse" id="collapseExample2" >
                        <div className="container mt-3">
                          <br />
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                              <i className="fa-solid fa-hotel"></i>
                              <a className="nav-link active" data-bs-toggle="tab" href="#home"> Hotels</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-bs-toggle="tab" href="#menu1"
                                >Activities</a
                              >
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-bs-toggle="tab" href="#menu2">ATMs</a>
                            </li>
                          </ul>
                
                          <div className="tab-content">
                            <div id="home" className="container tab-pane active">
                              <br />
                              <div className="container text-center">
                                <div className="row">
                                  <div className="col">
                                    <div className="card" style={{width: "18rem"}}>
                                      <img
                                        src="https://assets.pclncdn.com/agodastatic/hotelImages/186/186713/186713_15052920440028060746.jpg?dpr=2&format=jpg&opto&auto=avif,webp"
                                        className="card-img-top"
                                        alt="..."
                                      />
                                      <div className="card-body">
                                        <h5 className="card-title">Radisson Blue</h5>
                                        <p className="card-text">
                                          Some quick example text to build on the card title and
                                          make up the bulk of the card's content.
                                        </p>
                                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="card" style={{width: "18rem"}}>
                                      <img
                                        src="https://assets.pclncdn.com/agodastatic/hotelImages/186/186713/186713_15052920440028060746.jpg?dpr=2&format=jpg&opto&auto=avif,webp"
                                        className="card-img-top"
                                        alt="..."
                                      />
                                      <div className="card-body">
                                        <h5 className="card-title">Radisson Blue</h5>
                                        <p className="card-text">
                                          Some quick example text to build on the card title and
                                          make up the bulk of the card's content.
                                        </p>
                                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="card" style={{width: "18rem"}}>
                                      <img
                                        src="https://assets.pclncdn.com/agodastatic/hotelImages/186/186713/186713_15052920440028060746.jpg?dpr=2&format=jpg&opto&auto=avif,webp"
                                        className="card-img-top"
                                        alt="..."
                                      />
                                      <div className="card-body">
                                        <h5 className="card-title">Radisson Blue</h5>
                                        <p className="card-text">
                                          Some quick example text to build on the card title and
                                          make up the bulk of the card's content.
                                        </p>
                                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="menu1" className="container tab-pane fade">
                              <br />
                              <h3>Activities</h3>
                              <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                            <div id="menu2" className="container tab-pane fade">
                              <br />
                              <h3>ATMs</h3>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>

            </div>
        </div>


      
      
    </div>

        </div>
        
    )
}

export default Result;