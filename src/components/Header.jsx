import React from 'react'

export const Header = () => {
    let customCss="code";


    const isLoggedIn=true;

    const greeting=isLoggedIn?<p className={customCss}>welcome back!</p>:<p>please log in.</p>;


    const items=['item1','item2','item3'];
  return (
    <>
    <div>
        <h1 className='bannerText'>header</h1>
        <p className={customCss} style={{fontSize:'25px' , fontStyle:"italic"}}>
            25+20={25+20}
        </p>

        {/* JSX with conditional Rendering */}
        {greeting}

        {/* JSX with lists */}

        <ul>
            {items.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>

    </div>
    </>
  )
}
