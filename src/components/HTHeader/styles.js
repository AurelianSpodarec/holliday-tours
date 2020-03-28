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
    logoImage: {
        width: '35px',
        height: 'auto'
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
        marginRight: theme.spacing(2),
        marginLeft: 0,
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3)
        },
    },
    link:{
        padding: '15px 14px',
    },
    searchInputRoot: {
        width: '100%',
    },
    searchInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        color: 'grey',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default useStyles;