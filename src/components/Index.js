import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/main.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Index() {
    const [formData, setFormData] = useState({
        source: "", 
        destination: "", 
        numOfTravellers: "", 
        drivingHours: ""
      });

      const reqForm = {
        needCar: "",
        source: "", 
        destination: "", 
        numOfTravellers: "", 
        drivingHours: "",
        tripType: "",
        tripCategory: ""
      };
    
      const [needCar, setNeedCar] = useState('');
      const [tripCategory, setTripCategory] = useState('');
      const [tripType, setTripType] = useState('');
    
      const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
      };
    
      const handleTripCategoryChange = (event) => {
        setTripCategory(event.target.value);
      };
    
      const handleNeedCarChange = (event) => {
        setNeedCar(event.target.value);
      };
    
      const handleTripTypeChange = (event) => {
        setTripType(event.target.value);
      };

      const navigate = useNavigate();
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`needCar: ${needCar}, Source: ${formData.source}, Destination:${formData.destination}, numOfTravellers:${formData.numOfTravellers}, drivingHours:${formData.drivingHours}, tripType:${tripType}, tripCategory:${tripCategory} `);

        reqForm.needCar = needCar;
        reqForm.source = formData.source;
        reqForm.destination = formData.destination;
        reqForm.numOfTravellers = formData.numOfTravellers;
        reqForm.drivingHours = formData.drivingHours;
        reqForm.tripType = tripType;
        reqForm.tripCategory = tripCategory;

        console.log("reqForm: ", reqForm);
    
        try {
          //const response = await axios.post("URL", formData);
          //console.log("Response: ", response.data);

          navigate("/result", {state: formData});
    
          //history.push("/results");
        
        } catch (error) {
          console.error("Error: ", error);
        }
      };
    
      return (
        <div className="row">
            <div className="col-md-12">
              
            <form onSubmit={handleSubmit}>
                <h1> What Kind of trip you want </h1>
    
                <fieldset>
    
                  <legend><span className="number">1</span> Your Basic Info</legend>
    
                  <label>Do you need a car</label>
                  <input type="radio" id="car_yes" value="Yes" checked={needCar === "Yes"} onChange={handleNeedCarChange} name="car_required" /><label htmlFor="car_yes" className="light">Yes</label><br />
                  <input type="radio" id="car_no" value="No" checked={needCar === "No"} onChange={handleNeedCarChange} name="car_required" /><label htmlFor="car_no" className="light">No</label><br /><br />
    
                  <label htmlFor="source">Start Point</label>
                  <input type="text" id="source" name="source" value={formData.source} onChange={handleChange} />
    
                  <label htmlFor="destination">End Point</label>
                  <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} />
    
                  <label htmlFor="start_date">Start Date</label>
                  <input type="date" id="start_date" value="start_date" name="start_date" />
    
                  <label htmlFor="end_date">End Date</label>
                  <input type="date" id="end_date" value="end_date" name="end_date" />
    
                  <label htmlFor="numOfTravellers">Number of Travellers</label>
                  <input type="number" id="numOfTravellers" name="numOfTravellers" value={formData.numOfTravellers} onChange={handleChange} />
    
                  <label htmlFor="drivingHours">Number of Driving hours</label>
                  <input type="number" id="drivingHours" name="drivingHours" value={formData.drivingHours} onChange={handleChange} />
    
                  <label>Type of Trip</label>
                  <input type="radio" id="adventure" value="Adventure" name="type_of_trip" onChange={handleTripTypeChange} /><label htmlFor="adventure" className="light">Adventure</label><br />
                  <input type="radio" id="leisure" value="Leisure" name="type_of_trip" onChange={handleTripTypeChange} /><label htmlFor="leisure" className="light">Leisure</label>
    
                </fieldset>
                <fieldset>
    
                  <label>Category of Trip</label>
                  <input type="radio" id="economy" value="Economy" checked={tripCategory === "Economy"} onChange={handleTripCategoryChange} name="category" /><label className="light" htmlFor="economy">Economy</label><br />
                  <input type="radio" id="premium" value="Premium" checked={tripCategory === "Premium"} onChange={handleTripCategoryChange} name="category" /><label className="light" htmlFor="premium">Premium</label><br />
                  <input type="radio" id="luxury"  value="Luxury" checked={tripCategory === "Luxury"} onChange={handleTripCategoryChange} name="category" /><label className="light" htmlFor="luxury">Luxury</label>
    
                </fieldset>
    
                <button type="submit" className="required">Submit</button>
    
              </form>
    
             </div>
    
            </div>
      );
}

export default Index;