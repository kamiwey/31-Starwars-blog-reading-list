import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const CharDetails = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();
    
        useEffect(() => {
        console.log(id);
        actions.getPerson(id);
      }, []);

    if (store.person) {
        return (
                <div className="container">
                            <div className="w-100 mt-4">
                                    <h1 className="text-dark">{store.person.properties.name}</h1>
                            </div>
                            <div className="card mb-3" style={{maxwidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} className="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">                                  
                                    <h1 className="card-title text-dark fs-1"></h1>{" "}
                                    <p className="card-text text-dark fs-5"><strong>Birth Year: </strong>{store.person.properties.birth_year}</p>
                                    <p className="text-dark fs-5"><strong>Height: </strong>{store.person.properties.height}</p>
                                    <p className="text-dark fs-5"><strong>Mass: </strong>{store.person.properties.mass}</p>
                                    <p className="text-dark fs-5"><strong>Hair Color: </strong>{store.person.properties.hair_color}</p>
                                    <p className="text-dark fs-5"><strong>Skin Color: </strong>{store.person.properties.skin_color}</p>
                                    <p className="text-dark fs-5"><strong>Eyes Color: </strong>{store.person.properties.eye_color}</p>
                                    <p className="text-dark fs-5"><strong>Gender: </strong>{store.person.properties.gender}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                </div>
            )} 
        else {
        return <div className="text-center mt-5">Loading please wait...</div>;
      };
};

export default CharDetails;