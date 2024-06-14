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
                           <a className="nav-link active" data-bs-toggle="tab" href="#home11"><i className="fa-solid fa-hotel"></i> Hotels</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" data-bs-toggle="tab" href="#menu12"><i className="fa-solid fa-utensils"></i> Restaurants</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" data-bs-toggle="tab" href="#menu13"><i className="fa-solid fa-credit-card"></i> ATMs</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" data-bs-toggle="tab" href="#menu14"><i className="fa-solid fa-gas-pump"></i> Gas Stations</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" data-bs-toggle="tab" href="#menu15"><i className="fa-solid fa-umbrella-beach"></i> Places to Visit</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" data-bs-toggle="tab" href="#menu16"><i className="fa-solid fa-person-hiking"></i> Activities</a>
                        </li>
                     </ul>
                     <div className="tab-content">
                        <div id="home11" className="container tab-pane active">
                           <br />
                           <div className="container text-center">
                              <div className="row">
                                 <div className="col">
                                    <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                                    <img src="https://assets.pclncdn.com/agodastatic/hotelImages/438/43880/43880_14042721060019219877.jpg?dpr=2&format=jpg&opto&auto=avif,webpopto=crop=2:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                                    <div className="card-body mt-3 mb-3">
                                       <div className="row">
                                          <div className="col-12">
                                             <h4 className="card-title">JW Marriott Mumbai</h4>
                                             <p className="card-text">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                (123)
                                             </p>
                                          </div>
                                          <div className="col-12">
                                             <p className="card-text">C-57, Bandra Kurla Complex, Mumbai, India Chhatrapati Shivaji International Airport ( BOM ).</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="row align-items-center text-center g-0">
                                       <div className="col-4">
                                          <h5>$75</h5>
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
                                          <p className="card-text">Sakinaka Jct Andheri Kurla Rd, Mumbai, India - Mumbai International Airport ( BOM )
                                             .
                                          </p>
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
                              <img src="https://pix8.agoda.net/hotelImages/50581081/-1/4e7364be07342510ee55ed2a3f2184ae.jpg?ce=0&s=1024x" className="card-img-top rounded-0" alt="..." />
                              <div className="card-body mt-3 mb-3">
                                 <div className="row">
                                    <div className="col-12">
                                       <h4 className="card-title">Holiday Inn Mumbai</h4>
                                       <p className="card-text">
                                          <i className="bi bi-star-fill text-warning"></i>
                                          <i className="bi bi-star-fill text-warning"></i>
                                          <i className="bi bi-star-fill text-warning"></i>
                                          <i className="bi bi-star-fill text-warning"></i>
                                          (123)
                                       </p>
                                    </div>
                                    <div className="col-12">
                                       <p className="card-text">Juhu Tara Road, Mumbai, India - Mumbai North - Chhatrapati Shivaji International Airport ( BOM ).</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="row align-items-center text-center g-0">
                                 <div className="col-4">
                                    <h5>$90</h5>
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
               <div id="menu12" className="container tab-pane fade">
                  <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                  <img src="data:image/jpeg;base64,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" className="card-img-top rounded-0" alt="..." />
                  <div className="card-body mt-3 mb-3">
                     <div className="row">
                        <div className="col-12">
                           <h4 className="card-title">Neelkanth Restaurant</h4>
                           <p className="card-text">
                              <i className="bi bi-star-fill text-warning"></i>
                              <i className="bi bi-star-fill text-warning"></i>
                              <i className="bi bi-star-fill text-warning"></i>
                              <i className="bi bi-star-fill text-warning"></i>
                              (123)
                           </p>
                        </div>
                        <div className="col-12">
                           <p className="card-text">Omkareswer Mortakka Mundi Road, Andheri</p>
                        </div>
                     </div>
                  </div>
               </div>
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
            className="btn btn-primary collapsed rounded-0 btn-lg btn-arrow-right"
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample1"
            >
         <i className="fa-solid fa-location-dot"></i> Panvel
         </a>
      </p>
      <div className="collapse" id="collapseExample1" >
         <div className="container mt-3">
            <br />
            <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="tab" href="#home21"><i className="fa-solid fa-hotel"></i> Hotels</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu22"><i className="fa-solid fa-utensils"></i> Restaurants</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu23"><i className="fa-solid fa-credit-card"></i> ATMs</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu24"><i className="fa-solid fa-gas-pump"></i> Gas Stations</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu25"><i className="fa-solid fa-umbrella-beach"></i> Places to Visit</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu26"><i className="fa-solid fa-person-hiking"></i> Activities</a>
               </li>
            </ul>
            <div className="tab-content">
               <div id="home21" className="container tab-pane active">
                  <br />
                  <div className="container text-center">
                     <div className="row">
                        <div className="col">
                           <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                           <img src="https://assets.pclncdn.com/bstatic/xdata/images/hotel/354181469.jpg?k=411a1caff86ea0c3a5e3b413ab09a1455d3d92c754b53fd363cbd3a2eeb425c7&o=&dpr=2&format=jpg&opto&auto=avif,webpopto=crop=1:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                           <div className="card-body mt-3 mb-3">
                              <div className="row">
                                 <div className="col-12">
                                    <h4 className="card-title">Lake View Villa 4Bhk Karjat</h4>
                                    <p className="card-text">
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       (123)
                                    </p>
                                 </div>
                                 <div className="col-12">
                                    <p className="card-text">Nadhal, Karjat, Karjat, India - Mumbai, India</p>
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
                        <img src="https://assets.pclncdn.com/agodastatic/hotelImages/45286849/0/b13e5603f62c704dab8e6fe91d3c671b.jpg?dpr=2&format=jpg&opto&auto=avif,webpopto=crop=1:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                        <div className="card-body mt-3 mb-3">
                           <div className="row">
                              <div className="col-12">
                                 <h4 className="card-title">Raaj Resort</h4>
                                 <p className="card-text">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    (123)
                                 </p>
                              </div>
                              <div className="col-12">
                                 <p className="card-text">Usarli Budruk Near Ritghar, Panvel Near Ritghar, Panvel, Panvel, Mumbai
                                    .
                                 </p>
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
                     <img src="https://assets.pclncdn.com/agodastatic/hotelImages/109/109249/109249_14030523170018570844.jpg?dpr=2&format=jpg&opto&auto=avif,webp&width=450" className="card-img-top rounded-0" alt="..." />
                     <div className="card-body mt-3 mb-3">
                        <div className="row">
                           <div className="col-12">
                              <h4 className="card-title">Fortune Select Exotica Navi Hotel</h4>
                              <p className="card-text">
                                 <i className="bi bi-star-fill text-warning"></i>
                                 <i className="bi bi-star-fill text-warning"></i>
                                 <i className="bi bi-star-fill text-warning"></i>
                                 <i className="bi bi-star-fill text-warning"></i>
                                 (123)
                              </p>
                           </div>
                           <div className="col-12">
                              <p className="card-text">Plot No. 16 Sector 19-D Vashi
                                 .
                              </p>
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
      <div id="menu24" className="container tab-pane fade">
         <br />
         <h3>Activities</h3>
         <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
         </p>
      </div>
      <div id="menu23" className="container tab-pane fade">
         <div className="container text-center">
            <div className="row">
               <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
               <img src="data:image/jpeg;base64,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" className="card-img-top rounded-0" alt="..." />
               <div className="card-body mt-3 mb-3">
                  <div className="row">
                     <div className="col-12">
                        <h4 className="card-title"> HDFC Bank ATM
                        </h4>
                        <p className="card-text">
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           (123)
                        </p>
                     </div>
                     <div className="col-12">
                        <p className="card-text">Chiplun Killa, Bhagwati Fort And Light House</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
            <img src="https://media.istockphoto.com/id/625872412/photo/young-woman-using-atm.jpg?s=612x612&w=0&k=20&c=2GVb7gzw14_ijLOucVF8d9wMmxw0qm2yY6cx12-Ff_E=" className="card-img-top rounded-0" alt="..." />
            <div className="card-body mt-3 mb-3">
               <div className="row">
                  <div className="col-12">
                     <h4 className="card-title">
                        ICICI BANK ATM
                        Cashpoint
                        ICICI BANK ATM
                     </h4>
                     <p className="card-text">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        (123)
                     </p>
                  </div>
                  <div className="col-12">
                     <p className="card-text">Commerz, Level, 1, behind Oberoi Mall, Yashodham</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
         <img src="data:image/jpeg;base64,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" className="card-img-top rounded-0" alt="..." />
         <div className="card-body mt-3 mb-3">
            <div className="row">
               <div className="col-12">
                  <h4 className="card-title">Axis Bank ATM
                  </h4>
                  <p className="card-text">
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     (123)
                  </p>
               </div>
               <div className="col-12">
                  <p className="card-text">Chiplun Killa, Bhagwati Fort And Light House</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
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
            className="btn btn-primary collapsed rounded-0 btn-lg btn-arrow-right"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
            >
         <i className="fa-solid fa-location-dot"></i> Chiplun
         </a>
      </p>
      <div className="collapse" id="collapseExample2" >
         <div className="container mt-3">
            <br />
            <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="tab" href="#home31"><i className="fa-solid fa-hotel"></i> Hotels</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu32"><i className="fa-solid fa-utensils"></i> Restaurants</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu33"><i className="fa-solid fa-credit-card"></i> ATMs</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu34"><i className="fa-solid fa-gas-pump"></i> Gas Stations</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu35"><i className="fa-solid fa-umbrella-beach"></i> Places to Visit</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu36"><i className="fa-solid fa-person-hiking"></i> Activities</a>
               </li>
            </ul>
            <div className="tab-content">
               <div id="home31" className="container tab-pane active">
                  <br />
                  <div className="container text-center">
                     <div className="row">
                        <div className="col">
                           <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                           <img src="https://assets.pclncdn.com/agodastatic/hotelImages/218/2181550/2181550_17042113180052533238.jpg?dpr=2&format=jpg&opto&auto=avif,webpopto=crop=1:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                           <div className="card-body mt-3 mb-3">
                              <div className="row">
                                 <div className="col-12">
                                    <h4 className="card-title">Silver Oak Villa</h4>
                                    <p className="card-text">
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       (123)
                                    </p>
                                 </div>
                                 <div className="col-12">
                                    <p className="card-text">Shahu Nagar, Behind Blue Country Resort, Near St. Xavier's High School, Panchgani</p>
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
                        <img src="https://assets.pclncdn.com/agodastatic/hotelImages/289/289676/289676_15062417510030701242.jpg?dpr=2&format=jpg&opto&auto=avif,webpopto=crop=1:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                        <div className="card-body mt-3 mb-3">
                           <div className="row">
                              <div className="col-12">
                                 <h4 className="card-title">Evershine Keys Prima Resort, Mahabaleshwar</h4>
                                 <p className="card-text">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    (123)
                                 </p>
                              </div>
                              <div className="col-12">
                                 <p className="card-text">C.T.S No 182, Gautam Road, India - Mahabaleshwar
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="row align-items-center text-center g-0">
                           <div className="col-4">
                              <h5>$29</h5>
                           </div>
                           <div className="col-8">
                              <a href="/#" className="btn btn-primary w-100 p-3 rounded-0">Book Now!</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                     <img src="https://assets.pclncdn.com/agodastatic/hotelImages/32314756/0/0f8b1b6df2843214fddd3d95ff964b9b.jpg?dpr=2&format=jpg&opto&auto=avif,webpopto=crop=1:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                     <div className="card-body mt-3 mb-3">
                        <div className="row">
                           <div className="col-12">
                              <h4 className="card-title">Advait Resort, Kshetra Mahabaleshwar</h4>
                              <p className="card-text">
                                 <i className="bi bi-star-fill text-warning"></i>
                                 <i className="bi bi-star-fill text-warning"></i>
                                 <i className="bi bi-star-fill text-warning"></i>
                                 <i className="bi bi-star-fill text-warning"></i>
                                 (123)
                              </p>
                           </div>
                           <div className="col-12">
                              <p className="card-text">Plot No. 99-103, Mahabaleshwar, Maharashtra 412806</p>
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
      <div id="menu33" className="container tab-pane fade">
         <br />
         <h3>Activities</h3>
         <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
         </p>
      </div>
      <div id="menu34" className="container tab-pane fade">
         <div className="container text-center">
            <div className="row">
               <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZicAzBScTmZe6kFgsZjhMb9NWA2g94zTPQ&s" className="card-img-top rounded-0" alt="..." />
               <div className="card-body mt-3 mb-3">
                  <div className="row">
                     <div className="col-12">
                        <h4 className="card-title">CNG Gas Filling Petrol Pump
                        </h4>
                        <p className="card-text">
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           (123)
                        </p>
                     </div>
                     <div className="col-12">
                        <p className="card-text">Chiplun Killa, Bhagwati Fort And Light House</p>
                     </div>
                  </div>
               </div>

            </div>
            <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRzc9Kme8d_LLmNlXTtI2z6ASPiOfwzwhGQ&s" className="card-img-top rounded-0" alt="..." />
            <div className="card-body mt-3 mb-3">
               <div className="row">
                  <div className="col-12">
                     <h4 className="card-title">Bharat Petroleum, Petrol Pump
                     </h4>
                     <p className="card-text">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        (123)
                     </p>
                  </div>
                  <div className="col-12">
                     <p className="card-text">SHAIKH NAKA CHK, Chiplun, Maharashtra 415605</p>
                  </div>
               </div>
            </div>

         </div>
         <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
         <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIQAxgMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EAEEQAAEDAwIDBQUECgAFBQAAAAECAwQABRESIQYTMSJBUWGRFDJxgaEHI1LBFUJTYnKCkrHR8SRUg7LSFiVDY3P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QANhEAAgIBAwIEBAMHBQEBAAAAAAECEQMEEiEFMRMiQVEyYZGhQnGBFDNisdHh8CNSksHxohX/2gAMAwEAAhEDEQA/AMtX2B8iKgBUCFSAfFACxQFixQFiwKAsWKYCxQFixQFjgUCsWKAsfFILFigLFigLFigLH0+VArOkoJOwz8KmU4xVydFRhKbqKtlhuItXUYFcGXqOOPEVZ6WHpmSXM3SDXDtmjzZymJQUUKaUQUnBB2wa4H1DO5XdHoLp2BRqv19Tm9cJzIAU7G/4mON8pHbT8R+Yr0NP1CGTifDPN1HTp4/NDlAACu+zzqZIBQUhwKQ6KtWQLFACxSAVAD4oAbFAD4pgLFAhYpDFQIfFACxQAsUALFAD4oAcJNAEzUZx33UH41zZdZhxd39DqxaLNl7KvzLse1qV7+9ebl6jkl8Co9TD0vHH43YVj2lX6reB41585ym7k7PShCMFUFRyTDaWQp9C1J2KUdrf5Vzyz44+p6en6Tq8/mUKXu+CxBuq48nmQbet8pBBO5OPgAa5nq5P4YnqR6Fhgv8AWzJP/Pc0dsvbUwobWOW+TgpG+DW2PURnw+5wazpU8Cc4O4ojvPDcK5EuhPJkHo4gdT+8O+vTwazJi47o+ez6PHm57Mxdzs0y1rxJbGjOA6ndJ/xXr4dTDL27nkZtJPE+SkE1vZioFGtTlFigBYoAfFArFigBYoAWKAsWKAsWmgB8UALFAD4oAfQfA0WNI7Q0pXQE/ConlhBeZ0awwzm6irLTNvcWQCABXnZepRXEEelh6VOXOR0EolnJI7BPma8/Lq82Xuz0cOkw4vhRfcZg28D2x9ttXXQTlR+Q3rhnlxw7s9bT9P1Op4xwbX2+pXTdVvkps1tdfV05jowkeeP8kVyvWOfGKNnsw6FhwLdrcyS9l/n/AEUJ61Lym+XttAzvFids/DCdh880vAz5f3jpFrqnTtHxpMVv3f8Af+xWYWUJxZ7a4lvvdmObHz0jYV0Q08InlajrGrz3cqXyr/0sxm7pKUeRf2Y8tshTSEEIQsnbT4H61q+Ox53d3Ivo4idiSkN8V25TUhOyJ7CMEeZ8fl6VDjGXLN8eoyY1tT8vt6Grg3FL7IfYeROjftWfeT/EmnulHvyi/Dw5vge1+z7fo/6l5KmZTBKSh1tWx7wfI1pGV8o5cmKUHtmjP3HhRl1wLgqDOeqCCR8q78evnFVLk4MmhjJ3Hg8/0171nzdDhNFhtH0UWFC0UWG0Wiiw2i0UWG0fTRYbRaKLHtH0UrBREEeVFj2nfLPhSckhqF9iZqG44RhJrky67Fj9bO3F0/Lk9KCEazkkBQOTXnZOoZJ8R4R6eLpuKHM+QiqFFhN6pjzbI/fOCfgOprz8mZJ3OR62m0WXL5cEG/yXBVN3Y1FNthPSyP1yNKPX/VcktXbrHGz2odCWNb9ZlUF9ys/cJLmr225tRE/8vFTqWfTcfM0vD1GV+d0i3q+laP8Ac43kl7vt/n6FdsNI+8iWsKV19ouC9ifHT0rSOkxR78nHqOu6zMtsXtXy4+/cZ9UmUNEuc88nuZjDQ39MfnW6qPbg8iTlN3J2wy7wrIttnbuDDUdtKhsgJypI+J/xSeQFEzTypD5++cWrB796NwURaMHcZzTsQRiXiUy37O+USYpGCy+NQ+XePkaQHbLMQviTYpzlomd7Ti8tK/m/zR2GFWuJZFveSjiOG5FcPuz4ycoX5qA2PyqWl3XBvDO4rbJbo+zCr91vTykP2mPEuMIpwFsOjJV4nJ279qieTLHsrOzTYdBmvfPb+ZiCmvsbPgaFposW0fTRYbRaaLFQtNFhQtNFhQ4TTChwg0rHtO22FK6JJrHJqMeP4mb49NkyfCi4xbHFnf8AtXBk6h/sR6GLpyXM2X0W5qOnXJcbZQP1nCBXn5tTKX7yR6mm0W57cELfyQ7c+GklECO9PcH7JOEfNRG1cEtXG6gmz3MfRMiW7UzWNfN8/QryrnIKtD06PC8WYg5zuPAkdPUUtuoy9/Ki/G6VpPgg8svd8L/PqVBy0q5qYIKv+YuTuSfgj/dXDSY07lyYZuu6vItmNqC9kRS5qVjEyW9I/wDqZTymx5bVunGPCPJlKc3cnZXRMSgYiMtMAd+Mq9TRZNI5Lq1q1OOFZ8SaB0XYdyVEVlLafjipasLNLcuMrfLtnsybOVPYwHHHidBx7wPvfWlQuxknpLryiVEfIUJUMmtEF64TUMto1ajvnb60nKkZTlQ14t64MxTSm1oAPVQ29aFIISsqttLJxp1D+/zp2bLktNzJMBPKB1Mn3mHhlB+R/Kndj7DNpty3FORnpVpdUO37OSpC/wAxQr9AtHGmvqrPl9otNOw2j6aVi2i00WG0fT5UWPaOlsk7CplNRVtjjjlJ1FWWGYTjhwARXHk18I8R5OzH0+cvj4L7dqS2jmSCltA/XWdI9TXn5tbNrmVI9LTdPTlUIuT+pIiTAQMRWnpqx1DKMJHxUdq86Wqi/h5Z72Po2WKvUSWNfN8/QrO3V5ZLSJDUZXe1ERz3Phq90VNajJ38qL8TpemflTyv58IpPspzrcZCFftJ7pdcV/INh9apaXGuZOzPL1vVSjtxVBe0ePucOLU8kNuvvSE9AjPLbA8NIrZOMVSR5U3PI7m7fzNHwzwyuaxIWpooCUHliOnGD5q7/hU75PsKkZu4W12NIWl1RUQcbnf/ACKSlZRWSjcDfGabYBeZw+qPbW5y2+yvr2fzqbHtBSWUk4GtPy1CnbIpkT4UznosDqU/4NNSFyTIZeEQPlvDZXozqGc4zU743Q13EgkHOAaoGrCtrvr1sfDiYUR8JGAl1GfPPxqUqdk+HzY1zu0+8yVOclplKurbKMJPmfE0PvY1j5CPDHC01+ah13mxWeutCdeT/DuKV3wXW0m4s4acZkqXzY6EY66eVq/l6elK9r5K4kjJqhK1FKPvMfgGavchUT4r6mz5qh8UWOhYoFRM1GcdICUHeufJqscOLN8emyT9C+zaVhJW6QhA6qUcAVw5dfJ9uDvwdPTlXMn8jpDkBvVydcop6lhPZH85wK8yesUnxcme9j6PkxxvM1jXz7/TuQm7OLGiJy2j4R089Q+KtkA1L8ef8KNN3TNP6PK/ov6lF1POP3hSpf45DhkL9PdFL9nxrmTsmfWNS1txVBfw8ffuG7Hwy/enSJrrgZSnKVPEFJ8ggYA+tWpxXEEebNym903bBs6DOgvrYIU20lWE8pISCPHajxLDaDnU6Tjf5miwodTTiWEuFKghZISrGxpXyAzEmUwDyJL7QUMKCHCnI8DimOjttOUFxeT4mkCL8B61oWlUxlxwDuQcVLsao2ly4p4fes7cZTS3QAByQ3jGPP8A3VelC5uzHvPNy3cW6E6kE7AHJqfzKsUuE8h5aXmyhzSnUlQ3G1QqEyx7M4OElyWkgrE4I0lIO2nPSlXnsSXNg9pp59OF2d1wfiYCk4/uKvj3HT9iJ+3OIa5jQWg52Q8E5+hP9q0jGUuysUpRj3Y8eDOIBW8Gh4p3NdEdJml2iYS1OKPqdRrvGiSQDOmagNRUX+WB6b1a0MvxSSMnro/hjZ1K4vgNqS640h1aiMreRzFDwOVk1p+y4Y/FJsz/AGzLL4YoD37jeWXg1bZbiGkH32DgK+QxSnHBHiMRRy5pd5UEkNKXslJV8K9aeWEO7OGOKU+IovMWt1SdbhCEDcqUcAfOuLLr1H4V9Tsw9PnN0+fkidpMFlsqRrkkblTQGn+s4T9a83LrpTdJt/ke3i6M8S3Zaxr+Lv8ATuQruy9WiKltPhyEc0/1qwj0zWD8aa5qP8zfdoMHZSyP/iv6v7FJyQqS4OatBV+J8l9Q+AOED4AGl4GPvJ2KXU9Q1txVBfw8ffuHbHZLZc5jSbpcg4P2bjm/wAI0gfAVpGSXCVHBPc+ZO2V+IbZFgTHGo0xp5lJ7LanDlPl2dqltt9wUVXYFJYaUcNtOpPihWfy/Op5KoKM2q+22ELlDlSGWHNsoWUn5jNF1yJrmgU57eteoqcklSt1aiTnzzSc0u5ST9CR+DLQ8pKo+vT107g/OlHIpK0TTCc65xXLHGgm2vIdaOSpxXZ38wM+tMnY7sCoYDqgAttA/eViqKo1ltsMNXDslSrhHMg+6UOjSPI9/0o+Yr9DPq4dn7lKCpH4/dT6nFFjo5TY5CnUtpfYU4o7IbXzFeic0bhltNqctz5anTlRX0gHQo6M/Be6fWl3Cyd0LUoqK1rJA7SnUuE/zDY1SgTKQcsH3FjdUtege0/XAopJ8ijbdIklQ2JJy866VH8bqlf8AdXRjyxh2JyaeUu9lJdkH/wAEjH8Q/MV2w1td19DjlpK9fqY+98PcSMqccgNrkp1bct9JyPHCsfTNVLVprgyjo5J8mLukO6M6/wBIwn4ySMqW6lWE48DWEpb/AFNI49oGU86s7LWrA3OrOKydmiivQZpatGSpY3xt0pUwcaPYF3QIQoxmwEpOFLQgqx/MrA9AfnXM3ml3pfdnsKWixLypzf8AxX25K0R5+7zmo6CkrcVpCnDrI/q2HySKjwoLmXLG+oZ6246gvaKr793+rFcYqY0txmS9lxk4JcSp3HwO+PkBVKbqkqONq3bdsOcMXdi3c9KIkeWt5GkEKWFHyOpNF+4nEF3S2y2Xi47akxArtBPNyCPmaVlHTVuQpyG7KDzTLiQvKWSvUn5UrsdMbiNmCm5LctTy1tYHVpQ3+JAp2TyVYPtK3kpZdCTnGS4BihlI0d9e4igrRb48xT7WkKBbxq37vGj5MVXyivakym0rVNaVzQ4cpX1xgdaxyRtmkXSLly4wsVh9ost3DQcXpWSW1q2I6nAwOnjVYYvw6SM5uKlywcxdeHpAKoNwbcOdkfpAMj+k5NVsl7D3R9wh7DZplveXIktIeA+7SyjXk+Z3z9KXoD+Rm3g/EURGfdbT4pa5Z9etNV6gRMMyJ8tlrmOvOLWE5UoqPXzqrEy7dmbpw9dnGmX3mwg5CkqwCPh30E2mDp9wn3R/XOlOOrO2+30G1Oq5GaGFCXEjpjugpWgbg/E1ceUZy7l2bzk8KSBFOHBKR+qFbbZ2IIqZcDgZq33GXnToYKQcdnU0PRJA+lQ5mqT9zTMNhVpM9dxQwtKscrmpV+QP1oTVFb5p0U2rusEJTLSo9O02rB/7qe9+jDh94L+QWdfuUZKfa4eUKGQQcZHjgnP0q98iduOXv/MGTYNhnkuzrGwpR6ucgBQ+JGDVLI/Yl4ov4Zf9AORwRwpMyYjsmNvulh3I9FA4qllj6ienn7GktTsp6EbMqNAjsPqypbikLx8k4z6Vg4tcMacXyZ+fZfZrmYqClS9RCVJSNJ+uamUmkOKt0FIlmWtV2gpjB50MpUHuZpDYAByAevWlCTlGyZKmBWrdcGRzY8p5lI/XHMQPXGPrVbijQLVIlWtIu8ie/IU4EtrCRyQjHQ/5NKXKBcM4vrQZZsjvZKkRtkltKs9PxEVMU0uxpSk+9Es27szXEuy2iwpCQkYZWyn5kHf+qtPK+/H6C8OS+Hn9UBZEW6zir2a42jkA40GOrP8AUpajVxWJPlmc4Z6qq/Qz8/hHjGSVoavbC2O5tMhaNvglIFaXD8Jltn+I03AFhnWezyY100B5cguAoXqBGkD8qyy9zTHwjPfahYrvcOMHZUG3PSGDHaTqbAxkJ3HXzqsPEaM8vxGLds15jJKZFrloBOBlo4rauDJpnYsN7ewG7W6MdFHCfqSKkpJhiFYOJW2XAHDG2SEn2xScY650mquNcoajK+AlFi3hgNqkX1kuI3GcOeHed6zfheqLWPK+wZRzHhzJJMtxWCpz2dRKuvePl6UmoPsmWseRd2WEKU0pL0exvK0nIKGVDf8An2+lZNR+Zai/VoNKub91/wCLktcp1fZKPDG1bY+3JjNU+AjAuEW12aTLuLJeYQ8nUgDOScAVOQcDKhLkxmRKtFufUjmYCUDVgnJA3IrmfuzdP2LC+Gbsu2JW/qiyOarUlxSBhOBg7E99LfFMrbJrg6jcNutI1ucRBpwddL6U49Mf3p+LBDWHK3wg0vhl6925xLl9ff1pSlt/WVpRpO+BnfwNLxFJprkTxShcZcMHo+zflr1G+TQrxYabQfUg1fifInw/mQSuArfIAbudwu8wJOU86UNj8kirWRkPEjxC6T3p8guvqC17bn8q6cknKVs44QUTRfZm++5xZBjh94Nq1Zb1nT7p7qykltNsdqQX+0q8T7b9oE5uLIUhKEMYTgYzykms8cfKPK5KXBRi/aJf4gd5SoSkOo0rK44yR4ZBFaqEX2M1kl6h7hH7Qpt0msWKTbYYakqOHG1ujQQCrISpahnbyoljrk0UrYb+0y+x7QLG1JjOPIUy4UFlaUqTgpHeDWUI22XKSRnpn2mQJb8SQqDPU8wkJUXH0nm4Pfpx3VbiRvSNBaOLrReJ6Zj0dyCw7qH3oaLSSEnfBJPXHQVnJUrs6MOPJk5hFv8AIJqMP2wLjW125wcD75oIAUcb4Or8hWUZwfdo1nDPB1TLNmC2W3kLbLfbyElOCB+daxcX2ZjPf+NP9QfxXebPBvsti53B2NJLDSmQOZp+KsDHdTjF1wT4lf8AhG21a5nC7l5Tc3lNMrwp0O9nYgdCPPxqbkpbStyq6X0Kce4cLrXE03RDxWr71L05KAgZ78Hw32qtkheKvl9BSnbI/KV+jlscsZO7iDg94BUok+Ro2i8V+4bjMtforly2WUBxJSw82lvKlnGO2Mjbr3VKfLSG7asyN+sLntC5Lkh0x1nQ2rl686UpBxlY+NWoN+p6OLXxxQUdgWhR/wD0zFdMtEwN6QvmtxwU4OO8LP4hXn59K58RlRs+pxfxQL8W/R7lGdEWY86EkDS62tJHqMU9Nps+HJcpWvzZzajU6fNCoxp/kTS3Uu8KXALfSx96g8wpCtO47jtXpRuS5PNfDpMrfZndZUtdztwuTUkoe1NJcSkEtaR2gPDJA+dc2phO1sVI3088aT8Tl+hLJ4EnSpLvNnRU6lkjCXFkAn+EVwfs7T5l/M9n/wDVhtSUH9hM/Z283jN2QMHuj9PVQp+BB95Ga6o12h9zX2G2i021uCZ5cKCo6ygDOTnxNdMHCCpM8/PnnmyObXcuLDAGVSlHI6BQ/wAVW6Jjcwev2Mndbqv+oP8Axp7/AJC59zwmJwbbng2uTeDGS4nUhbhbIV5DtVrPPOP4GbPSYUuMy+4b4X4dh2Him1zIt4amh1TiQlKQCOwrfIJ8MfOlDPLJacWjKWnjCnGSdknGXD0e98bXiU/dWInILAWh1AV2eS2ck6htvipllljpKLf5FQwwyNylJKvQhbi2S26nbjbUz2ADkxYQUE/vEhQ7PnSl+0NrbKr9zpyS0O3iD/Rl62K4YVcLbLs9qdjyFuLU0vQUjSlJCj7523x0qovVbvPJNHNN6Vx8idlf7ZGXJUSzSWgCiPHWXMnBAK0Abd+5rbH6nPl9Dzti1TnltcqMpZeSFNJSpOpYPeBnPca0oyo2XDVouMWM0LrbmUQivDTi8FRJOT39PlWT2Tbi+52YM+fEtsZUg/eZ1ws85tuzJiqtDqdTS3EHX13JwQMHurmx6LDqIyntraa5eoaiGRRcu4UsN0lTmJSpCWUlhaUjlJIBykHvJ7zVQ00MSrGRPUTyu5mN+1mPJn8doYhsOOvLhNYQ2Mk4zXSmoxtujllBylSD9shSIP2I3ePOYWy+lbitLgwfeRWUZxnkUouzRxlGDUlR42TvsPWuuznLUVt2R9zHiqeUNzobKleg7qe+u41Ft8HovE0Yo+x+wJdQUPIlYUhacFPv9RWEFc20aTtRSYE4GDiI88tpACilJOnyVXRW3uZehvOIIj0x1RhsvEKZbLymz7x0p2UO/wB1JrLTRj55Tf5F6i04qCIOHWHGEymn2VNqyhWlacHBzvTSsdsk4ryngO8af3O795NVVEN2Yj7KbyLPxE/Nf5jiG4TmUoxnco6ZrHMm4F463Hs0C4P3pmFIiLEcS1LyHkaykJCu4Eb5TXIoLmzp3ccBE2uer37oB/DGH5k0VEfm9wNfDcLdGmoZnlx5KWlNuraQNOpeCMYx3d9DSS3Ct3TMfebtxDCJR+l0rwMko5Z2z02TWePIp+hp/prvZHFvU6cjUzKmuADdQaUAfgdODUyjql2R1RydOa5TKXCkKRcGY8OOwiS17MpolwpGkJIJI/qHrXfO1JTira7fM8mK3RcX6k0W1SLXxlZGJqOQ4hpxQZLgWNJ/CR3ZBqk912CW1pIV8UmLx7fXXu0lcdkLQN9KeUnJ37+8Vm/hSRd+dnVojyv0mqFBajrZlKXHKVuYylshRCTnbY9fOqyTdrIl5l2/MnHjtSj6E8eySLXcmlraYbfaWvLbchRA17kkkHYjGwrox4p5Vvb7mUpxxvakELpAj8XRnIL0pUZyIgMuaE5G5SsEE4yOz4Co27ZNeptOEtkZvswfE4Rbt0pD36UQ4tqMI6NbB2Aznod+tUm48mWyx7q0wywVJkp1oSlCilG5SAdvhScnIe1IsW20cQ3KA+r/ANve9neLCQ4tOAUq7afd2z076wbmnUez7lpRfMvQvWq3vWtl8SgymQ8dTjbStSUkbbeW1V3GgFxlCfV9oMd+OXUutx2iV6sJQFKUMqI3Cd+vdUyfDT7CipOflD8+M8v7Or9F5iX3EkoS4lwrSrdPRStyKjF8SNMlpNM8kj8PyW1K5sIPg4A++Ax49DXowg6tq/1OGTfo6DnC9tmx7sgsxfZEqGhx5b6tAByQCRnGdJrn1Xh7KkjfSrLv8rNhxQHneCYJc1PFuflWglRIyqlpUoOkXncn8XcytvkqZiuxUtuNtFzmZdHaJ3762zbdykYRlQe4YtL93u7baZ0VLqm1SEodB1FI7BwcHcd48K58sG4eU2jPm2F4dhncP5amzIslKkJQ2GNR0JT3HIHjWsY0S3ZeaiouFpnRFpYUleNnxlGfPY+FGRPbwSu5mE8FG3vS5qV25kKjqbKEPKS2SSOuoDT0rnbbjtfc1iqlYYsN8gQ7REjvTHIEqM46SG2wdOVuDHaSodFVEYSS55L3RLU3jVmOlJavFwkknflssDT8ctimofIN/wAyNfENkuEZ72u6Pv8APQlKi42AUgEkDsoA6k+NPYxb0UHVcJvNKQqXKcB35aMgqPgOzS8F3uYXF8GWncCqXJVIMlx1DgBSlthJ5Y7knKu4VvZDjToLtTS1LLsK3JipxhIZmKRpyAFepANc+bFklLyypfkdWDNjhFqULZOJDypqJwaCpLadLZfk6wAe7J376rEnBVN2yc01klcVQIuF2ccv8yTNbU4HFDWlrfsjGQMjfYYA27q6nGDijkTkpMIquMNu4pkW1u6RgkkoCWkqIKgkKO+euPoK4M6zXUKo79NPBGLeRckcqRdpDsl2NJlvOuJKWw+wlOk9Acjbb4etdODUZIRUZ/Z/2ObUY8c5OUP5f3A9l40kW9b8ObAekTlvY+6QkLVjYAgdd891aym5OzGPCoFtvuzpMqbcAlUovqHLdRks4/VwRtjp8q0xRUjPJJo1lpbhXVmSLrMTFdbaPLGoDmbdQDWco8WaJ2ErPcn7aw+3HvVpSXX1vrDiM9pWCr9fp8q8qWryX8D+h7cNNpK7/wD1/Yif4jDEp4XNaVbA8+O0pTa+uTkDbwx5Z767cdzVs83OoRm1Dt9S9dpcK6XP2yKS80WENg4Ukgjr3j930pZavaycfuQpbBCgloqCt1AqUQT5jOKyTS4Ro1fLOuRgbQ0Y/wDzqvEl/uJ2L2OfZm1OalRGtXTOnfy/P1pSk5d2NLb2AN1usiDNdZZjMN6Dt2Mk53767sGFSgm2cmbLJSqkWookX9uMqQwlkK1paUlOEqVWngpPuzPxXJcliNCunD90jPOQfaFxGljLT6dKkrUT34PQkYrkyapY5qD7np6fQLLi8Rzr9GG/0pMuaimXbXYZbHZK1ZC8+FXiy+JfyM9VpYadLbK7Jy25+g7iWXOU4NBQvAOCD4Vpk4izkjzIz6kTnxplXV1xs9Wwy2keunP1rhuXojq2oiNsgpB0o3O5JwM+gqUsvuFQ9iJdshHZSAoeAURVrxPcVQ9jgW23oGluOsY7+caqsvuTUfYQtzJ6M58tav8ANFZfcKgAXuGp4mOFhzEZWSkHTqSfDcHat47kiGuQk2/jvrpeMxUyyl5JxqOfjU+EVvJUvI/CaXhD8Q75jZ7letT4Q/EHAZ3OHt+uHiP7UniHvIf0fbTI9oMYF79oXVFXrnNG11QWjhdrtiitXs6UrWcqUHFAqPid96cd8exMlGXc7TDgpcSsNdpKdIPMV09fOh7wqBKlEJAwmOnHhk1G2RXlO0+xHZUVBT3g75qXBlJxLSJUNsYS2tIHcnas3ib7lKaQxnQ8+46f5qXhMe9De1Mq9xhfzVS8Nj3nTUwtqGpsfOk8YbzM3xEqTdJLyIzpQSNOlGdsCvRwNRgkcWZOUmzi3ruEZCZENqQiU2oBILOwGd9iMVo5RTMtstobkz+IJa0rckHtJwrLLYOMYwNq8/PotPmyeJNWz0NPrtThx7IdiB+JKlgJuDxf0+5qcS3o/oAz86rDp8OBt4lVk5tRmz14juh7dAVCmcxclK2CQQwXVHu6GtZNuNUYxjUrbDi37YRgM4PxNc6xzXc3c4lV4xcfd5HlmrUGLeVVOIB2qtpO4jU8BvmntE5HAfx0UKraKx+evuVToHIEA4rsOSyRLhA76KKs6DppUPcdpdz+tU0OzrXv71G0LOteO/60to7H5g780UKxczwpbR2PzVf6pbR2LmKPQUtgWOHFjuFLYPcPz1j9UUvDQ944kHwpeGg3C5+21HhoN4jIOMalD4GqUA3HBdIHvlXxp7SdxyJC0+7pp7RWIy3/APVFAcGY6R2jt5UUByZSvOhoZz7UrxNKgsRlqzvvS2jsb2oHwpqIWN7Tk9kk/KjaKxw+rw9adBZLIaSk7ZrcxZBgCmkIYdaAs6HWprkdnRGTToLHIxRQWMTtSoLHSTgUUMkz2aKGIE5qQsck0UFiJNIaOTuKKGIdKKAXdQA1AHNAHJoAiJNIlvkVMLHIGKKHZzgUUFnfLR4UCOFpCelA7OMkUDP/2Q==" className="card-img-top rounded-0" alt="..." />
         <div className="card-body mt-3 mb-3">
            <div className="row">
               <div className="col-12">
                  <h4 className="card-title">G B Mehta & Sons Petroleum

                  </h4>
                  <p className="card-text">
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     (123)
                  </p>
               </div>
               <div className="col-12">
                  <p className="card-text">NH-66 Mumbai-Goa Highway, Chiplun, Chiplun</p>
               </div>
            </div>
         </div>

      </div>
   </div>
