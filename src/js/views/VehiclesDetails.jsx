import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const VehiclesDetails = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();
    
    useEffect(() => {
        console.log(id);
        actions.getSingleVehicle(id);
      }, []);

    if (store.singleVehicle) {
        return (
            <div className="container">
                <div className="w-100 mt-4">
                    <h1 className="text-dark">{store.singleVehicle.properties.name}</h1>
                </div>
                <div className="card mb-3" style={{maxwidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"} className="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">                                   
                                <h1 className="card-title text-dark fs-1"></h1>{" "}
                                <p className="card-text text-dark fs-5"><strong>Model: </strong>{store.singleVehicle.properties.model}</p>
                                <p className="text-dark fs-5"><strong>Manufacturer: </strong>{store.singleVehicle.properties.manufacturer}</p>
                                <p className="text-dark fs-5"><strong>Cost in credits: </strong>{store.singleVehicle.properties.cost_in_credits}</p>
                                <p className="text-dark fs-5"><strong>Length: </strong>{store.singleVehicle.properties.length}</p>
                                <p className="text-dark fs-5"><strong>Max speed: </strong>{store.singleVehicle.properties.max_atmosphering_speed}</p>
                                <p className="text-dark fs-5"><strong>Crew: </strong>{store.singleVehicle.properties.crew}</p>
                                <p className="text-dark fs-5"><strong>Cargo capacity: </strong>{store.singleVehicle.properties.cargo_capacity}</p>
                                <p className="text-dark fs-5"><strong>Vehicle class: </strong>{store.singleVehicle.properties.vehicle_class}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )} else {
        return <div className="text-center mt-5">Loading please wait...</div>;
      }
        
}

export default VehiclesDetails