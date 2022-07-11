import React from "react";
import { IoFastFood } from "react-icons/io5";

const StatsCard = () => {
    return (
        <div className="stats-card">
            <span className="stats-card__icon"><IoFastFood /></span>
            <h3 className="stats-card__number">Number</h3>
            <p className="stats-card__name">Name</p>
        </div>
    )
}
export default StatsCard;