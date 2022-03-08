import React from "react";
import Nav from "./components/Nav";
import TablaClientes from "./pages/TablaClientes";

class App extends React.Component {

  render() {
    return (
      <> {/* Fragment para agrupar sin que afecte al estilado de la pantalla*/}
        <Nav />
        <TablaClientes />
      </>
    )
  }

}

export default App;
