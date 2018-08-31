import { DateService } from '../services/date.service';

const getCurrentDate = function (): object {
    const ds = new DateService();
    return ds.getCurrentDate();
};

export class VendorModel {
    _id: String;
    firm: String;
    propreitor: NameModel = new NameModel();
    mobile: String;
    phone: String;
    email: String;
    branch: Array<String>;
    address: String;
    city: String;
    state: String;
    pincode: String;
    licenseNo: String;
    licenseExpDate: any = getCurrentDate();
    role: String;
    statue: Boolean = true;
}

export class NameModel {
    fname: String;
    mname: String;
    lname: String;
}
