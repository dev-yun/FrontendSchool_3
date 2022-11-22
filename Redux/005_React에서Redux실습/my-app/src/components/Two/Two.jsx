import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Two.module.css';

function Two() {
  const { borderRadius } = useSelector((state) => ({
    borderRadius: state.borderRadius,
  }));

  return (
    <div className={styles.two} style={{ borderRadius: borderRadius }}></div>
  );
}

export default Two;
