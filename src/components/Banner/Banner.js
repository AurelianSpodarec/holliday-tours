import React from 'react';

import useStyles from 'styles';

function Banner({ src, type }) {

    //TODO: Add parallax effect 

    function MediaType(type) {
        if (type === 'iframe') {
            <div class='embed-container'>
                <iframe src='https://player.vimeo.com/video/396573698?autoplay=1&loop=1&autopause=0&muted=1' frameborder='0' allowfullscreen></iframe>
            </div>
        } else {
            <div>
                <img src="/" />
            </div>
        }
    }

    return (
        <div className="root">

            {MediaType}

        </div>
    );
}

export default Banner;
