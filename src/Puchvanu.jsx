import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Puchvanu() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [preposition, setPrePosition] = useState("");
    const [nomsgpreposition, setNomsgPosition] = useState("");

    // useEffect(() => {
    //   moveButton();
    // }, []);
    // Run the moveButton function on component mount

    const moveButton = () => {
        const button = document.getElementById("noButton");
        const x = Math.random() * 70;
        const y = Math.random() * 70;
        setPosition({ x, y });
        setPrePosition("absolute")
        setNomsgPosition("🤪")
    };
    return (
        <div class="container">
            <div>
                <h1 class="header_text">Next Weekend </h1>
                <h1 class="header_text">Can We Go On a Maggie Date...?</h1>
            </div>
            <div class="gif_container">
                <img
                    src="https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif"
                    alt="Cute animated illustration"
                />
            </div>
            <div class="buttons d-flex justify-content-center gap-3 ">
                <Link to="/mani-gay">
                    <button class="btn" id="yesButton" >Yes</button>
                </Link>
                <button
                    class="btn "
                    id="noButton"
                    style={{ position: `${preposition}`, left: `${position.x}%`, top: `${position.y}%` }}
                    onClick={moveButton}
                    onMouseOver={moveButton}
                >
                    Noo.{nomsgpreposition}
                </button>
            </div>
        </div>
    )
}
