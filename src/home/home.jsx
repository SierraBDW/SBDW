import React from "react";
import "./home.css";

// let imgUrl = "../../public/background-vid.mp4";
// let styles = {
//     root: {
//         backgroundImage: `url(${ imgUrl })`,
//         backgroundRepeat: "no-repeat",
//         bagroundPosition: "center",
//     }
// }

const Home = () => {
    return (
        <div>
            <video autoPlay loop muted>
                <source src={`${process.env.PUBLIC_URL}/backgroundVid.mp4`}/>
            </video>
            <h1>This is the Home Page</h1>
        </div>
    );
}

export default Home;