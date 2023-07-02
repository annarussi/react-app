import { chocolatesList } from '../data/chocolates';
import React from 'react'


export default function ChocolatesList() {
  const [search, setSearch] = React.useState("");

  const searchLowerCase = search.toLowerCase();

  const chocolates = chocolatesList.filter(chocolate =>
    chocolate.name.toLowerCase().includes(searchLowerCase) ||
    chocolate.type.toLowerCase().includes(searchLowerCase) ||
    chocolate.filling.toLowerCase().includes(searchLowerCase)
    );

  return (
    <>
      <input className="form-control w-50 m-auto mt-5 mb-5 search"
            type="search"
            placeholder='Search for a chocolate'
            value={search}
            onChange={(event) => setSearch(event.target.value)}/>

      { chocolates.length === 0 && <h3 className="text-center no-match-text"><em>Sorry, we couldn't find any chocolates matching your search.</em></h3> }
      <div className="chocolates-cards m-auto">

          {chocolates.map((chocolate) => (
            <div className="card chocolate-card ">
              <img
                src={`${chocolate.img}`}
                alt={`${chocolate.name}`}
                className="chocolate-img">
              </img>

              <div className="card-body">
                <h6 className="text-center">{chocolate.name}</h6>
                {/* <p className="text-center">{chocolate.description}</p> */}
              </div>
            </div>

          ))}
      </div>
    </>
  )
}
