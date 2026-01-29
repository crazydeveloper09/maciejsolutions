import React from 'react';
//import { useTranslation } from "react-i18next";
import styles from './Alert.module.scss';

export enum ALERT_TYPES {
  INFO = 'primary',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
}

const Alert: React.FC<{ type: ALERT_TYPES; message: string }> = ({ type, message }) => {
  //const { t } = useTranslation();
  return <div className={`${styles.alert} ${styles[type]}`}>{message}</div>;
};

export default Alert;
