import React, {useState} from 'react';
import {CommentIcon} from "../CommentIcon";
import Input from "../Input";
import Comments from "../Comments";


export default function Card({attr}) {
    // const [commentField, setCommentField] = useState(false);

    const [commentsArr, setCommentsArr] = useState([]);
    // let arrOfComm = []
    const [fieldVal, setFieldVal] = useState('')

    const {name, birth_year} = attr;
    const handleApply = (e) => {
        setCommentsArr(oldArr => [...oldArr, fieldVal])
        setFieldVal('')
    }

    return (
        <>
            <div className="card">
                <div>
                    <h2 className="card-name">{name}</h2>

                </div>
                <div className="card-body">
                    <span className="birthday-atr">{birth_year}</span>

                    <div className="card-footer">
                        <input value={fieldVal} onChange={(e) => setFieldVal(e.target.value)}/>
                        <div className="button-icon">
                            <button className="apply-button" onClick={handleApply}>Apply</button>
                            <CommentIcon style={"Add"}/>
                        </div>
                        <Comments arrOfCommnets={commentsArr}/>
                    </div>

                </div>
            </div>

        </>
    );
}
