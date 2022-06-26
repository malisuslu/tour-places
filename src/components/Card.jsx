import '../stylesheets/components/card.scss';

function Card(props) {


  return (
    <div className='card'>
      <h2 className='city-name'>{props.title}</h2>
      <img src={props.image} alt={props.title}/>
      <p className='desc'>{props.desc}</p>
    </div>
  )
}

export default Card;