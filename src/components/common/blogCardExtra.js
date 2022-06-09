import React from 'react';
import moment from "moment";

const BlogCardExtra = (props) => {
    return (
        <div className="blogCardExtra">
            <div className="blogImage" style={{backgroundImage: `url(${props.data.cover})` }}/>
            <div className="blogContent">
                <div className="blogTitle">{props.data.title}</div>
                <button>Read Blog</button>
                <div className="footer">
                    <span className="textCapitalized">
                        Created by {props.data.author.username}, on {
                        moment(new Date(props.data.created_at)).format('YYYY-MM-DD')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogCardExtra;