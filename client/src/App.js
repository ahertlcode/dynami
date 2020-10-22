import React, { Component } from "react";
import truffleContract from "truffle-contract";
import IPFSInboxContract from "./contracts/IPFSInbox.json";
import DynamiContract from "./contracts/DynamiToken.json";
import DunamiSaleContract from "./contracts/DynamiTokenSale.json";
import getWeb3 from "./getWeb3";
import ipfs from './ipfs';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";



import "./App.css";

class App extends Component {
  constructor(props) {
    super (props)
  }

  componentDidMount = async () => {
    try {
      //
    } catch (error) {
      //
    }
  };

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;