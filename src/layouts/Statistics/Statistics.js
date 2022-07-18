import React from "react";
import StatsCard from "../../components/StatsCard/StatsCard";

let Statistics = () => {
    return (<section className="statistics container">
        <div className="statistics__holder">
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
        </div>
    </section>)
}

export default Statistics;