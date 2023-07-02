interface Props {
  text: string;
}


const Button = ({text}: Props) => {
  return (
    <button className="btn btn-primary">{text}</button>
  )
}

export default Button
