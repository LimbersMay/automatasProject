export const getValidationError = (error) => {

    const errors = {
        MISSING_PARAMETERS: 'Missing parameters',
        SYMBOL_ALREADY_EXISTS: 'Symbol already exists',
        FATHER_DOES_NOT_EXISTS: 'Father does not exists',
        SYMBOL_DOES_NOT_EXISTS: 'Symbol does not exists',
        SYMBOL_HAS_CHILDREN: 'Symbol has children',
    }

    return errors[error] || 'Server error';
}