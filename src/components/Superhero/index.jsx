import React, { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { connect, useDispatch, useSelector } from 'react-redux';
import * as SuperheroActionCreators from '../../redux/actions/actionSuperheroCreator';
import { Field, Form, Formik } from 'formik';


function Superhero(props) {

    const { superheros } = useSelector((state) => state.superhero)
    console.log(superheros)
    const dispatch = useDispatch()
    const boundActionCreators = useMemo(
        () => bindActionCreators(SuperheroActionCreators, dispatch),
        [dispatch]
    )
    const { getAllSuperherosRequest } = boundActionCreators

    const submitHandler = (values) => {
        getAllSuperherosRequest()
    }

    const MapedSp = () => (<div>
        <h1>Супергерои</h1>
        <ul>
            {superheros.map((hero) => (
                <li key={hero.id}>
                    <strong>Nickname: </strong> {hero.nickname}<br />
                    <strong>Real Name: </strong> {hero.realName}<br />
                    <strong>Origin Description: </strong> {hero.originDescription}<br />
                    <strong>Catch Phrase: </strong> {hero.catchPhrase}<br />
                    <strong>Superpowers: </strong> {hero.superpowers.map((superpower) => {
                        const superpowers = superpower.superpower.join(',')
                        return superpowers
                    }
                    )}<br />
                    <br />
                </li>
            ))}
        </ul>
    </div>)
    const SpForm = () => {
        <Formik>
            <Form>
                <Field name="Nickname" />
                <Field />
                <Field />
                <Field />
            </Form>
        </Formik>
    }

    return (
        <>
            <MapedSp />
            <button onClick={submitHandler}>Get Superheros</button>
        </>



    )
}



function mapStateToProps(state) {
    return {
        superhero: state.superhero,
    };
}

export default connect(mapStateToProps)(Superhero)