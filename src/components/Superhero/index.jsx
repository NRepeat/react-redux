import React from 'react'

import { connect } from 'react-redux';
import * as SuperheroActionCreators from '../../redux/actions/actionSuperheroCreator';


function Superhero(props) {
    console.log(props,'props')
    const {superhero,createSuperheroAction} = props
    console.log(superhero.superheros,'superherosArr')
    const mapedSp = superhero.superheros
    const submitHandler = (values) => {

        createSuperheroAction()

    }
    return (
        <> 
        <div>
      <h1>Супергерои</h1>
      <ul>
        {mapedSp.map((hero) => (
          <li key={hero.id}>
            <strong>Nickname: </strong> {hero.nickname}<br />
            <strong>Real Name: </strong> {hero.realName}<br />
            <strong>Origin Description: </strong> {hero.originDescription}<br />
            <strong>Catch Phrase: </strong> {hero.catchPhrase}<br />
            <br />
          </li>
        ))}
      </ul>
    </div>
            <button onClick={submitHandler}>Get Superheros</button>
        </>



    )
}


const mDtP = (dispatch) => ({
    createSuperheroAction: () =>
        dispatch(SuperheroActionCreators.getAllSuperherosRequest())

});
function mapStateToProps(state) {
    return {
        superhero: state.superhero,
    };
}

export default connect(mapStateToProps, mDtP)(Superhero)