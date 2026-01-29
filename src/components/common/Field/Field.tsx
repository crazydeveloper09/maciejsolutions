import React from 'react';
import styles from './Field.module.scss';

type FieldElementType = 'input' | 'select' | 'textarea' | 'stars';

type BaseProps = {
  label: string;
  name: string;
  fieldType?: FieldElementType;
  children?: React.ReactNode;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type FieldProps =
  | (BaseProps & { fieldType?: 'input' } & InputProps)
  | (BaseProps & { fieldType: 'select' } & SelectProps)
  | (BaseProps & { fieldType: 'textarea' } & TextareaProps)
  | (BaseProps & { fieldType: 'stars' } & InputProps);

const Field = ({ label, name, fieldType = 'input', children, ...rest }: FieldProps) => {
  const id = rest.id ?? name;

  return (
    <div className={styles.container}>
      {!rest.hidden && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      {fieldType === 'input' && (
        <input id={id} name={name} {...(rest as InputProps)} className={styles.field} />
      )}

      {fieldType === 'select' && (
        <select id={id} name={name} {...(rest as SelectProps)} className={styles.field}>
          {children}
        </select>
      )}

      {fieldType === 'textarea' && (
        <textarea id={id} name={name} {...(rest as TextareaProps)} className={styles.field} />
      )}

      {fieldType === 'stars' && <div>{children}</div>}
    </div>
  );
};

export default Field;
