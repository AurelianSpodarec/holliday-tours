import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {

    },
    grow: {
        flexGrow: 1
    },
    appBar: {
        background: 'none',
        boxShadow: 'none'
    },
    logoText: {
        color: theme.palette.common.white,
        fontWeight: 'bold',
        fontSize: '1.5em',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        transition: 'ease-in-out .5s',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.75),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default useStyles;