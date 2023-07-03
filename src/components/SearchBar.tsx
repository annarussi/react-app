

interface Props {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export default function SearchBar({ placeholder, onChange }:Props) {


  return (
    <input className="search"
    type="search"
    placeholder={placeholder}
    onChange={onChange}
    />
  )

}
