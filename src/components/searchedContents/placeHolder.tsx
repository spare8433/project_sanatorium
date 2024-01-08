import { Placeholder, Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const Contanior = styled.div`
  position: relative;
`

const ContentGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  margin: 2rem 0 4rem;
  font-size: 1.4rem;

  span {
    background-color: ${({ theme }) => theme.colors.back_white};
    height: 15rem;
    border-radius: 1rem;
    box-shadow: 0.25rem 0.5rem 0.5rem rgb(0 0 0 / 30%);
  }
`

const SpinnerBox = styled.div`
  width: 10rem;
  height: 10rem;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  .spinner-border {
    width: 100%;
    height: 100%;
    --bs-spinner-border-width: 0.75rem;
    color: lightgray;
  }
`

interface Props {
  showCount: number
}

const PlaceHolder = ({ showCount }: Props) => {
  return (
    <Contanior>
      <SpinnerBox>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </SpinnerBox>
      <Placeholder as="div" animation="glow">
        <ContentGridBox>
          {new Array(showCount).fill(null).map((_v, i) => (
            <Placeholder key={i} as="span" size="sm" />
          ))}
        </ContentGridBox>
      </Placeholder>
    </Contanior>
  )
}

export default PlaceHolder
