import React, { Component } from 'react'
import { Players } from '../shared/ListOfPlayer'
//import PlayersPresentation from './PlayersPresentation';
import FootballPlayer from './Players';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            Players: Players
        };
    }
    render(){
        return <FootballPlayer players={this.state.players}/>

    }
}
export default Main