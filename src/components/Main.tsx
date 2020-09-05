import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import App from '../App';
import styled from 'styled-components';
import { 
  Handles,
  Slider, 
  Tracks,
  Rail
} from 'react-compound-slider'

const TimelineContainer = styled.div`
  width: 100%;
  border-top: 2px solid #2b2b2b;
  margin-top: 15px;
  padding: 15px;
  background: #f8f8f8;
  display: flex;
  flex-direction: row;
  max-height: 400px;
`

const SliderContainer = styled.div`
  flex: 1;
  padding: 0 15px;
`

const Testrail = styled.div`
  height: 20px;
  background-color: #2b2b2b;
`

const Testhandle = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
`

const TimelineProperties = styled.div`
  width: 400px;
  height: 100%;
`

const Handle = styled.div<{ percent: number }>`
  left: ${(props) => props.percent}%;
  position: relative;
  transform: translate(-50%, -50%);
  WebkitTapHighlightColor: rgba(0,0,0,0);
  zIndex: 5;
  width: 8px;
  height: 42px;
  cursor: pointer;
  background-color: red;

  &:before {
    width: 2px;
    height: 100%;
    display: block;
    background-color: #2b2b2b;
    content: "";
  }
`

interface TimelineProps {
  fps: number;
  length: number;
}

const Timeline = (prop: TimelineProps) => {
  const [sliderValue, setSliderValue] = useState([0]);
  const [objects, setObjects] = useState([]);

  return (
    <TimelineContainer>
      <TimelineProperties>
        <p>Timeline Properties</p>
      </TimelineProperties>

      <SliderContainer>
        <Slider
          values={sliderValue}
          step={1}
          onUpdate={e => setSliderValue(e.slice())}
          onChange={(e) => setSliderValue(e.slice())}
          domain={[0, prop.length]}>

          <Rail>
            {({getEventData, activeHandleID, getRailProps}) => (
              <Testrail {...getRailProps()}>
              </Testrail> 
            )} 
          </Rail>

          <Handles>
            {({handles, getHandleProps}) => (
              <div>
                {handles.map(handle => (
                  <Handle
                    percent={handle.percent}
                    key={handle.id}
                    {...getHandleProps(handle.id)}>
                  </Handle> 
                ))}
              </div>
            )}
          </Handles>

        </Slider>  
      </SliderContainer>
    </TimelineContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const AnimationPreview = styled.div`
  flex: 1;
`

const Body = styled.div`
  padding: 15px;  
`

const Main: React.FC = ({children}) => {
  const [fps, setFps] = useState(24);
  const [animationLength, setAnimationLength] = useState(5);
  
  return (
    <MainContainer>
      <Body>
        <input 
          type="number"
          onChange={(e) => setFps(e.target.value as unknown as number)}
          placeholder="FPS"
          value={fps}></input>
        <input 
          type="number"
          onChange={(e) => {
            let newVal = e.target.value as unknown as number;
            if (newVal > 0) {
              setAnimationLength(e.target.value as unknown as number)
            }
          }}
          placeholder="Animation length"
          value={animationLength}></input>
      </Body>

      <AnimationPreview>
        <p>Fps: {fps}, animationLength: {animationLength}</p>
      </AnimationPreview>

      
      <Timeline fps={fps} length={animationLength * fps}></Timeline>
    </MainContainer>
  )
}

export default Main
