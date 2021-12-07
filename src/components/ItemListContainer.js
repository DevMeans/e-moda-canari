import React from "react";
import { Component } from "react";
import common from "./common";
function ItemListContainer(props) {

    let { greeting = "Hola este es el mensaje del ItemListContainer" } = props

    return (
        <>
            <common.TitleTablet Text={greeting} estilo="text-primary" ></common.TitleTablet>
        </>
    )

}
export default ItemListContainer