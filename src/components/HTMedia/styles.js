import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    rootInner: {
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: 0
    },
    root: {
        maxHeight: "650px",
        minHeight: "270px",
        overflow: "hidden",
        position: "relative"
    },
    children: {
        position: 'relative',
        height: '100%',
        width: '100%',
        zIndex: 15,
    },
    iframe: {
        left: 0,
        top: 0,
        height: "100%",
        width: "100%",
        position: "absolute",
        border: "none"
    },
    iframeBlock: {
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: "100%",
        zIndex: 5
    },
    bottomDecoration: {
        position: 'absolute',
        bottom: '-70px',
        left: 0,
        zIndex: 10,
        fill: '#fff'
    }
}));

export default useStyles;