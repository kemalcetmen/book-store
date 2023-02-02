import React, { useState } from 'react'
import styles from './index.module.css'
import {
    Formik,
    Form,
    Field,
} from 'formik';
import * as Yup from 'yup';
import Image from 'next/image'
import User from '../../../../types/user'
import { useAppDispatch } from '@/store'
import { addtoken } from '@/features/tempTokenSlice'
import { useRouter } from 'next/router'
import Link from 'next/link';
import logo from "../../../../public/Logo.svg"

const initialValues: User = {
    email: "",
    password: "",
}

const index = () => {
    const dispatch = useAppDispatch()
    const [checked, setChecked] = useState(false)
    const router = useRouter()

    const login = (values: User) => {
        fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                if (checked) {
                    localStorage.setItem("token", data.action_login.token)
                }
                dispatch(addtoken(data.action_login.token))
                router.push("/")
            })
    }
    const check = () => {
        setChecked(checked => !checked)
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
                        login(values)
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
                            <div className={styles.checkbox}>
                                <input type="checkbox" id="checkbox" name="checkbox" onClick={check} />
                                <label htmlFor="checkbox">Remember me</label>
                            </div>
                            <div className={styles.button}>
                                <button type="submit">Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <Link href="/register">
                <div className={styles.the_button}>Register</div>
            </Link>

        </div>
    )
}

export default index