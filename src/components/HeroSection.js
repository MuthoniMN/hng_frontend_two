import React, {useState} from "react";
import Navigation from "./Navigation";
import Ratings from "./Ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {

    return (
        <header className="heroSection">
            <Navigation />
            <section className="d-flex align-items-center hero">
                <section className="col col-sm-4 details">
                    <h1>John Wick 3: Parabellum</h1>
                    <Ratings fraction={"860/100"} percent={"97%"}/>
                    <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    <button className="d-flex gap-2 align-items-center heroBtn">
                    <FontAwesomeIcon icon={faCirclePlay} />
                        <p className="m-0 p-0">Watch Trailer</p>
                        </button>
                </section>
                <section>
                    <p className="gray">1</p>
                    <p className="gray">2</p>
                    <p className="current">-3</p>
                    <p className="gray">4</p>
                    <p className="gray">5</p>
                </section>
            </section>
        </header>
    )
}

export default HeroSection;