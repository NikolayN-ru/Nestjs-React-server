import React, { FC } from "react"
import BlogPost from "../../components/BlogPost/BlogPost";
import ArrowFilterBlog from "../../components/Icons/ArrowFilterBlog";
import NewPost from "../../components/NewPost/NewPost";
import { ArrowFilterBlogWrapper, BlogFilter, BlogFilterDescription, BlogWrapper } from "./Blog.styled";

const Blog: FC = () => {
    return (
        <BlogWrapper>
            <NewPost/>
            <BlogFilter>
                <BlogFilterDescription>
                    <p>
                        Sort by: trending
                    </p>
                    <ArrowFilterBlogWrapper>
                        <ArrowFilterBlog/>
                    </ArrowFilterBlogWrapper>
                </BlogFilterDescription>
            </BlogFilter>
            <BlogPost/>
        </BlogWrapper>
    )
}
export default Blog;