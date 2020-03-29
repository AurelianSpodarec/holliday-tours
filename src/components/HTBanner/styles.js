import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    banner: {
        width: '100%',
        height: '425px',
        marginBottom: '50px',
        position: 'relative',
        overflow: 'hidden',
    },
    overlay: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0, .2)',
        zIndex: 5
    },
    image: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
    caption: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: '10',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
    },
    title: {
        color: 'white',
        fontSize: '3em',
    }
}));

export default useStyles;