</div>
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
            className="btn btn-primary collapsed rounded-0 btn-lg btn-arrow-right"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample3"
            >
         <i className="fa-solid fa-location-dot"></i> Ratnagiri
         </a>
      </p>
      <div className="collapse" id="collapseExample3" >
         <div className="container mt-3">
            <br />
            <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="tab" href="#home41"><i className="fa-solid fa-hotel"></i> Hotels</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu42"><i className="fa-solid fa-utensils"></i> Restaurants</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu43"><i className="fa-solid fa-credit-card"></i> ATMs</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu44"><i className="fa-solid fa-gas-pump"></i> Gas Stations</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu45"><i className="fa-solid fa-umbrella-beach"></i> Places to Visit</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu46"><i className="fa-solid fa-person-hiking"></i> Activities</a>
               </li>
            </ul>
            <div className="tab-content">
               <div id="home41" className="container tab-pane active">
                  <br />
                  <div className="container text-center">
                     <div className="row">
                        <div className="col">
                           <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                           <img src="https://assets.pclncdn.com/agodastatic/hotelImages/21671661/0/4d42e146bd53cace7ca0f018e0d7bc88.jpg?dpr=2&format=jpg&opto&auto=avif,webpopto=crop=1:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                           <div className="card-body mt-3 mb-3">
                              <div className="row">
                                 <div className="col-12">
                                    <h4 className="card-title">The Happy Cabins</h4>
                                    <p className="card-text">
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       (123)
                                    </p>
                                 </div>
                                 <div className="col-12">
                                    <p className="card-text">709-1 1 Opp Valukeshwar Mandir.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="row align-items-center text-center g-0">
                              <div className="col-4">
                                 <h5>$70</h5>
                              </div>
                              <div className="col-8">
                                 <a href="/#" className="btn btn-primary w-100 p-3 rounded-0">Book Now!</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                        <img src="https://assets.pclncdn.com/agodastatic/hotelImages/42172703/-1/e56bf9c1c8fffb7fdd8dd20b4d4e503d.jpg?dpr=2&format=jpg&opto&auto=avif,webpopto=crop=1:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                        <div className="card-body mt-3 mb-3">
                           <div className="row">
                              <div className="col-12">
                                 <h4 className="card-title">D Star Entertainment</h4>
                                 <p className="card-text">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    (123)
                                 </p>
                              </div>
                              <div className="col-12">
                                 <p className="card-text">A/P. Pedambe, Chiplun</p>
                              </div>
                           </div>
                        </div>
                        <div className="row align-items-center text-center g-0">
                           <div className="col-4">
                              <h5>$37</h5>
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
                              <h4 className="card-title">Hotel Suba Blue</h4>
                              <p className="card-text">
                                 <i className="bi bi-star-fill text-warning"></i>
                                 <i className="bi bi-star-fill text-warning"></i>
                                 <i className="bi bi-star-fill text-warning"></i>
                                 <i className="bi bi-star-fill text-warning"></i>
                                 (123)
                              </p>
                           </div>
                           <div className="col-12">
                              <p className="card-text">Chiplun Guhagar Rd</p>
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
      <div id="menu44" className="container tab-pane fade">
         <br />
         <h3>Activities</h3>
         <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
         </p>
      </div>
      <div id="menu45" className="container tab-pane fade">
         <div className="container text-center">
            <div className="row">
               <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
               <img src="data:image/jpeg;base64,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" className="card-img-top rounded-0" alt="..." />
               <div className="card-body mt-3 mb-3">
                  <div className="row">
                     <div className="col-12">
                        <h4 className="card-title">Ratnadurg Fort
                        </h4>
                        <p className="card-text">
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           (123)
                        </p>
                     </div>
                     <div className="col-12">
                        <p className="card-text">Ratnadurg Killa, Bhagwati Fort And Light House</p>
                     </div>
                  </div>
               </div>

            </div>
            <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
            <img src="data:image/jpeg;base64,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" className="card-img-top rounded-0" alt="..." />
            <div className="card-body mt-3 mb-3">
               <div className="row">
                  <div className="col-12">
                     <h4 className="card-title">Mirya beach

                     </h4>
                     <p className="card-text">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        (123)
                     </p>
                  </div>
                  <div className="col-12">
                     <p className="card-text">279H+HQC, Mirya Rd, Kalbadevi, Maharashtra 415612</p>
                  </div>
               </div>
            </div>

         </div>
         <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
         <img src="data:image/jpeg;base64,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" className="card-img-top rounded-0" alt="..." />
         <div className="card-body mt-3 mb-3">
            <div className="row">
               <div className="col-12">
                  <h4 className="card-title">Mandavi Beach

                  </h4>
                  <p className="card-text">
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     (123)
                  </p>
               </div>
               <div className="col-12">
                  <p className="card-text">X7RP+753, varchiwadi, Mandvi, Ratnagiri, Maharashtra 415612</p>
               </div>
            </div>
         </div>

      </div>
   </div>
