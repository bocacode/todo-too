import React from 'react'
import { Card, Col, Image } from 'antd'

const fallback = 'https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png'

function CardItem({ beer }) {
  return (
    <Col span={8}>
      <Card hoverable
        style={{ width: 240 }}
        cover={<Image
          width={240}
          height={360}
          src={beer.image}
          alt={beer.name}
          fallback={fallback}
        />}
      >
        <Card.Meta title={beer.name} description={beer.price} />
      </Card>
    </Col>
  )
}

export default CardItem