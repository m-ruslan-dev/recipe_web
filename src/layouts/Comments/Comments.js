import React from "react";
import AddNewComment from "../../components/AddNewComment/AddNewComment";
import Comment from "../../components/Comment/Comment";

const Comments = () => {
    return (
        <section className="comments-section container">
            <AddNewComment />
            <div className="comments-section__holder">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </section>
    )
}

export default Comments;