</div>
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
            className="btn btn-primary collapsed rounded-0 btn-lg btn-arrow-right"
            data-bs-toggle="collapse"
            href="#collapseExample5"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample5"
            >
         <i className="fa-solid fa-location-dot"></i> Goa
         </a>
      </p>
      <div className="collapse" id="collapseExample5" >
         <div className="container mt-3">
            <br />
            <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="tab" href="#home51"><i className="fa-solid fa-hotel"></i> Hotels</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu52"><i className="fa-solid fa-utensils"></i> Restaurants</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu53"><i className="fa-solid fa-credit-card"></i> ATMs</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu54"><i className="fa-solid fa-gas-pump"></i> Gas Stations</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu55"><i className="fa-solid fa-umbrella-beach"></i> Places to Visit</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu56"><i className="fa-solid fa-person-hiking"></i> Activities</a>
               </li>
            </ul>
            <div className="tab-content">
               <div id="home51" className="container tab-pane active">
                  <br />
                  <div className="container text-center">
                     <div className="row">
                        <div className="col">
                           <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                           <img src="https://assets.pclncdn.com/agodastatic/hotelImages/21671661/0/4d42e146bd53cace7ca0f018e0d7bc88.jpg?dpr=2&format=jpg&opto&auto=avif,webpopto=crop=1:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                           <div className="card-body mt-3 mb-3">
                              <div className="row">
                                 <div className="col-12">
                                    <h4 className="card-title">The Happy Cabins</h4>
                                    <p className="card-text">
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       <i className="bi bi-star-fill text-warning"></i>
                                       (123)
                                    </p>
                                 </div>
                                 <div className="col-12">
                                    <p className="card-text">709-1 1 Opp Valukeshwar Mandir.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="row align-items-center text-center g-0">
                              <div className="col-4">
                                 <h5>$70</h5>
                              </div>
                              <div className="col-8">
                                 <a href="/#" className="btn btn-primary w-100 p-3 rounded-0">Book Now!</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
                        <img src="https://assets.pclncdn.com/agodastatic/hotelImages/42172703/-1/e56bf9c1c8fffb7fdd8dd20b4d4e503d.jpg?dpr=2&format=jpg&opto&auto=avif,webpopto=crop=1:1&width=300&dpr=2" className="card-img-top rounded-0" alt="..." />
                        <div className="card-body mt-3 mb-3">
                           <div className="row">
                              <div className="col-12">
                                 <h4 className="card-title">D Star Entertainment
                                 </h4>
                                 <p className="card-text">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    (123)
                                 </p>
                              </div>
                              <div className="col-12">
                                 <p className="card-text">A/P. Pedambe, Chiplun</p>
                              </div>
                           </div>
                        </div>
                        <div className="row align-items-center text-center g-0">
                           <div className="col-4">
                              <h5>$37</h5>
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
                              <p className="card-text">Chiplun Guhagar Rd</p>
                           </div>
                        </div>
                     </div>
                     <div className="row align-items-center text-center g-0">
                        <div className="col-4">
                           <h5>$129</h5>
                        </div>
                        <div className="col-8">
                           <a href="https://www.priceline.com/relax/at/23654906/from/20240621/to/20240622/rooms/1/?preferredhotelids=23654906" className="btn btn-primary w-100 p-3 rounded-0">Book Now!</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="menu55" className="container tab-pane fade">
         <br />
         <h3>Place to visit</h3>
         <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
         </p>
      </div>
      <div id="menu56" className="container tab-pane fade">
         <div className="container text-center">
            <div className="row">
               <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
               <img src="https://media1.thrillophilia.com/filestore/xkdrj0ytpe6vh0212p6k8k1e4q5c_two-people-riding-a-jet-ski-1430676---Copy_B7D73AF0-0845-4A0F-81696433CBA5F5B1_1c2855bb-8136-4185-b44a6944ee1f12a0.jpg?w=305&h=230&dpr=2.0" className="card-img-top rounded-0" alt="..." />
               <div className="card-body mt-3 mb-3">
                  <div className="row">
                     <div className="col-12">
                        <h4 className="card-title">Water Sports in Vagator, North Goa</h4>
                        <p className="card-text">
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           <i className="bi bi-star-fill text-warning"></i>
                           (123)
                        </p>
                     </div>
                     <div className="col-12">
                        <p className="card-text">Calangute Beach </p>
                     </div>
                  </div>
               </div>

            </div>
            <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
            <img src="https://media1.thrillophilia.com/filestore/wzdvxhv73ig8zx5geezqxu6rxcpg_dl.beatsnoop.com-high-bb2ae5ffbf79d98013.jpg?w=305&h=230&dpr=2.0" className="card-img-top rounded-0" alt="..." />
            <div className="card-body mt-3 mb-3">
               <div className="row">
                  <div className="col-12">
                     <h4 className="card-title">Calangute Beach Water Sports</h4>
                     <p className="card-text">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        (123)
                     </p>
                  </div>
                  <div className="col-12">
                     <p className="card-text">Bhaga Beach</p>
                  </div>
               </div>
            </div>

         </div>
         <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
         <img src="https://media1.thrillophilia.com/filestore/yan7mfpyv0dqbhxbr636d5xk0pnx_1586455044_1542130825_shutterstock_542535853.jpg?w=305&h=230&dpr=2.0" className="card-img-top rounded-0" alt="..." />
         <div className="card-body mt-3 mb-3">
            <div className="row">
               <div className="col-12">
                  <h4 className="card-title">Flyboarding in North Goa
</h4>
                  <p className="card-text">
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     <i className="bi bi-star-fill text-warning"></i>
                     (123)
                  </p>
               </div>
               <div className="col-12">
                  <p className="card-text">Calangute Beach </p>
               </div>
            </div>
         </div>

      </div>
   </div>
</div>
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