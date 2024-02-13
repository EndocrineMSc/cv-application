import {v4 as uuidv4} from "uuid";

function Timespan(props) {
    return (
        <>
            <h2 className="timespan">
                {props.startYear} - {props.endYear ? props.endYear : "jetzt"} &middot; {props.institute} &middot; {props.title}
            </h2>
            <ul className="timespan">
                {props.details ? 
                props.details.map(detail => (
                    <li key={uuidv4()}>{detail}</li>
                ))
            : <></>}
            </ul>
        </>
    )
}

export default Timespan;