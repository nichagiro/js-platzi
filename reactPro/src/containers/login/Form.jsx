import React from 'react'
import Image from '@components/login/Image';
import Input from '@components/custom/Input'
import Check from '@components/custom/Check';
import Button from '@components/custom/Button';
import Link from '@components/custom/Link';
import FormHook from '@components/custom/Form';
import { schema } from '@schemas/login/Form';
import { useNavigate } from "react-router-dom";
import { useDispatch } from '@context/App/AppProvider';
import types from '@context/App/Types';

const Form = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onSubmit = async data => {
    await dispatch({
      type: types.LOGIN,
      payload: data
    })
    navigate("/home");
  }

  return (
    <>
      <section className='pt-xl-5 mt-xl-5 d-flex justify-content-center align-items-center'>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <Image />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <FormHook onSubmit={onSubmit} resolver={schema} devTool>
                <div className="my-2">
                  <Input
                    label='Correo Electrónico'
                    name='email'
                    type='email'
                    container='my-3'
                  />
                  <Input
                    label='Contraseña'
                    name='password'
                    type='password'
                    container='my-3'
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Check
                    label='Recuerdame'
                    name='remember'
                    container='my-2'
                  />
                </div>
                <div className="text-center text-lg-start mt-4 pt-2 d-flex">
                  <Button
                    name='Login'
                    container='me-3'
                    type='submit'
                  />
                  <Link
                    label='No tiene cuenta? Registrarse'
                    color='danger'
                    className='small'
                    container='d-flex align-items-center'
                  />
                </div>
              </FormHook>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Form