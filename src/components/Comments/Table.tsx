import React, { useState, useEffect, useCallback } from 'react'
import { Comment, User } from '../../models/commentType';
import { DarkModeContext } from '../useDarkmode/DarkModeContext';
import Navbar from '../Navbar/Navbar';
import './Table.css'
const Table = ( ) => {
    const [comments, setComments] = useState<Comment[]>([])
    const [limit, setLimitstate] = useState(10)
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetchAPI();
      }, [limit]); 

    let skip = 0;
    async function fetchAPI() {
      try {
        const url = `https://dummyjson.com/comments?skip=${skip}&limit=${limit}`;
        const response = await fetch(url);
        const data = await response.json();
        setComments(data.comments)
      } catch (err) {
        console.log("Request Failed", err);
      }
    }
    const hideBtn = useCallback(() => {
        setShow(true);
        setTimeout(() => {
          setShow(false); 
        }, 1000);
      }, []);
    const handleInc = useCallback ((limit : number) => {
        hideBtn();
        setLimitstate(limit + 10);
        setCount(count + 1)
        console.log(show)
    }, [limit])
  return (
        <>
            <div className="row comment-box">
                <table className="table" id="comment-section">
                    <thead>
                    <tr>
                        <th scope="col">Post ID</th>
                        <th scope="col">User</th>
                        <th scope="col">Comment</th>
                    </tr>
                    </thead>
                    <tbody>{comments.map((comment) => (
                            <tr>
                                <th scope="row">{comment.id}</th>
                                <td>{comment.user.username}</td>
                                <td>{comment.body}</td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
            <div className="show">
                <p className="m-3" id="counter">Lettura blocco {count}</p>
                <button disabled={show} className={`btn btn-primary show`} id="more" onClick={() => handleInc(limit)}>Leggi il prossimo blocco: {count + 1}</button>
            </div>
        </>
  )
}

export default Table