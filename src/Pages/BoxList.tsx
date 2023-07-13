import { boxesList } from '../data/boxes';
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import Button from '../components/Button'
import React from 'react'


export default function ChocolatesList() {

  const [search, setSearch] = React.useState("");

  const searchLowerCase = search.toLowerCase();

  const boxes = boxesList.filter(box =>
    box.name.toLowerCase().includes(searchLowerCase)
    );

  const [descriptionVisible, setDescriptionVisible] = React.useState(false);

  return (
    <>
      <div className="d-flex justify-content-between">
        <SearchBar
          placeholder="Search for a box!"
          onChange={(event) => setSearch(event.target.value)} />

        { boxes.length > 0 &&  <Button onCLick={() => setDescriptionVisible(!descriptionVisible)}>+ infos</Button>}
      </div>

      { boxes.length === 0 && <h3 className="text-center no-match-text"><em>Sorry, we couldn't find any box matching your search.</em></h3> }
      <div className="chocolates-cards m-auto">

          {boxes.map(box => {
            return(
              <Card {...box}
              descriptionVisible={descriptionVisible}
              />
            )
          })}
      </div>
    </>
  )
}
