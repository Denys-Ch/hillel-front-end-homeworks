import cx from 'classnames';
import { useStyles } from '../../useStyle';

export default function Button(props) {
    const classes = useStyles(props);
    const { text, onClick, customClass } = props;
    const className = cx(
        `${classes.inputBtn}`,
        { [customClass]: customClass }
    )
    return <button className={className} onClick={onClick}>{text}</button>
}