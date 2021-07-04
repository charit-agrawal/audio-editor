import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faReply, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { WaveformContianer, Wave, ButtonContianer } from './Waveform.styled';
import { Slider } from '@material-ui/core';
import Vol from '../src/components/Volume';
import Toggle from '../src/components/Toggle';

const Checked = () => <>🤪</>;
const UnChecked = () => <>🙂</>;

class Waveform extends Component {
    state = {
        playing: false,
        toggle: true
    };

    componentDidMount() {
        const track = document.querySelector('#track');

        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#D2EDD4',
            progressColor: '#46B54D'
        });

        this.Waveform = wavesurfer;
        wavesurfer.load(track);
    };

    handleReplay = () => {
        this.Waveform.setCurrentTime(0);
        this.setState({ playing: false });
        this.Waveform.playPause();
    }

    handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.Waveform.playPause();
    };

    onChangeVolume = function (e) {
        this.wavesurfer.setVolume(e.target.value);

    };

    render() {
        const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';

        return (
            <>
                <WaveformContianer style={{ margin: 50 }}>
                    <Wave id="waveform" style={{ width: "100%" }} />
                    <audio id="track" src={url} />
                    <p style={{ margin: 50 }}>Please wait for 10 seconds before clicking the play button at the initial render</p>
                </WaveformContianer>
                <ButtonContianer>
                    {/* <button onClick={this.handleToggle} style={{ outline: 'none' }}>
                        <FontAwesomeIcon icon={!this.state.toggle ? faToggleOn : faToggleOff} >
                            {this.state.toggle ? "Customer" : "Agent"}
                        </FontAwesomeIcon>
                    </button> */}

                    {/* <Toggle style={{ marginLeft: 100 }}
                    /> */}

                    <button onClick={this.handlePlay} style={{ outline: 'none' }}>
                        <FontAwesomeIcon icon={!this.state.playing ? faPlay : faPause} />
                    </button>
                    <button onClick={this.handleReplay} style={{ outline: 'none' }}>
                        <FontAwesomeIcon icon={faReply} />
                    </button>
                    <input type="range" min="0" max="10" name="txt" value="0" step="1" onchange={this.onChangeVolume(1)} />
                    <button style={{ width: 150, margin: 30, background: 'transparent', border: 'none' }}>
                        <Slider />
                    </button>
                </ButtonContianer>

            </>
        );
    }
};

export default Waveform;