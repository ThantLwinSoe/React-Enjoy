
import './App.css'
import PersonInfo from './components/PersonInfo'
import profileImg from '../src/images/circle.jpg'
import {BsFillAlarmFill} from 'react-icons/bs'
import TitleComponent from './components/TitleComponent';
import ClickEventHandler from './components/ClickEventHandler';
import ConditionalRendering from './components/ConditionalRendering';
import ListComponent from './components/ListComponent';
import CounterComponents from './components/CounterComponents';


function App() {
  
  let expecties = "React Developer";

  return (
    <div>
      {/* <PersonInfo name="Thuza" age="24" country="Myanmar"></PersonInfo>
      <PersonInfo name="Li Li" age="23" country="China">
        <img src={profileImg} style={{borderRadius : "30px"}} width={300} height={300} alt="" />
        <h3><BsFillAlarmFill></BsFillAlarmFill>I am {expecties}</h3>
        
      </PersonInfo> */}
      {/* <TitleComponent ></TitleComponent> */}
      {/* <ClickEventHandler></ClickEventHandler> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <ListComponent primary={false}></ListComponent> */}
      <CounterComponents></CounterComponents>

    </div>
  )
}

export default App
