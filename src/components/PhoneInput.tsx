import { forwardRef, InputHTMLAttributes, useState } from 'react';
import InputMask from 'react-input-mask';

const InputElement: any = InputMask as any;

const InputPhone: React.FC<InputHTMLAttributes<HTMLInputElement>> =
  forwardRef((props, ref: any) => {
    const [mask, setMask] = useState('(99) 9999-99999');

    return (
      <InputElement
        mask={mask}
        ref={ref}
        maskChar=""
        beforeMaskedValueChange={(newState: any) => {
          const { value, selection } = newState;
          if (newState.value.length === 15) {
            setMask('(99) 99999-9999');
          } else {
            setMask('(99) 9999-99999');
          }
          return {
            value,
            selection
          };
        }}
        {...props}
      />
    );
  });

InputPhone.displayName = 'InputPhone';

export default InputPhone;
