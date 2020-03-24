import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-block',
        borderRadius: '50%',
        flexGrow: 0,
        flexShrink: 0,
        padding: theme.spacing(4),
        backgroundColor: 'red'
    },
}));

export default useStyles;