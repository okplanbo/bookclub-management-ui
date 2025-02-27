import { basePath } from '../../next.config';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>BookNook</h1>
                <Image
                    className={styles.logo}
                    src={`${basePath ?? ''}/logo.webp`}
                    alt='BookNook logo'
                    width={400}
                    height={300}
                    priority
                />
                <div className={styles.ctas}>
                    <Link className='primary shadow' href='/login'>
                        Sign in
                    </Link>
                    <Link className='secondary shadow' href='/signup'>
                        Sign up
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                BookNook – Easy Book Club Management&nbsp;©&nbsp;2025
            </footer>
        </div>
    );
}
