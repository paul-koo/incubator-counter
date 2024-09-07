export const ButtonStyles = {
    fontWeight: '600',
    borderWidth: '2px',
};

export const TextFieldStylesFunc = (err?: boolean) => {
    return {
        input: {
            color: err ? 'red' : '#1976d2',
            fontWeight: '600',
            // border: '2px solid #1976d2',
        },
        label: {
            color: err ? 'red' : '#1976d2',
        },
    };
};
