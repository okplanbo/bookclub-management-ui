'use client';

import Link from 'next/link';

import styles from './page.module.css';
import { useState } from 'react';
import { validateEmail } from '@/utils';
import EmailInput from '@/components/EmailInput/EmailInput';
import PasswordInput from '@/components/PasswordInput/PasswordInput';

export default function LoginPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [invalidEmailMessage, setInvalidEmailMessage] = useState<string>();
    const [invalidPasswordMessage, setInvalidPasswordMessage] =
        useState<string>();

    const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement)
            .value;

        const password = (
            form.elements.namedItem('password') as HTMLInputElement
        ).value;

        const emailValidationObject = validateEmail(email);

        if (!emailValidationObject.isValid) {
            setInvalidEmailMessage(emailValidationObject.message);
            return;
        } else if (invalidEmailMessage) {
            setInvalidEmailMessage('');
        }

        if (!password) {
            setInvalidPasswordMessage('Password is required');
            return;
        }

        const rememberMe = (
            form.elements.namedItem('remember-me') as HTMLInputElement
        ).checked;

        const payload = {
            email,
            password,
            rememberMe,
        };

        form.reset();
        setInvalidEmailMessage('');
        setInvalidPasswordMessage('');
        console.log(payload);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    }

    return (
        <main className={styles.container}>
            <h1 id='login-heading'>Sign in to BookNook</h1>
            <form
                className={`${styles.loginForm} shadow`}
                onSubmit={loginHandler}
                noValidate
                aria-labelledby='login-heading'
            >
                <EmailInput
                    value={email}
                    onChange={handleEmailChange}
                    errorMessage={invalidEmailMessage}
                />
                <PasswordInput
                    value={password}
                    onChange={handlePasswordChange}
                    errorMessage={invalidPasswordMessage}
                />
                <div className={styles.additionalActions}>
                    <div className={styles.rememberMe}>
                        <input
                            type='checkbox'
                            id='remember-me'
                            name='remember-me'
                        />
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <Link href='/password-reset'>
                        Forgot password?
                    </Link>
                </div>
                <button className={styles.submit} type='submit'>
                    Sign in
                </button>
                <div>
                    Don&apos;t have account yet?{' '}
                    <Link href='/signup'>Register</Link>
                </div>
                {/* Cases after sending form data: 'Password is incorrect'
                'Email is incorrect' or 'User not found'
                'Generic server error', 'Connection error' */}
            </form>
        </main>
    );
}
