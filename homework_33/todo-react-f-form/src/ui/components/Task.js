import { Field } from 'react-final-form';
import { TaskFieldUI } from "./TaskField";
import Button from './Button';
import { useStyles } from '../../useStyle';
export const Task = (props) => {
    const { handleSubmit, pristine, values, disabled } = props;
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
                disabled={values.task === undefined ? disabled : pristine}
                text='Add'
            />
        </form>
    )
}

