import { DateService } from '../services/date.service';

const getCurrentDate = function (): object {
    const ds = new DateService();
    return ds.getCurrentDate();
};

export class ValuationModel {
    general: GeneralModel = new GeneralModel();
    vehicle: VehicleModel = new VehicleModel();
    insurance: InsuranceModel = new InsuranceModel();
    permit: PermitModel = new PermitModel();
    condition: ConditionModel = new ConditionModel();
    value: ValueModel = new ValueModel();
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

export class PermitModel {
    fitnessUpto: any = getCurrentDate();
    permitNo: String;
    permitUpto: any = getCurrentDate();
    roadTaxUpto: any = getCurrentDate();
}

export class ConditionModel {
    bodyShell: String;
    suspension: String;
    battery: String;
    rearTyre: String;
    frontTyre: String;
    electric: String;
    remarks: String;
    trialComment: String;
    meterReading: String;
    runningCondition: Boolean;
}

export class ValueModel {
    newVehicleCost: String;
    similarAssetValue: String;
    valuationAmount: String;
    remarks: String;
    chassisCopy: Boolean;
}
