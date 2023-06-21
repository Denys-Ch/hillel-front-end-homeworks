import TextFieldMUI from '@mui/material/TextField';

export default function TextField(props) {
    const {
        meta, input, label,
    } = props;
    const error = meta.touched && meta.error;
    return (
        <TextFieldMUI
            error={!!error}
            helperText={error}
            label={label}
            id={input.name}
            value={input.value}
            name={input.name}
            onChange={input.onChange}
            onFocus={input.onFocus}
            onBlur={input.onBlur}
        />
    );
}
