import { DateService } from '../services/date.service';

const getCurrentDate = function (): object {
    const ds = new DateService();
    return ds.getCurrentDate();
};

export class ValuationModel {
    requestor: String;
    purchaser: String;
    inspectionDate: any = getCurrentDate();
    inspectionAddress: String;
    serialNo: String;
    registerOwner: String;
    registrationNo: String;
    registrationDate: any = getCurrentDate();
    chassisNo: String;
    engineNo: String;
    model: String;
    make: String;
    manufactureYear: String;
    gvk: String;
    hpn: String;
    rcVerified: Boolean;
}
