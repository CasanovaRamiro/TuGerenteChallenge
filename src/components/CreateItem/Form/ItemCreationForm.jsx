import React from "react";
import css from "./ItemCreationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { itemValidationSchema } from "../../../assets/validationSchemas/itemValidationSchema";
import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

function ItemCreationForm({ query, setDisplay }) {
  const firestoreUserRef = collection(db, "users");
  const createSubmit = async (newUser) => {
    // try{
    await addDoc(firestoreUserRef, newUser);
    //   Swal.fire({
    //   title: 'User Created!',
    //   text: "the user was successfully created!",
    //   showCancelButton: false,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Accept'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //   setDisplay(false)
    //   }
    // })
    // }catch(error){
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Something went wrong!'
    //   })
    // }
  };
  return (
    <Formik
      initialValues={{
        name: query,
        socialReason: "",
        nit: "",
        phone: "",
        code: "",
      }}
      validationSchema={itemValidationSchema}
      onSubmit={(values) => {
        createSubmit(values);
      }}
    >
      {({ errors }) => (
        <Form className={css.formContainer}>
          <div className={css.inputContainer}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" placeholder="name" />
            <ErrorMessage
              name="name"
              component={() => <div className={css.error}>{errors.name}</div>}
            />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="socialReason">socialReason</label>
            <Field
              type="text"
              id="socialReason"
              name="socialReason"
              placeholder="socialReason"
            />
            <ErrorMessage
              name="socialReason"
              component={() => (
                <div className={css.error}>{errors.socialReason}</div>
              )}
            />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="nit">Image</label>
            <Field type="number" id="nit" name="nit" placeholder="nit" />
            <ErrorMessage
              name="nit"
              component={() => <div className={css.error}>{errors.nit}</div>}
            />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="phone">phone</label>
            <Field type="number" id="phone" name="phone" placeholder="phone" />
            <ErrorMessage
              name="phone"
              component={() => <div className={css.error}>{errors.phone}</div>}
            />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor="code">code</label>
            <Field type="text" id="code" name="code" placeholder="code" />
            <ErrorMessage
              name="code"
              component={() => <div className={css.error}>{errors.code}</div>}
            />
          </div>
          <div className={css.inputContainer}>
            <button className={css.submit} type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
/**
 * {
    "name": "Raul",
    "socialReason": "hola",
    "nit": "niiit",
    "phone": 1233123,
    "code": "dsf3dg5245d"
  }
 */

export default ItemCreationForm;