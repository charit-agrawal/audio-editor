import logo from '../logo.svg';
import './Toggle.css';
import ToggleButton from './ToggleButton';

const Checked = () => <>🤪</>;
const UnChecked = () => <>🙂</>;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ToggleButton />
            </header>
        </div>
    );
}

export default App;