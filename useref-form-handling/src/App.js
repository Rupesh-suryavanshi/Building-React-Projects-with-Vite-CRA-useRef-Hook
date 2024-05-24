import logo from './logo.svg';
import './App.css';

import DynamicFocusForm from './components/DynamicFocusForm';
import RealTimeValidationForm from './components/RealTimeValidationForm';
import CustomFormSubmission from './components/CustomFormSubmission';

function App() {
  return (
    <div className="App">
    <h1>useRef Form Handling</h1>
    <DynamicFocusForm />
    <RealTimeValidationForm />
    <CustomFormSubmission />
  </div>
  );
}

export default App;
