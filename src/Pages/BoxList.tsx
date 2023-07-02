import { boxesList } from '../data/boxes';
import SearchBar from '../components/SearchBar'
import React from 'react'


export default function ChocolatesList() {

  const [search, setSearch] = React.useState("");

  const searchLowerCase = search.toLowerCase();

  const boxes = boxesList.filter(box =>
    box.name.toLowerCase().includes(searchLowerCase)
    );

  return (
    <>
      <SearchBar
        placeholder="Search for a box!"
        onChange={(event) => setSearch(event.target.value)} />

      { boxes.length === 0 && <h3 className="text-center no-match-text"><em>Sorry, we couldn't find any box matching your search.</em></h3> }
      <div className="chocolates-cards m-auto">

          {boxes.map((box) => (
            <div className="card item-card ">
              <img
                src={`${box.img}`}
                alt={`${box.name}`}
                className="chocolate-img">
              </img>

              <div className="card-body">
                <h6 className="text-center">{box.name}</h6>
                <p className="text-center">{box.description}</p>
              </div>
            </div>

          ))}
      </div>
    </>
  )
}
