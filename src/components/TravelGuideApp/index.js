import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  Container,
  ResponsiveContainer,
  HeadingContainer,
  Heading,
  TravelGuideList,
  TravelGuideItem,
  TravelGuideImage,
  TravelGuideInfoContainer,
  TravelPlace,
  TravelPlaceDescription,
  LoaderContainer,
  FailureViewContainer,
  FailureText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class TravelGuideApp extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    travelGuideData: [],
  }

  componentDidMount() {
    this.getTravelGuide()
  }

  getTravelGuide = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      'Content-Type': 'application/json',
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = fetchedData.packages.map(eachObject => ({
        id: eachObject.id,
        name: eachObject.name,
        description: eachObject.description,
        imageUrl: eachObject.image_url,
      }))

      this.setState({
        travelGuideData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTravelGuide = () => {
    const {travelGuideData} = this.state

    return (
      <TravelGuideList>
        {travelGuideData.map(eachObject => (
          <TravelGuideItem key={eachObject.id}>
            <TravelGuideImage src={eachObject.imageUrl} alt={eachObject.name} />
            <TravelGuideInfoContainer>
              <TravelPlace>{eachObject.name}</TravelPlace>
              <TravelPlaceDescription>
                {eachObject.description}
              </TravelPlaceDescription>
            </TravelGuideInfoContainer>
          </TravelGuideItem>
        ))}
      </TravelGuideList>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderAPIFailureView = () => (
    <FailureViewContainer>
      <FailureText>Oops....! Something went wrong!</FailureText>
    </FailureViewContainer>
  )

  renderTravelGuideBasedOnAPIStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTravelGuide()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderAPIFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <Container>
        <ResponsiveContainer>
          <HeadingContainer>
            <Heading>Travel Guide</Heading>
          </HeadingContainer>
          {this.renderTravelGuideBasedOnAPIStatus()}
        </ResponsiveContainer>
      </Container>
    )
  }
}

export default TravelGuideApp
