import React from 'react';
// import './One.css'
// import './One.module.css'
import styles from './One.module.css';

export default function One() {
  return (
    <section>
      <h2>hello world</h2>
      <p className={styles.contents}>hello world</p>
    </section>
  );
}
