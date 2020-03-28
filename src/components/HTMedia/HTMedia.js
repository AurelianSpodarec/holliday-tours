import React from 'react';

import useStyles from './styles';

function HTMedia({ src, blockIframe, children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.rootInner}>
                {blockIframe && blockIframe ? <div className={classes.iframeBlock}></div> : ""}
                <iframe className={classes.iframe} src={src}></iframe>
            </div>

            {/* Make it conditional/custom */}
            <svg className={classes.bottomDecoration} viewBox="0 0 1440 120"><path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path></svg>
        </div>
    );
}

export default HTMedia;
