import React from 'react';

import useStyles from 'styles';

function Banner({ src, type }) {

    //TODO: Add parallax effect 

    function MediaType(type) {
        if (type === "iframe") {
            <div className="">
                <iframe src={src} frameborder='0' allowfullscreen></iframe>
            </div>
        } else {
            <div className={}>
                <img src={src} />
            </div>
        }
    }

    return (
        <div className="root">

            {MediaType()}

        </div>
    );
}

export default Banner;
