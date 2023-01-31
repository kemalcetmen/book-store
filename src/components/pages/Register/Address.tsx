import React, { useState } from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import * as Yup from 'yup';
import styles from "./address.module.scss"
import { RiDeleteBin7Line } from 'react-icons/ri';


interface IAddress {
  id: string,
  firstName: string,
  lastName: string,
  phonenumber: string,
  city: string,
  county: string,
  address: string,
  doorNumber: string,
}

const MyApp = () => {
  const initialValues: IAddress = {
    id: "",
    firstName: '',
    lastName: '',
    phonenumber: '',
    city: '',
    county: '',
    address: '',
    doorNumber: '',
  };
  const [addresses, setAddresses] = useState<IAddress[]>([])
  const deleteAddress = (id: string) => {
    const index = addresses.findIndex((address: IAddress) => address.id === id);
    if (index > -1) {
      setAddresses(addresses.splice(index, 1))
    }
  }

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().min(2, 'Too Short!').required("Please Enter First Name"),
          lastName: Yup.string().min(2, 'Too Short!').required("Please Enter Last Name"),
          phonenumber: Yup.number().required("Please Enter Phone Number"),
          city: Yup.string().required("Please Enter City"),
          county: Yup.string().required("Please Enter County"),
          address: Yup.string().required("Please Enter Address"),
          doorNumber: Yup.string(),
        })}
        onSubmit={(values,{resetForm}) => {
          const newAddresses = { ...values }
          setAddresses(addresses => [...addresses, newAddresses])
          resetForm();
        }}
      >
        {({ errors, touched }) => (

          <Form>
            <h1>New Address</h1>

            <div className={styles.fields}>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="First Name" />
              {errors.firstName && touched.firstName ? (
                <p>{errors.firstName}</p>
              ) : null}
            </div>
            <div className={styles.fields}>
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="Last Name" />
              {errors.lastName && touched.lastName ? (
                <p>{errors.lastName}</p>
              ) : null}
            </div>
            <div className={styles.fields}>
              <label htmlFor="phonenumber">Phone Number</label>
              <Field id="phonenumber" name="phonenumber" placeholder="Phone Number" />
              {errors.phonenumber && touched.phonenumber ? (
                <p>{errors.phonenumber}</p>
              ) : null}
            </div>
            <div className={styles.fields}>
              <label htmlFor="city">City</label>
              <Field id="city" name="city" placeholder="City" />
              {errors.city && touched.city ? (
                <p>{errors.city}</p>
              ) : null}
            </div>
            <div className={styles.fields}>
              <label htmlFor="county">County</label>
              <Field id="county" name="county" placeholder="County" />
              {errors.county && touched.county ? (
                <p>{errors.county}</p>
              ) : null}
            </div>
            <div className={styles.fields}>
              <label htmlFor="address">Address</label>
              <Field id="address" name="address" placeholder="Address" />
              {errors.address && touched.address ? (
                <p>{errors.address}</p>
              ) : null}
            </div>
            <div className={styles.fields}>
              <label htmlFor="doorNumber">Door Number</label>
              <Field id="doorNumber" name="doorNumber" placeholder="Door Number" />
            </div>
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>

      <div className={styles.newaddress}>
        {addresses.length > 0 &&
          <>
            <h1>
              Addresses
            </h1>
            <ul>
              {addresses.map((address: IAddress, i: number) => (
                <li key={i} >
                  <p>
                    {address.address}
                  </p>
                  <RiDeleteBin7Line onClick={() => deleteAddress(address.id)} />
                </li>
              ))}
            </ul></>
        }
      </div>
    </div>
  );
};
export default MyApp