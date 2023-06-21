import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';
import { FormHelperText } from '@mui/material';

export default function Select(props) {
    const {
        input, label, options, disabled, meta,
    } = props;
    const error = meta.touched && meta.error;
    return (
        <FormControl
            fullWidth
        >
            <InputLabel id={`${input.name}-label`}>{label}</InputLabel>
            <SelectMUI
                disabled={disabled}
                error={!!error}
                label={label}
                labelId={`${input.name}-label`}
                id={input.name}
                value={input.value}
                name={input.name}
                onChange={input.onChange}
                onFocus={input.onFocus}
                onBlur={input.onBlur}
            >
                {options.map(
                    (option) => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ),
                )}
            </SelectMUI>
            <FormHelperText error={!!error}>{error}</FormHelperText>
        </FormControl>
    );
}
