import cx from 'classnames';

export default function Button(props) {
    const { text, customClass, onClick } = props;
    const className = cx(
        'form__btn',
        { [customClass]: customClass }
    )
    return <button className={className} onClick={onClick}>{text}</button>
}