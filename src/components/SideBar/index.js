import React from "react"
import Profile from '../Profile'
import * as S from './styled'
import SocialLinks from "../SocialLinks"

const SideBar = () => (
  <S.SideBarWrapper>
    <Profile />
    <SocialLinks />
  </S.SideBarWrapper>
)

export default SideBar;