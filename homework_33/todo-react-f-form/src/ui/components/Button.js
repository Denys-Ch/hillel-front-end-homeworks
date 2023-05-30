import cx from 'classnames';
import { useStyles } from '../../useStyle';

export default function Button(props) {
    const classes = useStyles(props);
    const { text, customClass, onClick, disabled } = props;
    const className = cx(
        `${classes.inputBtn}`,
        { [customClass]: customClass }
    )
    return <button disabled={disabled} className={className} onClick={onClick}>{text}</button>
}