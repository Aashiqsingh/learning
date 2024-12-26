import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header'
import { Middle } from './component/Middle';
import { Footer } from './component/Footer';


function App() {

  var a = 10;
  var name = "Khushi";
  var flag = true;
  var student = {
    id:1,
    name:"hemangini",
    std:12
  }


  return (
    <>

      {/* <h1>Khushi thakkar</h1>
      <p>Royal technosoft</p> */}
        {/* <h1>{a} -- {name}</h1> */}

        {/* <h1>{flag === true ? "True" : "False"} </h1> */}

        {/* <h2>{student.id} {student.name} {student.std}</h2> */}

        <Header/>
        <Middle/>
        <Footer/>

    </>
  );
}

export default App;
