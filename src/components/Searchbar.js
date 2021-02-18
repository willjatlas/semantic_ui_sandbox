import {Slider} from "react-semantic-ui-range"
import {Label, Segment} from "semantic-ui-react"
import {useState} from 'react';

const Searchbar = () => {

    const [value, setValue] = useState(6);

    const settings = {
        start : 5,
        min   : 0,
        max   : 10,
        step  : 1,
        onChange : value => {
            setValue(value);
        }
    }

    const handleValueChange = (event) => {
        let value = parseInt(event.target.value);
        if(!value){
            value = 0;
        }
        setValue(event.target.value);
    }

    return(
        <div id="slider-wrap">
        <Segment size="small">
            <Slider value={value} settings={settings} /> 
        </Segment>
        <Label color="red">{value}</Label>
        </div>
    )

} 

export default Searchbar;