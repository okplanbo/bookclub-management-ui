import WarningIcon from '../WarningIcon';
import styles from './PasswordInput.module.scss';

interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
    className?: string;
}

const PasswordInput = ({
    value,
    onChange,
    errorMessage,
    className,
}: PasswordInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={`${styles.passwordInputContainer} ${className}`}>
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                id='password'
                name='password'
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

export default PasswordInput;
