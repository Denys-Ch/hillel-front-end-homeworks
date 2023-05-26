import {useState, useCallback} from 'react';

export const useInputField = (defaultValue) => {
    const [inputValue, setValue] = useState(defaultValue);
    const onChange = useCallback(
        (event) => {
            const inputValue = event.target.value;
            setValue(inputValue);
        },
        [setValue]
    )
    return {inputValue, onChange};
}
