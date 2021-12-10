import React, {Component} from "react";
import ReactDOM from "react-dom";

import Header from './layout/Header';

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "google-maps-react";

import { formatRelative } from "date-fns";


const libraries = ["places"];

// export default function App(){
//     const {isLoaded, loadError} = useLoadScript({
//         googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//         libraries,
//     })

//     if (loadError) return "Error loading maps";
//     if (!isLoaded) return "Loading Maps";

//     return <div>map</div>
// }

console.log("TE ROG AFISEAZA LOG");

class App extends Component {
    render(){
        return(
            <Header></Header>
        );
    }

    // render(){
    //     console.log("Rendering"),
    //     <Header></Header>
    // }
}

ReactDOM.render(<App></App>, document.getElementById('app'));