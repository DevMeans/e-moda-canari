import React,{Component} from "react";
import common from "./common";
class shell extends Component {
    constructor(){
        this.saludo='Hola'
    }
    handleClick(params){
            this.setState({click:2})
    }
    render(){
        <>
            <common.TitleTablet text ="Hola"></common.TitleTablet>
            <common.TitleTablet text ="Ejemplo"></common.TitleTablet>
            <common.TitleTablet text ="adios"></common.TitleTablet>
            <common.buttonSubmit click={this.handleClick}></common.buttonSubmit>
        
        </>
    }
}