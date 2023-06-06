export default function Button(props) {
    const { text, onClick } = props;

    return <button className='form__btn' onClick={onClick}>{text}</button>
}