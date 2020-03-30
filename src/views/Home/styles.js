import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {

    },
    homeBanner: {
        position: 'relative'
    },
    homeBannerCaption: {
        position: "absolute",
        verticalAlign: "middle",
        zIndex: 20,
        verticalAlign: "middle",
        color: "white",
        top: "50%",
        transform: "translateY(-50%)",
        width: '100%'
        // maxWidth: 'calc(100% - 500px)',
        // margin: '0 auto',
        // left: 0,
        // right: 0
        // left: "10%"
    },
    bannerTitle: {
        fontWeight: 'bold',
        textShadow: '2px 2px 1px rgba(0,0,0,0.25)',
    }
}));

export default useStyles;