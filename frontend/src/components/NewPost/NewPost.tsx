import React, { FC } from "react"
import ArrowIco from "../Icons/ArrowIco";
import Clip from "../Icons/Clip";
import FilmIco from "../Icons/FilmIco";
import ImageIco from "../Icons/ImageIco";
import { ButtonAppruve, HrBlog, IconsBlog, IcoWrapper, InputBlock, InputBlog, InputBlogWrapper, NewPostWrapper, TitleBlog } from "./NewPost.styled";

const NewPost: FC = () => {
    return (
        <NewPostWrapper>
            <TitleBlog>
                new post
            </TitleBlog>
            <HrBlog />
            <InputBlogWrapper>
                <InputBlock>
                    <InputBlog placeholder="What’s on your mind?" />
                    <IconsBlog >
                        <IcoWrapper>
                            <Clip />
                        </IcoWrapper>
                        <IcoWrapper>
                            <ImageIco />
                        </IcoWrapper>
                        <IcoWrapper>
                            <FilmIco />
                        </IcoWrapper>
                        <ButtonAppruve>
                            <ArrowIco />
                        </ButtonAppruve>
                    </IconsBlog>
                </InputBlock>
            </InputBlogWrapper>
        </NewPostWrapper>
    )
}
export default NewPost;