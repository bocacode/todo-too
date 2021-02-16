import React, { useEffect, useState } from 'react'
import { Row } from 'antd'
import CardItem from '../components/cardItem'

function Card2() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then(resp => resp.json())
      .then(data => setBeers(data))
  }, [])
  if (!beers) {
    return <h2>Loading...</h2>
  }
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {beers.map(beer =>
          <CardItem beer={beer} key={beer.id} />
        )}
      </Row>
    </div>
  )
}

export default Card2