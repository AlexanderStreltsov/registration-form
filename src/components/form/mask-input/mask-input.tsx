import React from "react";
import { IMaskInput } from "react-imask";

interface IMaskInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const MaskInput = React.forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  IMaskInputProps
>(function MaskInput(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7 (###) ###-##-##"
      definitions={{
        "#": /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value: any) =>
        onChange({ target: { name: props.name, value } })
      }
      overwrite
    />
  );
});

export default MaskInput;
