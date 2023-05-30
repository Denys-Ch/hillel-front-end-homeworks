import TextField from '@mui/material/TextField'
import { useStyles } from '../../useStyle';
export const TaskFieldUI = (props) => {
    const { input, meta } = props;
    const classes = useStyles(props);
    const error = meta.error
    return (
        <TextField
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            size='small'
            fullWidth
            label="Task"
            variant='outlined'
            errors={error}
            helperText={error ? meta.error : undefined}
            className={classes.input}
        />
    )
}

