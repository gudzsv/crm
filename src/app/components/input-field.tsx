'use client';

import { Field, FieldAttributes } from 'formik';
import React from 'react';

export interface InputFieldProps extends Omit<FieldAttributes<unknown>, 'as'> {
  label?: string;
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>;
  placeholder?: string;
}

export default function InputField({
  label,
  id,
  as,
  placeholder,
  ...rest
}: InputFieldProps) {
  const isInputElement = as === undefined || as === 'input';

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        as={as}
        id={id}
        {...(isInputElement && { placeholder })}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        {...rest}
      />
    </div>
  );
}
