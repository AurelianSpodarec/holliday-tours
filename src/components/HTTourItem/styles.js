import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '300px',
        height: '275px',
        marginBottom: '32px',
        flexDirection: 'column',
        display: 'flex',
    },
    imageWrap: {
        position: 'relative',
        height: '135px',
        maxHeight: '135px',
        overflow: 'hidden'
    },
    image: {
        height: '100%'
    },
    rating: {
        color: 'gold',
    },
    // ratingIcon: {
    //     color
    // },
    ratingScore: {
        border: '2px solid gold',
        borderRadius: '20px',
        padding: '0 7px',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center'
    },
    ratingPrice: {

    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto'
    }
}));

export default useStyles;