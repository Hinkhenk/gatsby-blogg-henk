import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 22, 2020"
          title="lorem ipsum"
          excerpt="lorem ipsum, plus extra"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
