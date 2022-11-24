/* eslint-disable linebreak-style */
import axios from 'axios';

export default class HttpRepo {
  url = 'https://api.zuri.chat/';

  pluginId = '637d8ecf82bf004233def988';

  organizationId = '';

  collectionName = '';

  remoteUrl = `${this.url}/data/read/${this.pluginId}/${this.collectionName}/${this.organizationId}`;

  constructor(collectionName='task', organizationId = '12345678') {
    this.collectionName = collectionName;
    this.organizationId = organizationId;

    this.request = {
        plugin_id: this.pluginId,
        organization_id: this.organizationId,
        collection_name: this.collectionName,
        bulk_write: false,
        object_id: 'xxxx',
        filter: {},
        payload: payloadObject,
    }
  }


  buildQueryStr(whereObject) {
    const queryStr = '';
    const whereKey = Object.keys(whereObject);

    if (whereKey.length) {
      return '';
    }

    // eslint-disable-next-line linebreak-style
    const whereValue = Object.values(whereObject);

    whereKey.forEach((key) => {
      queryStr = `${key}=${whereValue[key]}&`;
    });

    return queryStr.trimEnd('&');
  }

  async postReq(url, data, config = {}) {
    if (Object.keys(config).length === 0) {
      return axios.get(url, data);
    }
    return axios.post(url, data, config);
  }

  async putReq(url, data) {
    return axios.put(url, data);
  }

  async getReq(url, config = {}) {
    if (Object.keys(config).length === 0) {
      return axios.get(url);
    }
    return axios.get(url, config);
  }

  async deleteReq(url, data) {
    return axios.delete(url, data);
  }

  async findAll() {
    const result = await this.getReq(this.remoteUrl);

    return result;
  }

  async findWhere(whereObject = {}) {
    const whereStr = this.buildQueryStr(whereObject);

    const result = await this.getReq(`${this.remoteUrl}?${whereStr}`);

    return result;
  }

  async findFirst() {
    const result = await axios.get(this.remoteUrl);
    return result.data['data'][0];
  }

  async create(payloadObject) {
    this.request.payload = payloadObject;

    return await this.postReq(`${this.remoteUrl}/data/write`, this.request);
  }

  async store(objectId, payloadObject) {
    this.request.object_id = objectId;
    this.request.payload = payloadObject;

    return await this.postReq(`${this.remoteUrl}/data/write`, this.request);
  }

  async update(objectId, payloadObject) {
    this.request.object_id = objectId;
    this.request.payload = payloadObject;

    return await this.putReq(`${this.remoteUrl}/data/write`, this.request);
  }

  async delete(objectId) {
    this.request.object_id = objectId;
    
    return await this.deleteReq(`${this.remoteUrl}/data/write`, this.request);
  }

  async findWorkSpaceUsers(bearerToken) {
    const urlConstruct = `${this.url}/organizations/${this.organizationId}/members`;

    return await this.getReq(urlConstruct, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
  }
}
