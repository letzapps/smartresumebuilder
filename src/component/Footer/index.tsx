import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={['row', styles.footerNav].join(' ')}>
                    <div className="col-md-4">
                        <Link href="/">
                            <a>
                                <img src="/images/logo_1.jpg" alt="wtfresume logo (resume builder)" className={styles.logo} />
                            </a>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className={styles.footerNavTitle}>PAGES</li>
                            <li>
                                <Link href="/resume-builder">
                                    <a>Resume Builder</a>
                                </Link>
                            </li>
                            <li>EN</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.footerCopyright}>Smart Resume Builder</div>
        </footer>
    );
}
