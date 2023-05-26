import { useState } from 'react';

export const useInputField = (defaultValue) => {
    const [inputValue, setValue] = useState(defaultValue);
    const onChange =
        (event) => {
            const inputValue = event.target.value;
            setValue(inputValue);
        }
    return { inputValue, onChange };
}
