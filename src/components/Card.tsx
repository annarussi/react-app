interface Card {
  id?: number;
  name: string;
  type?: string;
  filling?: string;
  description: string;
  weight?: number;
  img: string;
  descriptionVisible: boolean;
}


export default function Card ({name, filling, description, img, descriptionVisible}: Card) {
  return (
    <div className="card item-card">

    <img
      src={`${img}`}
      alt={`${name}`}
      className="chocolate-img">
    </img>

    <div className="card-body">
      <h6 className="text-center">{name}</h6>
      { descriptionVisible && (
      <>
        <hr />
        <p className="text-infos"><strong>Description:</strong><em> {description} </em></p>
        <p className="text-infos"><strong>Filling:</strong> <em>{filling} </em></p>
      </>
      )}
    </div>
  </div>
  )
}
