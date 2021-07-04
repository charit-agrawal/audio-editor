import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";


const Volume = (props) => {

    const [statevolum, setStateVolum] = useState(0.3);
    const audio = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";
    var volumeInput = document.querySelector('#volume');

    // const onChangeVolume = (e) => {
    //     wave
    // }

    return (
        <div>
            <div className="volbox">
                {/* <button onClick={this.handleReplay} style={{ outline: 'none' }}>
                    <FontAwesomeIcon icon={faVolumeUp} />
                </button> */}
                <i className="fas fa-volume-down"></i>
                <input
                    id="volume"
                    type="range"
                    min="0"
                    max="1"
                    value={Math.round(statevolum * 100)}
                    step="0.1"
                //onChange={(e) => handleVolume(e.target.value / 100)}
                />
            </div>
        </div>
    )
}

export default Volume;
