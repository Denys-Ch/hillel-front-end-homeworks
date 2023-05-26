import cx from 'classnames';

export default function Button(props) {
    const { text, customClass, onClick, disabled } = props;
    const className = cx(
        'form__btn',
        { [customClass]: customClass }
    )
    return <button disabled={disabled} className={className} onClick={onClick}>{text}</button>
}