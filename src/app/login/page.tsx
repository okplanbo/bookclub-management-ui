'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import { validateEmail } from '@/utils';
import { basePath } from '../../../next.config';

const iconPath = `${basePath ?? ''}/assets/warning.svg`;

export default function LoginPage() {
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

    return (
        <main className={styles.container}>
            <h1 id='login-heading'>Sign in to BookNook</h1>
            <form
                className={`${styles.loginForm} shadow`}
                onSubmit={loginHandler}
                noValidate
                aria-labelledby='login-heading'
            >
                <div className={styles.inputGroup}>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        required
                        aria-required='true'
                    />
                    {invalidEmailMessage && (
                        <div className={styles.errorMessage} aria-live='polite'>
                            <Image
                                src={iconPath}
                                alt=''
                                role='presentation'
                                width={16}
                                height={16}
                            />
                            {invalidEmailMessage}
                        </div>
                    )}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        required
                        aria-required='true'
                    />
                    {invalidPasswordMessage && (
                        <div className={styles.errorMessage} aria-live='polite'>
                            <Image
                                src={iconPath}
                                alt=''
                                role='presentation'
                                width={16}
                                height={16}
                            />
                            {invalidPasswordMessage}
                        </div>
                    )}
                </div>
                <div className={styles.additionalActions}>
                    <div className={styles.rememberMe}>
                        <input
                            type='checkbox'
                            id='remember-me'
                            name='remember-me'
                        />
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <Link className={styles.slinkButton} href='/password-reset'>
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
            </form>
        </main>
    );
}
