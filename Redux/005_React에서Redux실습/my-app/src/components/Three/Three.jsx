import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Three.module.css';

function Three() {
  const { borderRadius } = useSelector((state) => ({
    borderRadius: state.borderRadius,
  }));

  return (
    <div className={styles.three} style={{ borderRadius: borderRadius }}></div>
  );
}

export default Three;
