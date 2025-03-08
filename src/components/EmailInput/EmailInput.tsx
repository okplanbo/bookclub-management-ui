import WarningIcon from '../WarningIcon';
import styles from './EmailInput.module.scss';

interface EmailInputProps {
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
    className?: string;   
}

const EmailInput = ({
    value,
    onChange,
    errorMessage,
    className
} : EmailInputProps ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={`${styles.emailInputContainer} ${className}`}>
            <label htmlFor='email'>Email Address</label>
            <input
                type='email'
                id='email'
                name='email'
                required
                aria-required='true'
                value={value}
                onChange={handleChange}
            />
            {errorMessage && (
                <div className={styles.errorMessage} aria-live='polite'>
                    <WarningIcon />
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default EmailInput;
