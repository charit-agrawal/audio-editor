import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faReply, fas, fa } from "@fortawesome/free-solid-svg-icons";
import { WaveformContianer, Wave, ButtonContianer } from './Waveform.styled';
import Toggle from '../src/components/Toggle';
import Timeline from './components/Timeline';

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
            progressColor: '#46B54D',
            backend: "MediaElement",
        });

        this.Waveform = wavesurfer;
        wavesurfer.load(track);

    };

    handleReplay = () => {
        this.Waveform.setCurrentTime(0);
        this.setState({ playing: false });
        this.Waveform.pause();
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

                    {/*Displaying the waveform*/}
                    <Wave id="waveform" style={{ width: "100%" }} />

                    {/*Timeline (Not working correctly at the moment)*/}
                    {/* <Timeline wavesurfer={this.Waveform} isReady={true} /> */}

                    {/*Loading the audio using the audio tag*/}
                    <audio id="track" src={url} />

                    <p style={{ margin: 50 }}>Please wait for 10 seconds before clicking the play button at the initial render</p>

                </WaveformContianer>

                <ButtonContianer>

                    {/*Custom toggle button for agent and customer*/}
                    <Toggle style={{ marginLeft: 100 }} />

                    {/*Play and pause button*/}
                    <button onClick={this.handlePlay} style={
                        !this.state.playing ?
                            {
                                outline: 'none',
                                height: "20px",
                                width: "20px",
                                borderStyle: "solid",
                                borderWidth: "10px 0px 10px 20px",
                                borderColor: "transparent transparent transparent #202020",
                                margin: "20px",
                                backgroundColor: "transparent",
                                cursor: "pointer",
                                willChange: "borderWidth",
                                transition: "100ms all ease"
                            } : {
                                height: "20px",
                                width: "20px",
                                borderStyle: "double",
                                borderWidth: "0px 0px 0px 20px",
                                borderColor: "#202020",
                                margin: "20px",
                                backgroundColor: "transparent",
                                cursor: "pointer",
                                willChange: "borderWidth",
                                transition: "100ms all ease"
                            }}>

                        {/* <FontAwesomeIcon icon={!this.state.playing ? faPlay : faPause} /> */}

                    </button>

                    {/*Replay button*/}
                    <button onClick={this.handleReplay} style={{
                        outline: 'none',
                        backgroundColor: 'transparent',
                        borderColor: "transparent",
                        cursor: 'pointer',
                        width: '20px',
                        height: '20px',
                        fontSize: '20px',
                        marginBottom: '10px'
                    }}>

                        <FontAwesomeIcon icon={faReply} />

                    </button>

                </ButtonContianer>

            </>
        );
    }
};

export default Waveform;