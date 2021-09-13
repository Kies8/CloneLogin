const utilities = {
    checkPersonal: (input) => {
        if (input !== undefined) {
            return /^[\p{L}\p{N}*-]+$/u.test(input)
        }
    },

    checkEmailValidity: (email) => {
        if (email !== undefined) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        };
    },

    checkPasswordValidity: (password) => {
        if (password !== undefined) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.,!@#$%^&*])(?=.{8,})/.test(password);
        };

    },

    checkConfirmPasswordValidity: (password, confirmPassword) => {
        if (password !== undefined && confirmPassword !== undefined) {
            return password === confirmPassword;
        }
    },

    checkGender: (gender) => {
        if (gender !== undefined && gender !== '') {
            return true;
        }
    },

    checkDate: (date) => {
        let dayOfBirth = new Date(date).getTime() / 1000
        if (dayOfBirth !== undefined && dayOfBirth <= new Date().setFullYear(new Date().getFullYear() - 16) / 1000) {
            return true;
        }
    },

    generateCode: () => {
        return Math.floor(Math.random() * (99999 - 10000) + 10000);
    },

    checkCode: (code, codeInput) => {
        return code === codeInput;
    }
};

export default utilities;