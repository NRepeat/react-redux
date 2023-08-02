import { Field, Form, Formik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import * as ActionCreators from "../../redux/actions/actionToDoCreater"
function ToDo(props) {
    const { task, dispatch } = props;
    console.log(task.task,"asdas")
    const initValues = {
        task: []
    }

    const submitHandler = ({task}, formikBag) => {
        console.log(task)
        const newTask = ActionCreators.addTask(task)

        dispatch(newTask)
        formikBag.resetForm()

    }

    return (
        <Formik initialValues={initValues} onSubmit={submitHandler}>
            <Form>
                <Field name='task' />
                <button type='submit' >Add task</button>
                <div>{task.task.map((task,id)=><div key={id}>{task}</div>)}</div>
            </Form>
        </Formik>
    )
}

function toDoStateToProp(state) {

    return {
        
        task: state.task
    }
}

export default connect(toDoStateToProp)(ToDo)