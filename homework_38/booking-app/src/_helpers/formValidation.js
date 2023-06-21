export default {
    validate: {
        required: (value) => (value ? undefined : 'Required'),
        numbersOnly: (value) => (/[0-9]/.test(value) ? undefined : 'Numbers Only'),
    },
};
