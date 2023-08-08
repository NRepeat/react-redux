import React from "react";
import { connect, useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { createSuperhero } from "../../redux/slices/superheroSlice";

function Superhero(props) {
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    dispatch(createSuperhero());
  };

  const MapedSp = () => (
    <div>
      <h1>Супергерои</h1>
      {/* <ul>
        {superheros.map((hero) => (
          <li key={hero.id}>
            <strong>Nickname: </strong> {hero.nickname}
            <br />
            <strong>Real Name: </strong> {hero.realName}
            <br />
            <strong>Origin Description: </strong> {hero.originDescription}
            <br />
            <strong>Catch Phrase: </strong> {hero.catchPhrase}
            <br />
            <strong>Superpowers: </strong>{" "}
            {hero.superpowers.map((superpower) => {
              const superpowers = superpower.superpower.join(",");
              return superpowers;
            })}
            <br />
            <br />
          </li>
        ))}
      </ul> */}
    </div>
  );
  // const SpForm = () => {
  //     <Formik>
  //         <Form>
  //             <Field name="Nickname" />
  //             <Field />
  //             <Field />
  //             <Field />
  //         </Form>
  //     </Formik>
  // }

  return (
    <>
      <MapedSp />
      <button onClick={submitHandler}>Get Superheros</button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    superhero: state.superhero,
  };
}

export default connect(mapStateToProps)(Superhero);
