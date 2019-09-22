import React from "react";
import BookingBtn from "../home/bookingBtn/bookingBtn";
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
            <BookingBtn />
            <video autoPlay loop muted>
                <source src={`${process.env.PUBLIC_URL}/backgroundVid.mp4`}/>
            </video>
        </div>
    );
}

export default Home;