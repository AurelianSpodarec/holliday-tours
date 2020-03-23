import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-block',
        borderRadius: '50%',
        flexGrow: 0,
        flexShrink: 0,
        // padding: theme.spacing(1),
        backgroundColor: 'red'
    }
}));

export default useStyles;