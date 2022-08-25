import React, { FC, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import BlogPost from "../../components/BlogPost/BlogPost";
import ArrowFilterBlog from "../../components/Icons/ArrowFilterBlog";
import NewPost from "../../components/NewPost/NewPost";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getArticles } from "../../redux/thunks/articles";
import { Title } from "../Cart/Cart.styled";
// import { ArrowFilterBlogWrapper, BlogFilter, BlogFilterDescription, BlogWrapper } from "./Blog.styled";

const Blog: FC = () => {
    // const [articles, setArticles] = 
    const { slugItem } = useParams();

    const dispatch = useAppDispatch()

    // useEffect(() => {
    //   dispatch(getArticles(filters))
    // }, [filters])

    const { all } = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(getArticles())
    }, [])


    useEffect(() => {
        console.log('Посты: ', all)
    }, [all])


    return (
        <div>
            <hr />
            <br />
            <h1>BLOGITEM</h1>
            <p>{slugItem}</p>
        </div>
    )
}
export default Blog;
