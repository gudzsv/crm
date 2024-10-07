import React from 'react';
import styles from './active-label.module.css';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

function ActiveLabel({ children }: ActiveLabelProps) {
  return <span className={styles.label}>{children}</span>;
}

export default ActiveLabel;
