import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from './style.module.scss';

export default function HeaderNavbar() {
    return (
        <Navbar expand="sm" className={styles.nav}>
            <section className="container">
                <Link href="/">
                    <a>
                        <img src="/images/logo_1.jpg" alt="wtfresume logo (resume builder)" className={styles.logo} />
                    </a>
                   
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarNav}>
                    <i className="material-icons">menu</i>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <div className={styles.navItem}>
                            <Link href="/resume-builder">
                                <a>Create My Resume</a>
                            </Link>
                        </div>

                        <div className={styles.navItem}>EN</div>

                       
                    </Nav>
                </Navbar.Collapse>
            </section>
        </Navbar>
    );
}
