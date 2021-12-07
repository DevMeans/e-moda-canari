
import React from "react";
const common = {
    buttonSubmit: () => (<button>Butoon</button>),
    TitleTablet: ({ Text,estilo }) => (<h1 className={estilo}>{Text}</h1>),
    Saludo: ({ greeting }) => (<h1>{greeting}</h1>)

}
export default common