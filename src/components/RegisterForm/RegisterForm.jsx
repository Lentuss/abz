import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Formik, Form } from 'formik'

import { MainButton, Radio } from 'common/Buttons'
import Heading from 'common/Heading'
import Upload from 'common/Upload';
import Input from 'common/Input';
import SignupSchema from './validation';
import Preloader from '../../common/Preloader';

import { register } from 'redux/register/registerOperations';
import { getUsers } from 'redux/users/usersOperations';

const RegisterForm = () => {
    const [positions, setPositions] = useState({})
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.usersData.registerSlice.isLoading);
    const { isLoggedIn } = useSelector(state => state.usersData.registerSlice);

    useEffect(() => {
        const getPositions = async () => {
            try {
                const response = await axios.get('/positions');
                const data = await response.data;
                setPositions(data.positions);
            } catch (error) {
                console.log('Something went wrong')
            }
        };
        const getToken = async () => {
            try {
                const res = await axios.get('/token');
                const newToken = await res.data.token;
                localStorage.setItem('token', newToken)

            } catch (error) {
                console.log("You haven`t token")
            }
        }
        getPositions()
        getToken()
    }, [])

    return (
        <div className='container'>
            <div className="form" name='register'>
                <Heading text='Working with POST request' />
                {isLoading && <Preloader />}
                {isLoggedIn ? <Heading text='User successfully registered' /> :
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            position_id: '',
                            photo: null
                        }}
                        validationSchema={SignupSchema}

                        onSubmit={values => {
                            console.log(values)
                            const { photo, ...data } = values;
                            const formData = new FormData();
                            const keys = Object.keys(data)
                            for (const key of keys) {
                                formData.append(`${key}`, `${data[key]}`,)
                            }
                            formData.append('photo', photo)

                            dispatch(register(formData))
                            dispatch(getUsers(1))
                        }}
                    >
                        {({ errors, touched, setFieldValue }) => (
                            < Form className='form__wrapper'>

                                {errors.name && touched.name
                                    ? < Input name='name' className='error' label='Your name' type='text' errorName={errors.name} />
                                    : < Input name='name' className='' label='Your name' type='text' />}

                                {errors.email && touched.email
                                    ? < Input name='email' className='error' label='Email' type='email' errorName={errors.email} />
                                    : < Input name='email' className='' label='Email' type='email' />}

                                {errors.phone && touched.phone
                                    ? < Input name='phone' className='error' label='Phone' type='tel' errorName={errors.phone} />
                                    : < Input name='phone' className='' label='Phone' type='tel' errorName='+38 (XXX) XXX - XX - XX' />}

                                <div className="form__input-cover">
                                    <Radio positions={positions} />
                                    {errors.position_id && <p className='input__tip error'>{errors.position_id}</p>}
                                </div>

                                <div className="form__input-cover">
                                    <Upload onChange={(file) => {
                                        setFieldValue('photo', file[0])
                                    }} />
                                    {errors.photo && touched.photo ? (
                                        <p className='input__tip error'>{errors.photo}</p>
                                    ) : null}
                                </div>
                                {errors.name || errors.email || errors.phone || errors.position_id || errors.photo ? <MainButton text={'Sign in'} type={'submit'} disabled={'disabled'} /> : <MainButton text={'Sign in'} type={'submit'} />}
                            </Form>)}
                    </Formik>}
            </div>
        </div >
    )
}

export default RegisterForm
