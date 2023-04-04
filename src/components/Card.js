import trash  from '../Images/Trash.svg'

function Card({card, onCardClick}){
  function handleClick() {
    onCardClick(card);
  }  
    return(
        <li className="place" key={card._id}> 
        <img className="place__img" src={card.link} alt={card.name} onClick={handleClick}/>
        <div className="place__element">
          <h2 className="place__title">{card.name}</h2>
          <div className="place__icon-group">
            <button className="place__icon" type="button"></button>
            <p className="place__icon-number">{card.likes.length}</p>
          </div>
        </div>
        <img
        
          className="place__delete"
          src={trash}
          alt=""
        />
      </li>
    )
}
export default Card;