import React from 'react';
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import ErrorField from '../custom/ErrorField';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { register, formState: { errors } } = useFormContext();

  const handleClassName = () => {
    const className = props.className ? props.className : '';
    const error = errors[props.name] ? 'input-error' : '';
    const classDinamic = `${className} ${error}`
    const data = `form-control ${classDinamic.trim()}`;
    return data.trimEnd()
  }

  return (
    <div className={props.container}>
      <div className='form-floating'>
        <input
          {...register(props.name)}
          className={handleClassName()}
          placeholder={props.label}
          {...props}
        />
        <label htmlFor={props.name}>
          {props.label}
        </label>
        <ErrorMessage errors={errors} name={props.name} as={<ErrorField />} />
      </div>
    </div>
  )
}

export default Input

Input.propTypes = {
  /**
* plancheolder flotante
*/
  label: PropTypes.string,
  /**
 * nombre del campo
 */
  name: PropTypes.string.isRequired,
  /**
  * Valor inicial del campo
  */
  defaultValue: PropTypes.string,
}

Input.defaultProps = {
  label: "",
  defaultValue: ""
}