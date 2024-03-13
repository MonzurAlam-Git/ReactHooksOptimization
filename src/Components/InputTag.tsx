import { forwardRef } from "react";

type CustomInput = {
  className: string;
};

const InputTag = forwardRef<HTMLInputElement, CustomInput>(
  ({ className }, reference) => {
    return <input ref={reference} className={className} type="text" />;
  }
);

export default InputTag;
