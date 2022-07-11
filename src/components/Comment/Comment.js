import React from "react";

const Comment = () => {
    return (
        <div className="comment">
            <img src="https://via.placeholder.com/80" className="comment__user-avatar" alt="avatar"></img>
            <div className="comment__holder">
                <h4 className="comment__username">John Doe:</h4>
                <p className="comment__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
        </div>
    );
};

export default Comment;