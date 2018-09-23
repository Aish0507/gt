import { Model } from './model';
import { User } from './user.model';
import * as _ from 'underscore';
import { API } from '../helpers/api.helper';
import { Util } from '../helpers/util.helper';

export class DashBoardModel extends Model {
  apiUpdateValues: Array<string> = ['id']; // these are the values that will be sent to the API
  constructor(obj: object) {
    super(obj);
  }
  // Static
  static to(action) {
    return Util.route('//' + action);
  }
  static async getMenu() {
    let err, res; // get from API
    const u_id = this.getlocalStorage('User');
    if (Util.getEnvObj().isApiReady) {
      [err, res] = await Util.to(Util.get('/selfService/user/' + u_id[0].userId + '/getMenuBar'));
    } else {
      [err, res] = await Util.to(Util.get('/assets/dummyDataJobList.json'));
    }
    if (err) {
      Util.TE(err.message, true);
    }
    if (!res.success) {
      Util.TE(res.message, true);
    }
    return res.data;
  }
}
