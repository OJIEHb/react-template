import axios from 'axios';

const baseUrl = '/items';

export default class ItemsService {
  static getAll() {
    return axios.get(baseUrl).then(({ data }) => data);
  }
}
