import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function ToDo() {

const initValues = {
    task:" "
} 

const submitHandler = (values,formikBag)=>{
   
    console.log(values.task)
    formikBag.resetForm()
   
}

    return (
        <Formik initialValues={initValues} onSubmit={submitHandler}>
            <Form>
                <Field name='task' />
                <button type='submit' >Add task</button>
            </Form>
        </Formik>
    )
}
