import React from "react";

const getSeason = (lat, month) => {
    if (month > 2 && month < 5) {
        return lat > 0 ? 'It is Spring...' : 'It\'s the Rainy Season, make sure you take your umbrella and rain coats with you. Be Careful while driving too';
    } else if (month >)
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    return <div>Season Display</div>
};

export default SeasonDisplay;