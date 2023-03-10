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
import { useRouter } from 'next/router'
import Link from 'next/link';
import logo from "../../../../public/Logo.svg"

const initialValues: User = {
    name: "",
    email: "",
    password: "",
}

const index = () => {
    const router = useRouter()

    const register = (values: User) => {
        fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.action_register) {
                    localStorage.setItem("id", data.action_register.id)
                    router.push("/login")
                }
            })
    }

    return (
        <div className={styles.container}>
            <Image
                src={logo}
                alt="Logo"
                width={120}
                height={78}
            />
            <div className={styles.header}>
                <p>
                    Welcome
                </p>
                <h1>
                    Register
                </h1>
            </div>
            <div className={styles.form}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required("Please Enter Name !"),
                        email: Yup.string().email().required("Please Enter Email !"),
                        password: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!')
                            .matches(/^[a-zA-Z0-9_]*$/, 'Password can only contain Latin letters.')
                            .required("Please Enter Password !"),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        register(values)
                        resetForm();
                    }}
                >
                    {({ errors, touched }) => (

                        <Form>
                            <div className={styles.fields}>
                                <div className={styles.label}>
                                    <label htmlFor="name">First Name </label>
                                    {errors.name && touched.name ? (
                                        <p>{errors.name}</p>
                                    ) : null}
                                </div>
                                <Field id="name" name="name" placeholder="Name" />
                            </div>
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
                                <button type="submit">Register</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <Link href="/login">
                <div className={styles.the_button}>Login</div>
            </Link>

        </div>
    )
}

export default index