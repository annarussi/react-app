import { chocolatesList } from '../data/chocolates';
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import Card from '../components/Card'
import React from 'react'


export default function ChocolatesList() {

  const [search, setSearch] = React.useState("");

  const searchLowerCase = search.toLowerCase();

  const chocolates = chocolatesList.filter(chocolate =>
    chocolate.name.toLowerCase().includes(searchLowerCase) ||
    chocolate.type.toLowerCase().includes(searchLowerCase) ||
    chocolate.filling.toLowerCase().includes(searchLowerCase)
    );

  const [descriptionVisible, setDescriptionVisible] = React.useState(false);

  return (
    <>
    <div className="d-flex justify-content-between">
      <SearchBar
        placeholder="Search for a chocolate!"
        onChange={(event) => setSearch(event.target.value)} />

      { chocolates.length > 0 &&  <Button onCLick={() => setDescriptionVisible(!descriptionVisible)}>+ infos</Button>}

      </div>

      { chocolates.length === 0 && <h3 className="text-center no-match-text"><em>Sorry, we couldn't find any chocolates matching your search.</em></h3> }
      <div className="chocolates-cards m-auto">

          {chocolates.map(chocolate => {
            return(
              <Card {...chocolate} // spread operator, pass all the properties of chocolate as props
                descriptionVisible={descriptionVisible}
              />
            )

          })}
      </div>
    </>
  )
}
