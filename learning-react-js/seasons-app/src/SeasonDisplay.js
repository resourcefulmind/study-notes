import './SeasonDisplay.css'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faCloudSunRain, faLeaf, faSnowflake, faSpaceShuttle, faSun, faThunderstorm, faWheatAwn } from '@fortawesome/free-solid-svg-icons'



const getSeason = (lat, month) => {
    if (month > 2 && month < 5) {
        return lat > 0 ? 'Spring' : 'Rainy-Season';
    } else if (month > 4 && month < 8) {
        return lat > 0 ? 'Summer' : 'Rainy Season';
    } else if (month > 7 && month < 11) {
        return lat > 0 ? 'Autumn' : 'Rainy to Harmattan';
    }else if (month > 10 && month < 2) {
        return lat > 0 ? 'Winter' : 'Dry Season + Harmattan';
    } else {
        return 'Maybe you are on Mars'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    
    const seasonMessage = () => {
        if (season === 'spring') {
            return 'It\'s a good day to go for a bike ride, explore the nearest national park, take a hike'
        } else if (season === 'rainySeason') {
            return 'It\'s the Rainy Season, make sure you take your umbrella and rain coats with you. Be Careful while driving too'
        } else if (season === 'summer') {
            return 'Get those bikinis and the beach body out, it\'s Summer'
        } else if (season === 'autumn') {
            return 'It seems like all the leaves are falling...You guessed right, it\'s autumn'
        } else if (season === 'rainyToHarmattan') {
            return 'The Rainy Season is ending and the Harmattan is beginning to kick in. It\'s going to get dry and chilly soon.'
        } else if (season === 'drySeasonHarmattan') {
            return 'It\'s Harmattan and dry season, Get your lip balms and body oils because it is chilly and the roads will be really dusty'
        } else if (season === 'winter') {
            return 'Winter is here'
        } else {
            return 'Still living on Mars i see...'
        }
    }

    const iconDisplay = () => {
        if (season === 'spring') {
            return <FontAwesomeIcon icon={faWheatAwn} size='5x' bounce />
        } else if (season === 'summer') {
            return <FontAwesomeIcon icon={faSun} size='5x' fade />
        } else if (season === 'rainySeason') {
            return <FontAwesomeIcon icon={faThunderstorm} size='5x' shake />
        } else if (season === 'autumn') {
            return <FontAwesomeIcon icon={faLeaf} size='5x' fade />
        } else if (season === 'winter') {
            return <FontAwesomeIcon icon={faSnowflake} size='5x' fade />
        } else if(season === 'drySeasonHarmattan') {
            return <FontAwesomeIcon icon={faCloudSun} size='5x' bounce />
        } else if (season === 'rainyToHarmattan') {
            return <FontAwesomeIcon icon={faCloudSunRain} size='5x' shake />
        } else {
            return <FontAwesomeIcon icon={faSpaceShuttle} size='5x' fade />
        }
    }

    const text = seasonMessage();
    const icon = iconDisplay();

    return (
        <div className={ `season-display ${season}` }>
            <i className="icon-left">{icon}</i>
            <i className="icon-bottom-left">{icon}</i>
            <h1>{text}</h1>
            <i className="icon-right">{icon}</i>
            <i className="icon-top-right">{icon}</i>
        </div>
    )
};

export default SeasonDisplay;