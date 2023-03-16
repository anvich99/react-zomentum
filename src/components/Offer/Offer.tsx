import React from 'react'
import './styles.scss'
import {ReactComponent as PersonIcon} from '../../assets/images/person.svg'
import {ReactComponent as BlocksIcon} from '../../assets/images/blocks.svg'
import {ReactComponent as GraphIcon} from '../../assets/images/graph.svg'
export const Offer = () => {
  return (
    <div className="offer">
      <div className="offer__container container">
        <h2 className="offer__title">List. Sell. Grow</h2>
        <div className="offer__container-inner">
          <div className="offer__card">
            <BlocksIcon/>
            <h5 className="offer__card-text">Be a part of the only  All-In-One platform for IT services</h5>
          </div>
          <div className="offer__card">
            <PersonIcon/>
            <h5 className="offer__card-text">Come closer to finding your next customer</h5>
          </div>
          <div className="offer__card">
            <GraphIcon/>
            <h5 className="offer__card-text">Grow your business with a single click</h5>  
          </div>
        </div>
      </div>
    </div>
  )
}
