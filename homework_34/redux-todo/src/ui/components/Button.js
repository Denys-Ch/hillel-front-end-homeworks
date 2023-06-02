import { useStyles } from '../../useStyle';

export default function Button(props) {
    const classes = useStyles(props);
    const { text, onClick } = props;

    return <button className={classes.inputBtn} onClick={onClick}>{text}</button>
}