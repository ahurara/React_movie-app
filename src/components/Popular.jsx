import React, { useState } from "react";
import PopularCards from "./PopularCards";

const Popular = () => {

    const [selected, setSelected] = useState(null);

    return (
        <>
            <div className="row">
                <div className="col-md-12 grid-container">
                    
                    <div  className='btnbox' style={{ marginLeft: '20px', }}>
                    <h3>What's Popular</h3>
                        <button className={`button1 ${selected === 'stm' ? "selected" : ''}`} onClick={() => { setSelected('stm') }}>Streaming</button>
                        <button className={`button2 ${selected === 'tv' ? "selected" : ''}`} onClick={() => { setSelected('tv') }}>On Tv</button>
                        <button className={`button3 ${selected === 'theaters' ? "selected" : ''}`} onClick={() => { setSelected('theaters') }}>In Theaters</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="popular_cards">
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0fLFSvnKH33tjjgIjc1B-LuL1DnmNBrbAA&usqp=CAU" />
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPi4SzTuJfTLkaE5dGBZ4re_X1RRCvq07xQ&usqp=CAU" />
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCkLGD5QILxxv_hoeqqNeAySv0a3_2kg9xw&usqp=CAU" />
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0fLFSvnKH33tjjgIjc1B-LuL1DnmNBrbAA&usqp=CAU" />
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPi4SzTuJfTLkaE5dGBZ4re_X1RRCvq07xQ&usqp=CAU" />
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0fLFSvnKH33tjjgIjc1B-LuL1DnmNBrbAA&usqp=CAU" />
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPi4SzTuJfTLkaE5dGBZ4re_X1RRCvq07xQ&usqp=CAU" />
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCkLGD5QILxxv_hoeqqNeAySv0a3_2kg9xw&usqp=CAU" />
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0fLFSvnKH33tjjgIjc1B-LuL1DnmNBrbAA&usqp=CAU" />
                        <PopularCards name="hello" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCkLGD5QILxxv_hoeqqNeAySv0a3_2kg9xw&usqp=CAU" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popular;