import React from 'react'
import './PortfoliList.scss';

const PortfolioList = ({ title, active, setselected, id }) => {
    return (
        <li className={active ? "PortfolioList active" : "PortfolioList"} onClick={() => setselected(id)} key={id}>
            {title}
        </li>
    )
}
export default PortfolioList;
