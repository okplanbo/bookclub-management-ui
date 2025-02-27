export const validateEmail = (email: string) => {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return { isValid: false, message: 'Email is required' };        
    }
    if (!emailRegEx.test(email)) {
        return { isValid: false, message: 'Invalid email address' };
    }
    return { isValid: true };
};

export const validatePassword = (password: string) => {
    if (password.length < 8) {
        return {
            isValid: false,
            message: 'Password must be at least 8 characters long',
        };
    }
    return { isValid: true };
};
