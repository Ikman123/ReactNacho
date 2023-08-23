import React from 'react';
import './App.css';
import Card from './Components/Card'

function App() {
  return (
    <div className='App'>
      <Card 
      title='El mas grande del inTerior'
      imageUrl='https://www.cadena3.com/admin/playerswf/fotos/ARCHI_998572.jpg'
      body='En 1912, los antiguos espectadores de “la cancha de los ingleses” ya tienen alrededor de 18 años. Algunos ya empleados del Ferrocarril Central Córdoba debaten en charlas para la conformación de un club. Las primeras reuniones informales se dieron en la tornería del Ferrocarril, a cargo de obreros de la empresa. Finalmente decidieron convocar a una reunión general. En el hogar de Ángel Savatelli, se juntaron los gestores de la entidad con la idea de constituir un cuadro poderoso. La fundación del Club Atlético Talleres Central Córdoba tuvo lugar el 4 de octubre de 1913.'
      />
    </div>
  );
}

export default App;
