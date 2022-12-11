import { body, check } from 'express-validator';

import {
  submissionLinkValMsg,
  taskIdValMsg,
  submissionIdValMsg,
  taskAssigneeValMsg,
  createdAtValMsg,
  updatedAtValMsg,
} from './validationMsg.js';

export const createSubmissionValidator = [
  body('submission_link', submissionLinkValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),

  check('task_id', taskIdValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),

  body('task_assignee', taskAssigneeValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),

  body('created_at', createdAtValMsg).notEmpty().isISO8601().toDate(),
];

export const updateSubmissionValidator = [
  body('_id', submissionIdValMsg).notEmpty().isUUID(),

  body('submission_link', submissionLinkValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),

  body('updated_at', updatedAtValMsg).notEmpty().isISO8601().toDate(),
];
