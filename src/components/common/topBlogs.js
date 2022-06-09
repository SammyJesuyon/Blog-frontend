import React, {useEffect, useState} from 'react';
import axios from "axios";
import {SIMILAR_BLOG_URL, TOP_BLOG_URL} from "../utils/urls";
import Skeleton from "react-loading-skeleton";
import BlogCardExtra from "./blogCardExtra";

const BlogCommon = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect( () => {
        axios.get(props.similar ? (SIMILAR_BLOG_URL + props.id) : TOP_BLOG_URL).then((res) => {
            console.log('top blogs', res.data);
            setBlogs(res.data);
            setFetching(false)
        }).catch(
            (err) => {
                console.log(err)
            }
        );
    }, []);
    if (fetching){
        return <>
            <Skeleton height={150} />
            <Skeleton height={150} />
            <Skeleton height={150} />
        </>
    }
    else {
        {
            return blogs.length < 1 ? (<h4>No {props.similar ? 'related' : 'top'} blog found </h4>
                ) : (
                    blogs.map((item, id) => <BlogCardExtra key={id} data={item} />))
        }
    }
};

export default BlogCommon;