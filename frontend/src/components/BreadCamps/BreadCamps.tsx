import React, { FC } from "react"
import { BreadCampsLink, BreadCampsWrapper } from "./BradCamps.styled";



const BreadCamps: FC = () => {
    return (
        <BreadCampsWrapper>
            <BreadCampsLink>
                / BreadCamps
            </BreadCampsLink>
            <BreadCampsLink>
            <a href="">
                / mock
            </a>
            </BreadCampsLink>
            <BreadCampsLink>
                / Data[1]
            </BreadCampsLink>
        </BreadCampsWrapper>
    )
}

export default BreadCamps;