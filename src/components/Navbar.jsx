import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const [inputText, setInputText] = useState('')
    const navigate = useNavigate();

    const handleInputChange = (e) => [
        setInputText(e.target.value),
    ]

   
    const handleSavedChange =() => {
        const movie = inputText;
        setInputText('');
        if(movie ==='')
        {}
        else
       { navigate(`/search/${movie}`);}


    }

    const handleKeyPress=(e)=>{
        if(e.key==="Enter"){
            handleSavedChange();
        }
    }





    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent no-gutters g-0 p-0">
                <div className="container-fluid no-gutters g-0 m-0">
            <Link to='/' style={{textDecoration:'none'}}>       <a className="navbar-brand m-2" href='#hh' style={{ color: "white", fontWeight: 'bold', fontSize: '5vh', webkitTextStroke: ' 1px black ' }}>My Movie</a></Link> 
                    <div className="mx-auto" style={{ display: 'flex' }}>

                        <input className="form-control me-2" style={{ borderRadius: '0px' }} type="search" placeholder="Search Moive" aria-label="Search" value={inputText} onChange={handleInputChange} onKeyPress={handleKeyPress} />
                        <button className="search " onClick={handleSavedChange}>Search</button>

                    </div>  
                </div>
            </nav>
        </>
    )

}

export default Navbar;