const express = require('express');
const router = express.Router();

//this route is for api documentation using swaggerui

/**
 * @swagger
 * tags:
 *     - name: Task
 *       description: The API for creating tasks
 */

/**
 * @swagger
 * /task:
 *     post:
 *         summary: used to create a task
 *         tags:
 *             - Task
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - task_title
 *                              - task_description
 *                              - task_deadline
 *                              - task_creator
 *                              - task_category
 *                              - organization_id
 *                          properties:
 *                              task_title:
 *                                  type: string
 *                                  description: The title of the task
 *                              task_description:
 *                                  type: string
 *                                  description: The description of the task
 *                              task_deadline:
 *                                  type: string
 *                                  description: the deadline for the task
 *                              task_creator:
 *                                  type: string
 *                                  description: the task creator
 *                              task_category:
 *                                  type: string
 *                                  description: The task category
 *                              organization_id:
 *                                  type: string
 *                                  description: The organization ID
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '400':
 *                 description: User already exist
 *                 content:
 *                     application/json:
 *                          schema:
 *                              $ref: '#/components/response/Error'
 *             '404':
 *                 description: Please provide all details
 *                 content:
 *                     application/json:
 *                         schema:
 *                             $ref: '#/components/response/Error'
 * /task/{organization_id}:
 *      get:
 *         summary: Used top get all task for an organisation
 *         tags:
 *             - Task
 *         parameters:
 *             - in: path
 *               name: organization_id
 *               schema:
 *                    type: string
 *                    required: true
 *         responses:
 *             '200':
 *                description: Success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                success:
 *                                    type: boolean
 *                                    description: success bolean.
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *             '400':
 *                 description: Invalid Token
 *                 content:
 *                     application/json:
 *                          schema:
 *                              $ref: '#/components/response/Error'
 * /task/{user_id}/by_me:
 *      get:
 *         summary: Used top get all task for a user
 *         tags:
 *             - Task
 *         parameters:
 *             - in: path
 *               name: user_id
 *               schema:
 *                    type: string
 *                    required: true
 *         responses:
 *             '200':
 *                description: Success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                success:
 *                                    type: boolean
 *                                    description: success bolean.
 *                                message:
 *                                     type: string
 *                                     description: success message.
 * 
 * /task/category:
 *     post:
 *         summary: used to create a task category
 *         tags:
 *             - Task
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - category_name
*                               - organization_id
 *                          properties:
 *                              category_name:
 *                                  type: string
 *                                  description: The Task Category
 *                              organization_id:
 *                                  type: string
 *                                  description: The Organization ID
 *       
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *                                     properties:
 *                                      insert_count:
 *                                           type: integer
 *                                           description: the inser count
 *                                      object_id:
 *                                           type: string
 *                                           description: the id of the document
 * 
 * /task/{task_id}/assign:
 *     post:
 *         summary: used to assign a task
 *         tags:
 *             - Task
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - task_assigner
 *                              - task_assignee
 *                              - for_channel
 *                              - organization_id
 *                          properties:
 *                              task_assigner:
 *                                  type: string
 *                                  description: The user who is assigning the task
 *                              task_assignee:
 *                                  type: string
 *                                  description: The user who is been assigned the task
 *                              for_channel:
 *                                  type: boolean
 *                                  description: Is the task been assigned to a channel?
 *                              organization_id:
 *                                  type: string
 *                                  description: The id of the organization
 *       
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *                                     properties:
 *                                      insert_count:
 *                                           type: integer
 *                                           description: the inser count
 *                                      object_id:
 *                                           type: string
 *                                           description: the id of the document
 * 
 * /task/{assigned_task_id}/reassign:
 *     post:
 *         summary: used to re-assign a task
 *         tags:
 *             - Task
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - _id
 *                              - task_assignee
 *                              - for_channel
 *                              - task_id
 *                              - updated_at
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  description: Assigned Task Id
 *                              task_assignee:
 *                                  type: string
 *                                  description: The user who is been assigned the task
 *                              for_channel:
 *                                  type: string
 *                                  description: The for channel of the task
 *                              task_id:
 *                                  type: string
 *                                  description: The id of the task
 *                              updated_at:
 *                                  type: string
 *                                  description: The date the task was updated
 *       
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *                                     properties:
 *                                      insert_count:
 *                                           type: integer
 *                                           description: the inser count
 *                                      object_id:
 *                                           type: string
 *                                           description: the id of the document
 * /task/:
 *     put:
 *         summary: used to update a task
 *         tags:
 *             - Task
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - task_title
 *                              - task_description
 *                              - task_deadline
 *                              - task_creator
 *                              - task_category
 *                              - organization_id
 *                              - task_id
 *                          properties:
 *                              task_title:
 *                                  type: string
 *                                  description: The title of the task
 *                              task_description:
 *                                  type: string
 *                                  description: The description of the task
 *                              task_deadline:
 *                                  type: string
 *                                  description: the deadline for the task
 *                              task_creator:
 *                                  type: string
 *                                  description: the task creator
 *                              task_category:
 *                                  type: string
 *                                  description: The task category
 *                              organization_id:
 *                                  type: string
 *                                  description: The organization ID
 *                              task_id:
 *                                  type: string
 *                                  description: The id of the task been updated
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *                                     properties:
 *                                      insert_count:
 *                                           type: integer
 *                                           description: the inser count
 *                                      object_id:
 *                                           type: string
 *                                           description: the id of the document
 * /task/category/{category}:
 *      get:
 *         summary: Used to get task by category
 *         tags:
 *             - Task
 *         parameters:
 *             - in: path
 *               name: category
 *               schema:
 *                    type: string
 *                    required: true
 *         responses:
 *             '200':
 *                description: Success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                success:
 *                                    type: boolean
 *                                    description: success bolean.
 *                                message:
 *                                     type: string
 *                                     description: success message.
 * /task/delete:
 *     post:
 *         summary: used to delete a task
 *         tags:
 *             - Task
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - task_id
 *                              - organization_id
 *                          properties:
 *                              task_id:
 *                                  type: string
 *                                  description: The task id
 *                              organization_id:
 *                                  type: string
 *                                  description: The organization id
 *       
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *                                     properties:
 *                                      insert_count:
 *                                           type: integer
 *                                           description: the inser count
 *                                      object_id:
 *                                           type: string
 *                                           description: the id of the document
 * /task/submitted:
 *      get:
 *         summary: Used top get all task submitted
 *         tags:
 *             - Task
 *         responses:
 *             '200':
 *                description: Success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 * /task/{assignee_id}/taskToMe:
 *     post:
 *         summary: used to get user task
 *         tags:
 *             - Task
 *         parameters:
 *             - in: path
 *               name: assignee_id
 *               schema:
 *                    type: string
 *                    required: true
 *         responses:
 *             '200':
 *                description: Success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 * /task/{task_id}/submit:
 *     post:
 *         summary: used to submit a task
 *         tags:
 *             - Task
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - submission_link
 *                              - task_id
 *                              - task_assignee
 *                              - organization_id
 *                          properties:
 *                              submission_link:
 *                                  type: string
 *                                  description: The link for submission
 *                              task_id:
 *                                  type: string
 *                                  description: The id of the task
 *                              task_assignee:
 *                                  type: string
 *                                  description: The user the task was assigned to
 *                              organization_id:
 *                                  type: string
 *                                  description: The organization id
 *       
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *                                     properties:
 *                                      insert_count:
 *                                           type: integer
 *                                           description: the inser count
 *                                      object_id:
 *                                           type: string
 *                                           description: the id of the document
 * 
 * /task/{assigned_task_id}/reassign/:
 *     patch:
 *         summary: Reassign an assigned task
 *         tags:
 *             - Task
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - _id
 *                              - task_assignee
 *                              - for_channel
 *                              - task_id
 *                              - updated_at
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  description: The assigned task id
 *                              task_assignee:
 *                                  type: string
 *                                  description: The user the task was assigned to
 *                              for_channel:
 *                                  type: string
 *                                  description: The for channel of the task
 *                              task_id:
 *                                  type: string
 *                                  description: The id of the task
 *                              updated_at:
 *                                  type: string
 *                                  description: The date the assigned task was updated

 *       
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *                                     properties:
 *                                      insert_count:
 *                                           type: integer
 *                                           description: the inser count
 *                                      object_id:
 *                                           type: string
 *                                           description: the id of the document
 *       
 * 
 * /info:
 *     post:
 *         summary: used to get the information about a plugin
 *         tags:
 *             - Plugin
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - task_id
 *                              - plugin_id
 *                              - organization_id
 *                          properties:
 *                              task_id:
 *                                  type: string
 *                                  description: The id of the task
 *                              plugin_id:
 *                                  type: string
 *                                  description: The id of the plugin
 *                              organization_id:
 *                                  type: string
 *                                  description: The organization id
 *       
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                plugin_id:
 *                                     type: string
 *                                     description: plugin id.
 *                                name:
 *                                     type: string
 *                                     description: plugin name.
 *                                description:
 *                                     type: string
 *                                     description: what the plugin is for.
 *                                category:
 *                                     type: string
 *                                     description: category of the plugin.
 *                                version:
 *                                     type: string
 *                                     description: current version of the plugin.
 *                                install_url:
 *                                     type: string
 *                                     description: url for installing the plugin.
 * 
 * 
 * /sidebar:
 *     get:
 *         summary: used to get the information about the sidebar
 *         tags:
 *             - Plugin
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          
 *       
 *         responses:
 *             '200':
 *                description: success
 *                        
 * 
 */

module.exports = router;

