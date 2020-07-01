import {errors} from '../validations';

export const handleInputChange = (
    value,
    setInputValue,
    validator,
    currentState,
    setError,
    invalidState,
) => {
    if (
        (validator(value) && currentState === invalidState) ||
        value.length === 0
    ) {
        setError(errors.valid);
    } else if (!validator(value) && currentState === errors.valid) {
        setError(invalidState);
    }
    setInputValue(value);
};
