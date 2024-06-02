import { useState } from 'react'
import { CardsView } from './CardsView/CardsView'
import { ListWiew } from  './ListView/ListView'
import { IconSwitch } from './Controls/IconSwitch'


function Store({data}) {
    const [icon, setIcon] = useState("view_module");
    const onSwitch = () => {
        setIcon(() => {
            if (icon === "view_module"){
                return "view_list";
            }
            return "view_module"
        })
    }
    let view = icon==="view_module"? <CardsView products = { data }/>:<ListWiew products = { data }/>

  return (
    <> 
      <IconSwitch icon = { icon } onSwitch = { onSwitch }/>
      { view }
    </>
  )
}

export default Store