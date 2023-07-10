import React from 'react'
import { featuresData } from '../../data/HomeData'
import FeatureCard from '../../components/FeatureCard'

const Features = () => {
  return (
    <section className="py-10">
      {
        featuresData.map((item, index) =>
          <FeatureCard {...item} key={index} />
        )
      }
    </section>
  )
}

export default Features