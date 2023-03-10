import "./estilo.css";
//mport {Link} from "react-router-dom";


export default function App(){
  let nome = "Chiquim";

  let cursos = [
    'Marketing',
    'FullStack',
    'Data Analystics',
  ];

  return (
    <>
    <header>
    
    </header>
    <h1> Ola mundo</h1>
    <h2 className="red">  hello </h2>

    <p>
      bem vindo {nome}
    </p>
<hr />
    <ul>
      {cursos.map(function (x){
        return (<li> {x} </li>);
      })}

      <hr />
      {cursos.map (x => <li> {x}</li>)}
      <li>{cursos[0]}</li>
      <li>{cursos[1]}</li>
      <li>{cursos[2]}</li>
    </ul>
    </>
  )
}