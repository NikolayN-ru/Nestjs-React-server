import React, { FC } from "react"
import { ButtonFooter, InputFooter, InputFooterBtn, InputFooterWrapper, LinkMore, ListHeader, ListItem, ListLink } from "./FooterLinks.styled"
import arrow from '../../../../assets/arrow.svg';

const FooterLinks: FC<any> = ({ state }) => {
    return (
        <ListLink>
            <ListHeader>
                {state.link}
            </ListHeader>
            {state.items.map((item: any, id: number) => <ListItem key={id}>{item}</ListItem>)}
            {
                !state.input ?
                    <LinkMore>Показать еще</LinkMore> :
                    false
            }
            {state.input && (
                <>
                    <InputFooterWrapper>
                        <InputFooter placeholder="E-mail" />
                        <InputFooterBtn>
                            <img src={arrow} alt="arrow" />
                        </InputFooterBtn>
                    </InputFooterWrapper>
                    <ButtonFooter>
                        Обратная связь
                    </ButtonFooter>
                </>
            )
            }
        </ListLink>

    )
}

export default FooterLinks;