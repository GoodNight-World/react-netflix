import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50){
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {})
        }
    }, [])

    const gotoMain = (e) => {
        setSearchValue("");
        navigate(`/`);
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
            alt='Netflix logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png'
            className='nav__logo'
            onClick={gotoMain}
        />

        <input value={searchValue} onChange={handleChange} className='nav__input' type='text' placeholder='영화를 검색해주세요.' />
        
        <img 
            alt='User logo'
            src='https://i.pinimg.com/564x/a4/c6/5f/a4c65f709d4c0cb1b4329c12beb9cd78.jpg'
            className='nav__avatar'
        />
    </nav>
  )
}
