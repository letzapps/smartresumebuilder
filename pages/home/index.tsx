import React from 'react';
import Link from 'next/link';

import { HeaderNavbar, Footer } from '@component';

import styles from './style.module.scss';

export default function Home() {
    return (
        <div className={styles.homePage}>
            <HeaderNavbar />

            <div className="container">
                <section className={['row', styles.first].join(' ')}>
                    <div className={['col-md-6', styles.firstLeft].join(' ')}>
                        <h1>CREATE Resume</h1>
                        <p>design your resume with free</p>

                        <div className={styles.crBtn}>
                            <Link href="/resume-builder">
                                <a>Build My Resume</a>
                            </Link>
                        </div>
                    </div>
                    <div className={['col-md-6', styles.firstRight].join(' ')}>
                        <img src="/images/mann.png" alt="first slide image home page" className="imgResponsive" />
                    </div>
                </section>

                <section className={[styles.second].join(' ')}>
                    <div className={styles.secondTitle}>
                        <h2>Why trying Smart Resume?</h2>
                    </div>

                    <div className={['row justify-content-md-center', styles.itemsRow].join(' ')}>
                        <div className="col-md-10 row justify-content-md-center">
                            <div className={['col-md-7', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg1].join(' ')}>
                                        <img src="images/icons/signs.png" alt="100% free" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>100% free</p>
                                </article>
                            </div>
                            <div className={['col-md-5', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg4].join(' ')}>
                                        <img src="images/icons/body.png" alt="easy to use" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>Easy to use</p>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className={['row justify-content-md-center', styles.itemsRow].join(' ')}>
                        <div className="col-md-10 row justify-content-md-center">
                            <div className={['col-md-7', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg2].join(' ')}>
                                        <img src="images/icons/time.png" alt="makes a minute" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>It take a minute</p>
                                </article>
                            </div>
                            <div className={['col-md-5', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg3].join(' ')}>
                                        <img
                                            src="images/icons/register.png"
                                            alt="No need register"
                                            className="imgResponsive verticalCenter"
                                        />
                                    </div>
                                    <p>No need to register</p>
                                </article>
                            </div>
                        </div>
                    </div>

                 
                </section>

              
                <section className={[styles.forth].join(' ')}>
                    <p>You can save your data and use it in the future.</p>
                    <p className={styles.bold}>what do you think! isn&lsquo;t it amazing?</p>
                  
                </section>
            </div>

            <Footer />
        </div>
    );
}
