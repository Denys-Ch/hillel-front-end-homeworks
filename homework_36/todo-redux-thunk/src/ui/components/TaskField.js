import TextField from '@mui/material/TextField'
export const TaskFieldUI = (props) => {
    const { input } = props;
    return (
        <TextField
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            size='small'
            fullWidth
            label="Task"
            variant='outlined'
        />
    )
}

