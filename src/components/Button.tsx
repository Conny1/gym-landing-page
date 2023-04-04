import React from 'react'
import styled from 'styled-components'
import { selectPage } from '../utils/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'


type Props = {
    action:string
    selectedPage:selectPage
    setselectedPage:(value:selectPage)=>void

}

const Button = ({action, selectedPage, setselectedPage}: Props) => {
  return (
    <AnchorLink 
    style={{color:'#945451', textDecoration:'none'  }  }
    onClick={()=>{setselectedPage(selectPage.Contacts)}}
    href={`#${selectPage.Contacts}`}
    >
        {action}
    </AnchorLink>
  )
}

export default Button