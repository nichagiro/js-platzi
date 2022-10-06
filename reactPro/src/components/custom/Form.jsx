import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from "@hookform/devtools";

export default function Form(props) {
    const methods = useForm({
        resolver: props.resolver ? yupResolver(props.resolver) : props.resolver,
        mode: props.mode,
        reValidateMode: props.reValidateMode,
        defaultValues: props.defaultValues,
        context: props.context,
        criteriaMode: props.criteriaMode,
        shouldFocusError: props.shouldFocusError,
        shouldUnregister: props.shouldUnregister,
        shouldUseNativeValidation: props.shouldUseNativeValidation,
        delayError: props.delayError,
    });
    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(props.onSubmit, props.onError)}>
                {props.children}
            </form>
            {props.devTool && <DevTool control={methods.control} />}
        </FormProvider>
    );
}

Form.defaultProps = {
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
}
