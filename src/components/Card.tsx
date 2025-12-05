import "../styles/Card.css";
import React, { Children } from "react";

interface cardProps{
    children  : React.ReactNode;
}

export default function Card({children} : cardProps)
{
    return <div className="card">{children}</div>
}

Card.header = function Header ({children} : cardProps)
{
    return <div className="header">{children}</div>
}

Card.body = function Body ({children} : cardProps)
{
    return <div className="body">{children}</div>
}


Card.footer = function Footer ({children} : cardProps)
{
    return <div className="footer">{children}</div>
}

