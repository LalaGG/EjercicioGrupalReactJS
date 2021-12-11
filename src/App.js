import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card";
import './style.css'
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="container container-ucamp">
      <NavBar/>
      <Card title="Lejia" url="https://pepelapiz.com.pe/wp-content/uploads/2020/07/Sin-t%C3%ADtulo-1-Recuperado-16.jpg"/>
      <Card title="Escoba" url="https://promart.vteximg.com.br/arquivos/ids/569873-1000-1000/106667.jpg?v=637401115008330000"/>
      <Card title="Recogedor" url="https://i.pinimg.com/originals/83/d2/0f/83d20f872f1b2884630cbf027d696202.png"/>
      <Card title="Trapeador" url="https://falabella.scene7.com/is/image/FalabellaPE/17798801_1"/>
      <Card title="Glade" url="https://m.media-amazon.com/images/I/81j-h4mqpyL._AC_SL1500_.jpg"/>
      <Card title="Pinesol" url="https://m.media-amazon.com/images/I/613S+r-ZfQS._SX342_.jpg"/>
      <Footer/>
    </div>
  );
}

export default App;
