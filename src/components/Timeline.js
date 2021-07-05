import React, { Component } from 'react';
import PropTypes from 'prop-types';
import assign from 'deep-assign';
import WaveSurfer from 'wavesurfer.js';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.timeline = null;
    }

    componentDidMount() {
        if (this.props.isReady) this.init();
        this.WaveSurfer.on('ready', this._init.bind(this));
    }

    _init() {
        this.timeline = Object.create(WaveSurfer.Timeline);

        this.timeline.init(
            assign({}, this.props.options, {
                container: this.timelineEl,
                wavesurfer: this.WaveSurfer
            })
        );
    }

    render() {
        return (
            <div
                ref={c => {
                    this.timelineEl = c;
                }}
            />
        );
    }
}

Timeline.propTypes = {
    isReady: PropTypes.bool.isRequired,
    options: PropTypes.object.isRequired,
    wavesurfer: PropTypes.object
};

Timeline.defaultProps = {
    isReady: false,
    options: {}
};

export default Timeline;