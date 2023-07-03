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
    <ul>
    {comments.slice(0, 5).map(comment => {
      return (
        <li className="comments">
          "{comment.body}"
          <em>sent by: {comment.email}</em>
        </li>
      )
    })}
    </ul>
    </>
  )
}
