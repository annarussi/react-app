

interface Props {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export default function SearchBar({ placeholder, onChange }:Props) {

  return (

    <input className="form-control w-50 m-auto mt-5 mb-5 search"
    type="search"
    placeholder={placeholder}
    onChange={onChange}
    />
  )

}






// const [search, setSearch] = React.useState("");

// const searchLowerCase = search.toLowerCase();

// const chocolates = chocolatesList.filter(chocolate =>
//   chocolate.name.toLowerCase().includes(searchLowerCase)
//   );
