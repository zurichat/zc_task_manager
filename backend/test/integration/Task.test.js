import { assert, expect } from 'chai';
import supertest from 'supertest';
import app from '../../src/initialize.js';
import Documentator from '../../src/utils/documentator/index.js';

export const request = supertest.agent(app);

export const docmaker = Documentator.getInstance();

const date = new Date();
let task;
let assigned_task;

describe('Task', () => {
  it('should create a new task if all required fields are present', async () => {
    const res = request
      .post('/task')
      .send({
        title: "new task",
        description: "new task description",
        deadline: date.setDate(date.getDate() + 1),
        creator: "uuid",
        category: "uuid",
        status: "pending",
      });
    console.log(res.error, res.body);
    task = res.data;

    assert.equal(res.status, 200);
    docmaker.addEndpoint(res);

  })

  it('should assign a task if all required fields are present', async () => {
    const res = request
      .post(`/task/${task.object_id}/assign`)
      .send({
        assigner: "63353409584953053495353",
        assignee: "632263098390593582n2050",
        for_channel: false
      });

    console.log(res.error);

    assigned_task = res.data;

    assert.equal(res.status, 200);
    docmaker.addEndpoint(res);
  })

  it('should reassign a task if all required fields are present', async () => {
    const res = request
      .patch(`/task/${assigned_task.object_id}/reassign`)
      .send({
        assigner: "63353409584953053495353",
        assignee: "6322v7t876cgc87682n2050",
        for_channel: false
      });

    console.log(res.error);


    assert.equal(res.status, 200);
    docmaker.addEndpoint(res);
  })

});
