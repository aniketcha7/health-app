import { stateType } from "../../store/storeTypes";
import ListComp from "../common/ListComp";

const ShowHealthData: React.FC<
{
    state: stateType
}
> = (props) => {
    const {state} = props;
    return (
        <div>
        <ul>
            <ListComp name={state.BP.name} value={state.BP.value} />
            <ListComp name={state.HR.name} value={state.HR.value} />
            <ListComp name={state.SBP.name} value={state.SBP.value} />
            <ListComp name={state.DBP.name} value={state.DBP.value} />
            <ListComp name={state.PR.name} value={state.PR.value} />
            <ListComp name={state.SR.name} value={state.SR.value} />
        
        </ul>
    </div>

    )
};

export default ShowHealthData;