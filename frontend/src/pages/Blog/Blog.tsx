import React, { FC, useEffect } from "react"
import { Link } from "react-router-dom";
import BlogPost from "../../components/BlogPost/BlogPost";
import ArrowFilterBlog from "../../components/Icons/ArrowFilterBlog";
import NewPost from "../../components/NewPost/NewPost";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getArticles } from "../../redux/thunks/articles";
import { Title } from "../Cart/Cart.styled";
import { ArrowFilterBlogWrapper, BlogFilter, BlogFilterDescription, BlogWrapper } from "./Blog.styled";

const Blog: FC = () => {
    // const [articles, setArticles] = 
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //   dispatch(getArticles(filters))
    // }, [filters])

    const { all } = useAppSelector(state => state.posts)

    useEffect(() => {
        dispatch(getArticles())
    }, [])


    useEffect(() => {
        console.log('Посты: ', all)
    }, [all])


    return (
        <BlogWrapper>
            <NewPost />
            <BlogFilter>
                <BlogFilterDescription>
                    <p>
                        Sort by: trending
                    </p>
                    <ArrowFilterBlogWrapper>
                        <ArrowFilterBlog />
                    </ArrowFilterBlogWrapper>
                </BlogFilterDescription>
            </BlogFilter>
            <BlogPost />
            <hr />
            {all.map((item, key) => <p>{item.id} = {item.title} <Link to={`/blog-item/${item.slug}`}>{item.slug}</Link> </p>)}
        </BlogWrapper>
    )
}
export default Blog;
