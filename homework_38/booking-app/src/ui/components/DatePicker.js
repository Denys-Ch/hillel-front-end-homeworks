import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';

export default function DatePicker(props) {
    const {
        input, label, disabled,
    } = props;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerMUI
                label={label}
                disabled={disabled}
                disablePast
                id={input.name}
                value={input.value || null}
                name={input.name}
                onChange={input.onChange}
                onFocus={input.onFocus}
                onBlur={input.onBlur}
            />
        </LocalizationProvider>
    );
}
