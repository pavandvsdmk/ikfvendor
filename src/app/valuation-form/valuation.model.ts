import { DateService } from '../services/date.service';

const getCurrentDate = function (): object {
    const ds = new DateService();
    return ds.getCurrentDate();
};

export class ValuationModel {
    general: GeneralModel = new GeneralModel();
    vehicle: VehicleModel = new VehicleModel();
    insurance: InsuranceModel = new InsuranceModel();
}

export class GeneralModel {
    requestor: String;
    purchaser: String;
    inspectionDate: any = getCurrentDate();
    inspectionAddress: String;
    serialNo: String;
}

export class VehicleModel {
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

export class InsuranceModel {
    insuredName: String;
    insuranceCo: String;
    periodFrom: any = getCurrentDate();
    periodTo: any = getCurrentDate();
    idv: String;
    riskCovered: String;
    hypothecation: String;
    policyVerified: Boolean;
}
