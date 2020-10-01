import React from 'react';
import { Store } from 'effector';
import { useFormField } from 'library/form';
import { FormGroup, Textarea, TextareaProps } from 'ui';

type Props = TextareaProps & Readonly<{ store: Store<any>; name: string }>;

export const TextField: React.FC<Props> = ({ store, name, ...props }) => {
  const value = useFormField({
    store,
    name,
  });

  return (
    <FormGroup>
      <Textarea name={name} value={value} {...props} />
    </FormGroup>
  );
};