import React, { useMemo } from "react";
import { bindActionCreators } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import * as SuperheroActionCreators from "../../redux/actions/actionSuperheroCreator";
import { getAllSuperheros } from "../../redux/slice";

function Superhero(props) {
  const { superheros } = useSelector((state) => state.superhero);

  const dispatch = useDispatch();
  const boundActionCreators = useMemo(
    () => bindActionCreators(getAllSuperheros, dispatch),
    [dispatch]
  );
  const { getAllSuperherosRequest } = boundActionCreators;

  const submitHandler = (values) => {
    dispatch(getAllSuperheros());
  };

  const MapedSp = () => (
    <div>
      <h1>Супергерои</h1>
      <ul>
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
            <br />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <MapedSp />
      <button onClick={submitHandler}>Get Superheros</button>
    </>
  );
}

// function mapStateToProps(state) {
//     return {
//         superhero: state.superhero,
//     };
// }

export default Superhero;
