import React  , {useState,useEffect,useContext} from 'react'
import Link from 'next/link'
//IMPORT INTERNAL
import Style from './NavBae.module.css';
import {Model,TokenList} from "../index"
function NavBar() {
    const menuItem=[
        {
            name:"Swap",
            Link:"/"
        },
        {
            name:"Tokens",
            Link:"/"
        },
        {
            name:"Pools",
            Link:"/"
        }
    ]

    const [openModel,setOpenModel]=useState(false);
    const [openTokenBox,setOpenTokenBox]=useState(false);
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
            <div className={Style.NavBar_box_left_img}>
                <img src="" alt='logo' width={50} height={50}></img>
            </div>
            <div className={Style.NavBar_box_left_menu}>
                {menuItem.map((el,i)=>(
                    <Link
                    key={i+1}
                    href={{pathname:`${el.name}`,query:`${el.Link}`}}
                    >
                        <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
                    </Link>
                ))}
            </div>
        </div>
        <div className={Style.NavBar_box_right}>right</div>
      </div>
    </div>
  )
}

export default NavBar
