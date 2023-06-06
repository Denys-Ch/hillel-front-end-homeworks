import { Field } from 'react-final-form';
import Button from './Button';

export const Request = (props) => {
    const { handleSubmit } = props;
    return (
        <div className='wrapper'>
            <div className='address'>https://swapi.dev/api/</div>
            <form
                className='form'
                onSubmit={handleSubmit}
            >
                <Field
                    name='request'
                    component='input'
                    className='form__input'
                />
                <Button
                    text='Get Info'
                />
            </form>
        </div>
    )
}   