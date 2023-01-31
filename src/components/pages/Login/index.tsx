import React from 'react'
import styles from './index.module.css'
import {
    Formik,
    Form,
    Field,
} from 'formik';
import * as Yup from 'yup';
import Image from 'next/image'
import User from '../../../../types/user'

const initialValues: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
}

const index = () => {
    return (
        <div className={styles.container}>
            <Image
                src="./logo.svg"
                alt="Logo"
                width={120}
                height={78}
            />


            <div className={styles.header}>
                <p>
                    Welcome back!
                </p>
                <h1>
                    Login to your account
                </h1>
            </div>
            <div className={styles.form}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email().required("Please Enter Email !"),
                        password: Yup.string().required("Please Enter Password !"),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        const newAddresses = { ...values }
                        resetForm();
                    }}
                >
                    {({ errors, touched }) => (

                        <Form>                               
                            <div className={styles.fields}>
                                <div className={styles.label}>
                                    <label htmlFor="email">Email</label>
                                    {errors.email && touched.email ? (
                                        <p>{errors.email}</p>
                                    ) : null}
                                </div>
                                <Field id="email" name="email" placeholder="john@mail.com" />
                            </div>
                            <div className={styles.fields}>
                                <div className={styles.label}>
                                    <label htmlFor="password">Password</label>
                                    {errors.password && touched.password ? (
                                        <p>{errors.password}</p>
                                    ) : null}
                                </div>
                                <Field type="password" id="password" name="password" placeholder="Password" />
                            </div>
                            <div className={styles.button}>
                                <button type="submit">Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className={styles.the_button}>Register</div>

        </div>
    )
}

export default index