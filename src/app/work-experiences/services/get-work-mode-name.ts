import { IGetWorkModeName } from "../contracts/i-get-work-mode-name";
import { WorkMode } from "../enums/work-mode";

export default class GetWorkModeName implements IGetWorkModeName {
    get(workMode: WorkMode): string {
        switch (workMode) {
            case WorkMode.InPerson:
                return "In Person";
            
            case WorkMode.Remote:
                return "Remote";
        
            default:
                return "";
        }
    }
}