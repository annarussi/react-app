import {chocolates} from '../data/chocolates'

export default function ChocolatesList() {
  return (
    <div className="chocolates-cards m-auto">
        {chocolates.map((chocolate) => (
          <div className="card shadow-sm chocolate-card ">
            <img
              src={`https://www.leonidas.com/sites/default/files/styles/product_ts_list/public/2021-03/${chocolate.img}`}
              alt={`${chocolate.name}`}
              className="chocolate-img">
            </img>

            <div className="card-body">
              <h6 className="text-center">{chocolate.name}</h6>
              {/* <p className="text-center">{chocolate.description}</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

        ))}
    </div>
  )
}
