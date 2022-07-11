import React from "react";

const addNewComment = () => {
    return (
        <div className="add-comment">
            <h3 className="add-comment__heading"><span className="add-comment__number">34</span> comments</h3>
            <form className="add-comment__form">
                <textarea className="add-comment__input" placeholder="Add new comment"></textarea>
                <button type="submit" className="recipe-page-btn">Submit</button>
            </form>
        </div>
    )
}

export default addNewComment;