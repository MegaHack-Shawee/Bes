export const isEmail = value => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());
};

export const isPassword = value => {
    return value.length >= 6;
};

export const errors = {
    invalidEmail: {
        border: '2px solid #00f',
        message: 'E-mail inválido',
    },
    invalidPassword: {
        border: '2px solid #00f',
        message: 'Mínimo de 6 caracteres',
    },
    valid: {
        border: 'none',
        message: '',
    },
};
