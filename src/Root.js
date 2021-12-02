import App from './components/App';
import Header from './components/Header';
import WeatherContent from './components/WeatherContent';

import './Root.css';


function Root() {
    return (
        <div className="root">
            <Header/>
            <WeatherContent/>
            <App/>
        </div>
    )
}

export default Root;