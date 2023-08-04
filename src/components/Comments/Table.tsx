import React, { useState, useEffect, useCallback } from 'react'
import { Comment, User } from '../../models/commentType';
import { DarkModeContext } from '../useDarkmode/DarkModeContext';
import Navbar from '../Navbar/Navbar';

const Table = ( ) => {
    const [comments, setComments] = useState<Comment[]>([])
    const [limit, setLimitstate] = useState(10)
    const [count, setCount] = useState(0)
    
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
    const handleInc = useCallback ((limit : number) => {
        setLimitstate(limit + 10);
        setCount(count + 1)
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
            <div className="d-flex justify-content-center">
                <p className="m-3" id="counter">Lettura blocco {count}</p>
                <button className="btn btn-primary" id="more" onClick={() => handleInc(limit)}>Leggi il prossimo blocco: {count + 1}</button>
            </div>
        </>
  )
}

export default Table