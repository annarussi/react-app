import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Comment() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
    {comments.map(comment => {
      return <h1>{comment.body}</h1>
    })}
    </>
  )
}
