import React from 'react';
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import ErrorField from '@components/custom/ErrorField';

const Check = (props) => {
    const { register, formState: { errors } } = useFormContext();

    const handleClassName = () => {
        const className = props.className ? props.className : '';
        const error = errors[props.name] ? 'check-error' : '';
        const classDinamic = `${className} ${error}`
        const data = `form-check-input ${classDinamic.trim()}`;
        return data.trimEnd()
    }

    return (
        <div className={props.container}>
            <div className="form-check">
                <input
                    {...props}
                    {...register(props.name)}
                    className={handleClassName()}
                    type="checkbox"
                />
                <label className="form-check-label" htmlFor={props.name}>
                    {props.label}
                </label>
                <div>
                    <ErrorMessage errors={errors} name={props.name} as={<ErrorField />} />
                </div>
            </div>
        </div>
    )
}

export default Check
