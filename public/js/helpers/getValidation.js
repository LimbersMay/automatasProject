export const getValidationError = (error) => {

    const errors = {
        MISSING_PARAMETERS: 'Missing parameters',
    }

    return errors[error] || 'Server error';
}