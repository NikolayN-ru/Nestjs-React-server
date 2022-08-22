import React, { FC } from "react"
import More from "../Icons/More";
import { BlogPostWrapper, DescriptionPostWrapper, Links, LinksWrapper, MainButton, MainText, PersonImage, PersonLabel, PersonName, TitlePost, TitleWrapper } from "./BlogPost.styled";
import Person from '../../assets/person.png';
import LikeOk from "../Icons/LikeOk";
import Message from "../Icons/Message";

const BlogPost: FC = () => {
    return (
        <BlogPostWrapper>
            <TitleWrapper>
                <TitlePost>
                    Ted Bell, Annette Nguyen and Cody Hawkins liked this
                </TitlePost>
                <More />
            </TitleWrapper>
            <DescriptionPostWrapper>
                <PersonImage src={Person} />
                <PersonName>
                    Theresa Steward
                    <PersonLabel>iOS developer</PersonLabel>
                </PersonName>
            </DescriptionPostWrapper>
            <MainText>
            What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).
            </MainText>
            <MainButton>
                Read more
            </MainButton>
            <Links> 
                <LinksWrapper>
                <LikeOk /> 42
                </LinksWrapper>
                <LinksWrapper>
                <Message /> 9
                </LinksWrapper>
            </Links>
        </BlogPostWrapper>
    )
}
export default BlogPost;