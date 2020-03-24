import React from 'react';

import useStyles from './styles';

function HTMedia({ src, blockIframe }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.rootInner}>
                {blockIframe && blockIframe ? <div className={classes.iframeBlock}></div> : ""}
                <iframe className={classes.iframe} src={src}></iframe>
            </div>
        </div>
    );
}

export default HTMedia;
