import React, { useState } from "react";
import { FieldProps } from "formik";
import {
  Input,
  InputProps,
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface CustomInputFieldProps extends FieldProps, InputProps {
  label: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  const fieldError = touched[field.name] && errors[field.name];

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl error={Boolean(fieldError)} fullWidth margin="normal">
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <Input
        {...field}
        {...props}
        type={props.type === "password" && showPassword ? "text" : props.type}
        margin="none"
        endAdornment={
          props.type === "password" &&
          toggleShowPassword && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      />
      {fieldError && <FormHelperText>{String(fieldError)}</FormHelperText>}
    </FormControl>
  );
};

export default CustomInputField;
