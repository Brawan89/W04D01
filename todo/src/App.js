import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Todo from "./components/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render(){
    return(<>
      <Header/>
      <Todo/>
      <Footer/>
      </>
      )
  }
}

export default App;
