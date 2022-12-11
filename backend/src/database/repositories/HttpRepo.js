import axios from 'axios';

export default class HttpRepo {
  url = 'https://api.zuri.chat';

  // pluginId = '637d8ecf82bf004233def988';

  pluginId = '6393d425ad60a62cd4608e90';

  organizationId = '61db3b27eba8adb50ca1399b';

  collectionName = 'data';

  readUrl = `${this.url}/data/read`;
  writeUrl = `${this.url}/data/write`;
  deleteUrl = `${this.url}/data/delete`;

  constructor(collectionName = 'data', organizationId = '61db3b27eba8adb50ca1399b') {
    this.collectionName = collectionName;
    this.organizationId = organizationId;
    // this.pluginId = '637d8ecf82bf004233def988';

    this.request = {
      plugin_id: this.pluginId,
      organization_id: this.organizationId,
      collection_name: this.collectionName,
      bulk_write: false,
      object_id: '',
      filter: {},
      payload: {},
    };
  }

  buildQueryStr(whereObject) {
    let queryStr = '';
    const whereKey = Object.keys(whereObject);

    if (whereKey.length === 0) {
      return '';
    }

    // eslint-disable-next-line linebreak-style
    const whereValue = Object.values(whereObject);

    whereKey.forEach((key, index) => {
      queryStr = `${key}=${whereValue[index]}&`;
    });
    return queryStr.slice(0, -1);
  }

  async postReq(url, data, config = {}) {
    if (Object.keys(config).length === 0) {
      return axios.post(url, data);
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
    return await (
      await axios.post(url, config)
    ).data;
  }

  async deleteReq(url, data = {}) {
    return await (
      await axios.post(url, data)
    ).data;
  }

  async findAll(organization_id, filter = {}) {
    this.request = { ...this.request, organization_id, filter };
    const result = await this.postReq(this.readUrl, this.request);
    return result;
  }

  async findWhere(organization_id, filter = {}) {
    this.request = { ...this.request, organization_id };

    if (Object.keys(filter).length !== 0) {
      this.request.filter = filter;
    }
    const result = await this.postReq(this.readUrl, this.request);
    return result;
  }

  async findFirst() {
    const result = await axios.get(this.readUrl);
    return result.data['data'][0];
  }

  async create(payloadObject) {
    const { organization_id, ...payload } = payloadObject;
    this.request = { ...this.request, organization_id, payload };
    console.log(this.request);
    return await this.postReq(this.writeUrl, this.request);
  }

  async store(payloadObject) {
    const { organization_id, object_id, ...payload } = payloadObject;

    this.request = { ...this.request, organization_id, payload, object_id };

    return await this.putReq(this.writeUrl, this.request, {
      'Content-type': 'application/json',
      accept: 'application/json',
      Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFkyT1RNek5EVTBPWHhIZDNkQlIwUlplazlFUVhkT2FrVXhUbXBCZUZreVZYcGFiVTB4V2tkTk0wMHlSVEJaVVQwOWZLTEF3cUV6aXh4UmliM3o3R1ZKQkJxWkkwRS1FMkx2dFdSRjVCeGNoMFkwIiwiZW1haWwiOiJhYnJhaGFtdGVyYWhkZWJpa0BnbWFpbC5jb20iLCJpZCI6IjYzODAwNjE1NjAxY2UzZmM1ZGM3M2E0YSIsIm9wdGlvbnMiOnsiUGF0aCI6Ii8iLCJEb21haW4iOiIiLCJNYXhBZ2UiOjc5NzU4MjcyNzYsIlNlY3VyZSI6ZmFsc2UsIkh0dHBPbmx5IjpmYWxzZSwiU2FtZVNpdGUiOjB9LCJzZXNzaW9uX25hbWUiOiJmNjgyMmFmOTRlMjliYTExMmJlMzEwZDNhZjQ1ZDVjNyJ9.MwO-NEeu9NA6YVk6P9_UbJn7hrW7CvhzfZ9hfM0yukM`,
    });
  }

  async update(payloadObject) {
    const { organization_id, object_id, ...payload } = payloadObject;

    this.request = { ...this.request, organization_id, payload, object_id };

    return await this.putReq(this.writeUrl, this.request);
  }

  async delete(payloadObject) {
    const { organization_id, object_id, ...others } = payloadObject;

    this.request = { ...this.request, organization_id, object_id, ...others };

    console.log(this.request);

    const result = await this.postReq(this.deleteUrl, this.request);
    return result;
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
