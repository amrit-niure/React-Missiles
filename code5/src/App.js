
import './App.css';
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';
import data from './data'

function App() {
  const cards = data.map(element => {
    return (
      <Card 
      key = {element.id}
      // item = {element}
      {...element}
      // status= {element.openSpots}
      // cardImage= {element.coverImg}
      // starImage= {starImage}
      // rating = {element.stats.rating}
      // anotherRating = {element.stats.reviewCount}
      // country ={element.location}
      // quote = {element.title}
      // rate = {element.price}
      />
    )
  })
  return (
    <div className="contacts">
     <Navbar />
     <Hero />
     <section className='cards-list'>
     {cards} 

     </section>
    
    </div>
  );
}

export default App;
