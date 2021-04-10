import { useCallback, useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface IInputProps {
  id: string;
  name: string;
  placeholder: string;
  onChange: any;
  value: string;
  width?: number;
  setFocus?: any;
}

export default function Input({
  id,
  name,
  placeholder,
  width,
  onChange,
  value,
  setFocus = null,
}: IInputProps) {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [errorControl, setErrorControl] = useState(false);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(
    (e) => {
      if (setFocus) setFocus(e);
      setIsFocused(true);
    },
    [setFocus]
  );

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    setErrorControl(error && error.length > 0);
  }, [error]);

  return (
    <Container
      width={width}
      error={errorControl}
      isFocused={isFocused}
      isFilled={isFilled}
    >
      <div>
        <label id="text-label" htmlFor={id}>
          {placeholder}
        </label>
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e);
            setErrorControl(false);
          }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          type="text"
          autoComplete="off"
          value={value}
        />
      </div>

      <span>{errorControl && <p>{error}</p>}</span>
    </Container>
  );
}
