import React from "react";

const Comments = ({arrOfCommnets}) => {

    return (
        <div className="comments-list">
            {arrOfCommnets.map(comment => <span key={comment}>{comment}</span>)}
        </div>

    )
}
export default Comments