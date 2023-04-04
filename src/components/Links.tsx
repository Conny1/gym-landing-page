import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { selectPage } from '../utils/types'

interface Props {
    page:string
    selectedPage:selectPage
    setselectedPage:(value:selectPage)=>void

}

const Links = ({page, setselectedPage, selectedPage}: Props) => {
    const lowercase = page.toLowerCase().replace(/ /g,'' ) as selectPage
    return (
       <AnchorLink
       style={{color:`${selectedPage === lowercase? '#ff7062':'#945451' }`, textDecoration:'none' , }}
       href={`#${lowercase}`}
       onClick={()=>setselectedPage(lowercase)}

       >
        {page}
       </AnchorLink>
    )
}

export default Links
