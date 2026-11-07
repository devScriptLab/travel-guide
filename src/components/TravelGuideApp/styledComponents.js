import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`

export const ResponsiveContainer = styled.div`
  width: 85%;
  max-width: 1110px;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Heading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 28px;
  line-height: 2;
  border-bottom: 3px solid #52bbf0;
`

export const TravelGuideList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
`

export const TravelGuideItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 12px 8px #f4f4f4;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin: 12px;

  @media screen and (min-width: 578px) {
    width: 45%;
    margin-left: 12px;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 28%;
    margin-left: 12px;
    margin-bottom: 12px;
  }
`

export const TravelGuideImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const TravelGuideInfoContainer = styled.div`
  background-color: #ffffff;
  padding: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const TravelPlace = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const TravelPlaceDescription = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.5;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const FailureViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const FailureText = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
`
