import React, {FC} from "react"


export type InputProps = {
    register: any;
    name: any;
  
  };

  export type SelectProps = {
    register: any;
    options: any;
    name: any;

  };


export const Input: FC<InputProps> = ({ register, name, ...rest }) => {
  return <input {...register(name)} {...rest} />
}


export const Select: FC<SelectProps> = ({ register, options, name, ...rest }) => {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value:any) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}

