import React from 'react';

// styles and images
import RulesImage from '../../assets/split4.jpg';

function Rules() {
    return (
        <div className="background">
            <div className="text">
                <h2>Rules</h2>

                <p>Under construction</p>
            </div>

            <img
                src={RulesImage}
                alt="Mercedes and Ferrari car on track"
            />
        </div>
    );
}

export default Rules;