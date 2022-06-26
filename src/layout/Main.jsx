import { data } from '../data.js';
import '../stylesheets/layout/main.scss';
import Card from '../components/Card';

function Main() {

  return (
    <main>
      <h1>Popular Tour Places</h1>
      <div className='cards'>
        {data.map(item => (
          <Card key={item.id} {...item} />))}
      </div>
    </main>
  )
}


export default Main;