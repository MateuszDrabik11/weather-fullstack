import {useState, useEffect} from 'react'
import ToggleButton from './ToggleButton.jsx'
import nubiLogo from "./assets/nubisoft.svg"

function TopBar({city,changeCity,unit,changeUnit,fetchedTime}) {
    const format = { hour: "2-digit", minute: "2-digit" }
    let [time, setTime] = useState(new Date().toLocaleTimeString([],format));
    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString([],format)), 1000)
    })
    return (
      <>
          <nav className="bg-blue-600 mx-auto p-2 md:p-4 rounded-b-3xl">
                <div className="flex items-center justify-between flex-row">
                    <div className="basis-1/2 text-center md:text-left md:basis-30" >Time in selected city : {new Date(fetchedTime).toLocaleString([],
                            {
                                weekday: "short",
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                            }
                        )
                        || "Loading ..."}</div>
                    <div className="basis-auto text-center md:basis-5">
                        <ToggleButton state={city} callback={changeCity}></ToggleButton>
                    </div>
                    <div className="basis-auto text-center md:basis-5">
                        <ToggleButton state={unit} callback={changeUnit}></ToggleButton>
                    </div>
                    <div className="md:basis-80"></div>
                </div>
          </nav>
      </>
    );
}
export default TopBar;