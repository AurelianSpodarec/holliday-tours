import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    rootInner: {
        "overflow": "hidden",
        "padding-bottom": "56.25%",
        "position": "relative",
        "height": 0
    },
    root: {
        "max-height": "550px",
        "min-height": "270px",
        "overflow": "hidden"
    },
    iframe: {
        "left": 0,
        "top": 0,
        "height": "100%",
        "width": "100%",
        "position": "absolute",
        "border": "none"
    },
    iframeBlock: {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "height": "100%",
        "width": "100%",
        "z-index": 5
    }
}));

export default useStyles;