import React from 'react';
import { useSelector } from 'react-redux';
import styles from './One.module.css';

function One() {
  const { borderRadius } = useSelector((state) => ({
    borderRadius: state.borderRadius,
  }));

  return (
    <div className={styles.one} style={{ borderRadius: borderRadius }}></div>
  );
}

export default One;
