import HttpRepo from './HttpRepo';
class Centrifugo extends HttpRepo {
  url = 'https://realtime.zuri.chat/api';

  apiKey = '58c2400b-831d-411d-8fe8-31b6e337738b';

  async publishToCommonRoom(data, newChannel, subscriberId = null, collection, unSubscriberId = null) {
    const config = {
      'Content-type': 'application/json',
      Authorization: `apikey ${this.apiKey}`,
    };

    const response = await this.postReq(this.url, {
      method: 'publish',
      params: {
        channel: 'common-room',
        data: {
          subscriberId: subscriberId,
          collection: collection,
          channel: newChannel,
          details: data,
          unSubscriberId,
        },
      },
    });

    return response;
  }

  async publishToRoomChannel(channel, data, collection, action) {
    const config = {
      'Content-type': 'application/json',
      Authorization: `apikey ${this.apiKey}`,
    };

    const response = await this.postReq(this.url, {
      method: 'publish',
      params: {
        channel: channel,
        data: {
          collection,
          action,
          details: data,
        },
      },
    });

    return response;
  }

  async unSubscribe(channel, id) {
    const config = {
      'Content-type': 'application/json',
      Authorization: `apikey ${this.apiKey}`,
    };

    const response = await this.postReq(this.url, {
      method: 'unsubscribe',
      params: {
        channel,
        user: id,
      },
    });

    return response;
  }

  async broadcast(channels, data) {
    const config = {
      'Content-type': 'application/json',
      Authorization: `apikey ${this.apiKey}`,
    };

    const response = await this.postReq(this.url, {
      method: 'broadcast',
      params: {
        channels,
        data,
      },
    });

    return response;
  }
}
