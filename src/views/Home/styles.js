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
        // left: "10%"
    }
}));

export default useStyles;