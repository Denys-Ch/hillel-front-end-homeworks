import { useStyles } from '../../useStyle';

export default function Item(props) {
    const { text } = props;
    const classes = useStyles(props);

    return (
        <div className={classes.item}>
            <div className={classes.itemDesc}>{text}</div>
        </div>
    )
}