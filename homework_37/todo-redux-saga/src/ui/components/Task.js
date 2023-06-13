import { Field } from 'react-final-form';
import { TaskFieldUI } from "./TaskField";
import Button from './Button';
import { useStyles } from '../../useStyle';
export const Task = (props) => {
    const { handleSubmit } = props;
    const classes = useStyles(props);
    return (
        <form
            className={classes.form}
            onSubmit={handleSubmit}
        >
            <Field
                name='task'
                type='text'
                component={TaskFieldUI}
            />
            <Button
                text='Add'
            />
        </form>
    )
}

