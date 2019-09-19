import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../SideBar"
import MenuBar from '../MenuBar'

import * as S from './styled'
import GlobalStyles from "../../styles/global"


const Index = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles/>
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
