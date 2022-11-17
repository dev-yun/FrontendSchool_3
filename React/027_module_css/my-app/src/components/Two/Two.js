import React from 'react';
// import './Two.css'
// import './Two.module.css'
import styles from './Two.module.css';

export default function Two() {
  return (
    <section>
      <h2>hello world</h2>
      <p className={styles.contents}>hello world</p>
    </section>
  );
}
