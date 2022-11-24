const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			person: null,
			favorites: [],
			planets: [],
			singlePlanet: null,
			vehicles: [],
			singleVehicle: null,
		},
		actions: {
			getPeople: () => {
				try {
					return fetch("https://www.swapi.tech/api/people?page=1&limit=100", {
						method: "GET",
						redirect: "follow"
					})
						.then(resp => resp.json())
						.then(data => setStore({ people: data.results}));
				} catch (error) {
					return [];
				}
			},

			getPerson: id => {
				try {
					return fetch(`https://www.swapi.tech/api/people/${id}`, {
						method: "GET",
						redirect: "follow"
					})
						.then(resp => resp.json())
						.then(data => 
							setStore({ person: data.result}));
				} catch (error) {
					return [];
				}
			},

			addFavorites: itemName => {
				const {favorites} = getStore();
				if (!favorites.find(i => i == itemName )){
					favorites.push(itemName)
				}
				console.log(favorites)
				setStore({favorites})
				// getActions().changeColor(0, "green");

			}, 

			deleteFavorites: itemIndex => {
				const {favorites} = getStore();
				const newFav = [...favorites]
				newFav.splice(itemIndex,1)
				setStore({favorites: newFav})
			},
			
			getPlanets: () => {
				try {
					return fetch("https://www.swapi.tech/api/planets?page=1&limit=100", {
						method: "GET",
						redirect: "follow"
					})
						.then(resp => resp.json())
						.then(data => setStore({ planets: data.results}));
				} catch (error) {
					return [];
				}
			},

			getSinglePlanet: (id) => {
				try {
					return fetch(`https://www.swapi.tech/api/planets/${id}`, {
						method: "GET",
						redirect: "follow"
					})
						.then(resp => resp.json())
						.then(data => setStore({ singlePlanet: data.result}));
				} catch (error) {
					return [];
				}
			},

			getVehicles: () => {
				try {
					return fetch("https://www.swapi.tech/api/vehicles?page=1&limit=100", {
						method: "GET",
						redirect: "follow"
					})
						.then(resp => resp.json())
						.then(data => setStore({ vehicles: data.results}));
				} catch (error) {
					return [];
				}
			},

			getSingleVehicle: (id) => {
				try {
					return fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
						method: "GET",
						redirect: "follow"
					})
						.then(resp => resp.json())
						.then(data => setStore({ singleVehicle: data.result}));
				} catch (error) {
					return [];
				}
			},
		

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		}
	};
};

export default getState;
