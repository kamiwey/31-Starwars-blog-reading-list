import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Characters = () => {
    const {store, actions} = useContext(Context);

    return(
        <div className="row d-flex flex-column" style={{height: "32rem", overflowX:"auto"}}>
            {store.people.map((value, i) => ( 
                <div key={i} className="card p-0 m-3" style={{width: '15rem'}}>
                    <img src={"https://starwars-visualguide.com/assets/img/characters/" + value.uid + ".jpg"} className="card-img-top" alt="Character Image"></img>
                        <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                                <div className="d-flex justify-content-between">
					                <Link to={`/charactersdetails/${value.uid}`}>
						                <button href="#" className="btn btn-outline-primary">
							                Learn more!
						                </button>
					                </Link>
                                    <button type="button" className="btn btn-outline-warning" onClick={() => actions.addFavorites(value.name)}>
                                        {store.favorites.includes(value.name) ? <i key={i} className="fa-solid fa fa-heart"></i> : <i key={i} className="far fa-heart"></i>}
                                    </button>
				                </div>
                        </div>
                </div>
        
            ))}
        </div>
    )
};

export default Characters;