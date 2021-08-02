import React, { Component } from 'react';

class Usercart extends React.Component {
    constructor(){
        super()

        this.state = {
            pokeball: 0,
            greatball: 0,
            ultraball: 0,
            diveball: 0,
            masterball: 0,
            awakening: 0,
            fullrestore: 0,
            potion: 0,
            hyperpotion: 0,
            revive: 0,
            rarecandy: 0,
            metalcoat: 0,
            sinnohstone: 0,
            thunderstone: 0,
            waterstone: 0,
            calcium: 0,
            carbos: 0,
            hpup: 0,
            protien: 0,
            zinc: 0,
            oldrod: 0,
            goodrod: 0,
            superrod: 0,
            bicycle: 0,
            explorerkit: 0,
            usertotal: 0,
            totalitems: 0
        }
//{add items / remove items function bindings}
        this.addpokeball = this.addpokeball.bind(this)
        this.removepokeball = this.removepokeball.bind(this)
    }

//{add / remove functions}
    addpokeball(){
        this.setState({
            pokeball: this.state.pokeball + 1
        })
    }

    removepokeball(){
        this.setState({
            pokeball: this.state.pokeball - 1
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.pokeball}</h1>
                <button onClick={this.addpokeball}>+</button>
                <button onClick={this.removepokeball}>-</button>
            </div>
        )
    }

}

export default Usercart