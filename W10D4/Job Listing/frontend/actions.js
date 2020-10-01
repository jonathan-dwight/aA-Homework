import React from 'react';
import ReactDOM from 'react-dom';

const selectLocation = (city, jobs = []) => {
    type: "SWITCH_LOCATION",
    city,
    jobs
};

export default selectLocation;

// window.selectLocation = selectLocation;
