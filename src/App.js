import './App.css';
import BasicRating from './components/BasicRating';
import BasicSelect from './components/BasicSelect';
import Demo from './components/Demo';
import FloatButton from './components/FloatButton';
import RadioGroup from './components/RadioGroup';
import Senti from './components/Senti';
import ContinuousSliders from './components/ContinuousSliders';
import BasicSwitches from './components/BasicSwitches';
import Icons from './components/Icons';
import BasicAlerts from './components/BasicAlerts';
import Backdrop from './components/Backdrop';
import Circular from './components/Circular';
import Delete from './components/Delete';
import Transitions from './components/Transitions';
import ShowSnack from './components/ShowSnack';
import CardImage from './components/CardImage';
//import FixedPositioning from './components/FixedPositioning';
//import PersistentDrawer from './components/PersistentDrawer';
import Customization from './components/Customization';
import ControlledPagination from './components/ControlledPagination';
import ComplexButton from './components/ComplexButton';
import BasicFab from './components/BasicFab';
import AvatarsImage from './components/AvatarsImage';
import AlertsBasic from './components/AlertBasic';
import ButtonsFab from './components/ButtonsFab';


function App() {
  return (
    <div className="App">
      <Demo />

      <FloatButton />
      <RadioGroup />
      <BasicRating />
      <Senti />
      <BasicSelect />
      <ContinuousSliders />
      <BasicSwitches />
      <Icons />
      <Delete />
      <BasicAlerts />
      <Backdrop />
      <Circular />
      <Transitions />
      <ShowSnack />
      <CardImage />
      {/* <FixedPositioning/> */}
      {/* <PersistentDrawer/> */}
      <ComplexButton />
      <BasicFab/>
      <Customization />
      <ControlledPagination />
      <AvatarsImage/>
      <AlertsBasic/>
      <ButtonsFab/>
    </div>
  );
}

export default App;
