// const result = {
//   status: 'success',
//   message: 'plugin created',
//   data: {
//     plugin: {
//       id: '637d8ecf82bf004233def988',
//       name: 'MyPlugin',
//       description: 'This is my plugin',
//       developer_name: 'Jane Doe',
//       developer_email: 'janedoe@mail.com',
//       template_url: 'test.zuri.chat/myplugin',
//       sidebar_url: 'test.zuri.chat/mysidebar',
//       install_url: 'test.zuri.chat/install',
//       icon_url: '',
//       install_count: 0,
//       approved: true,
//       version: '',
//       category: '',
//       approved_at: '2022-11-23 04:09:03.719310968 +0100 CET m=+714568.102317846',
//       created_at: '',
//       updated_at: '',
//       sync_request_url: '',
//       queue: null,
//       queuepid: 0,
//     },
//   },
// };

// // Get Organizations

// const myOrgs = [
//   {
//     _id: '637cb019601ce3fc5dc735c1',
//     admins: null,
//     billing: {
//       billing_contact: {
//         contacts: null,
//         to_default_email: false,
//       },
//       billing_setting: {
//         additional_notes: '',
//         city: '',
//         company_name: '',
//         country: '',
//         postal_code: '',
//         state: '',
//         street_address: '',
//         suite: '',
//       },
//     },
//     created_at: '2022-11-22T12:18:49.251119567+01:00',
//     creator_email: 'abrahamterahdebik@gmail.com',
//     creator_id: '63770d3c601ce3fc5dc73496',
//     customize: {
//       addcustomemoji: null,
//       prefixes: null,
//       slackbot: null,
//     },
//     logo_url: '',
//     name: 'testagain',
//     plugins: {
//       '617db02f27c36150b422bc4d': {
//         added_by: '',
//         approved_by: '',
//         installed_at: '2022-11-22T12:18:51.927904197+01:00',
//         plugin: {
//           _id: '617db02f27c36150b422bc4d',
//           approved: true,
//           approved_at: '2021-10-30 22:50:55.179182235 +0200 CEST m=+9357.492418736',
//           category: '',
//           created_at: '',
//           deleted: false,
//           description:
//             'ZC Messaging; This is the plugin that handles both the Direct Messaging and Channels Functionality of Zuri Chat',
//           developer_email: 'dfelastevetest@gmail.com',
//           developer_name: 'ZC Messaging Team',
//           icon_url: '',
//           install_count: 355,
//           install_url: 'https://chat.zuri.chat/api/v1/install',
//           name: 'ZC Messaging',
//           queue: [
//             {
//               event: 'enter_organization',
//               id: 1,
//               message: {
//                 member_id: '61c2458f5a3812d0a9d0b2cd',
//                 organization_id: '61c2382c5a3812d0a9d0b2c6',
//               },
//             },
//           ],
//           queuepid: 1,
//           sidebar_url: 'https://chat.zuri.chat/api/v1/sidebar',
//           sync_request_url: '',
//           template_url: 'https://chat.zuri.chat',
//           updated_at: '',
//           version: '',
//         },
//         plugin_id: '617db02f27c36150b422bc4d',
//         updated_at: '0001-01-01T00:00:00Z',
//       },
//     },
//     settings: {
//       authentication: {
//         authenticationmethod: null,
//         automaticallyopen: null,
//         forcedpasswordreset: null,
//         sessionduration: '',
//         workspacewidetwofactorauthentication: null,
//       },
//       permissions: {
//         customemoji: null,
//         invitations: false,
//         messagesettings: {
//           messagedeleting: false,
//           messageediting: false,
//         },
//         messaging: null,
//         publicfilesharing: false,
//       },
//       settings: {
//         defaultchannels: null,
//         deleteorganization: null,
//         displayemail: false,
//         displaypronouns: false,
//         notifyofnewusers: false,
//         showdisplayname: false,
//         workspaceicon: '',
//         workspacelanguage: '',
//         workspacename: '',
//       },
//     },
//     tokens: 100,
//     updated_at: '0001-01-01T00:00:00Z',
//     version: 'free',
//     workspace_url: 'zurichat-dws2415.zurichat.com',
//   },

//   {
//     _id: '63770df0601ce3fc5dc73497',
//     admins: null,
//     billing: {
//       billing_contact: {
//         contacts: null,
//         to_default_email: false,
//       },
//       billing_setting: {
//         additional_notes: '',
//         city: '',
//         company_name: '',
//         country: '',
//         postal_code: '',
//         state: '',
//         street_address: '',
//         suite: '',
//       },
//     },
//     created_at: '2022-11-18T05:45:36.780721141+01:00',
//     creator_email: 'abrahamterahdebik@gmail.com',
//     creator_id: '63770d3c601ce3fc5dc73496',
//     customize: {
//       addcustomemoji: null,
//       prefixes: null,
//       slackbot: null,
//     },
//     logo_url: '',
//     name: 'Jarah',
//     plugins: {
//       '617db02f27c36150b422bc4d': {
//         added_by: '',
//         approved_by: '',
//         installed_at: '2022-11-18T05:45:39.640651538+01:00',
//         plugin: {
//           _id: '617db02f27c36150b422bc4d',
//           approved: true,
//           approved_at: '2021-10-30 22:50:55.179182235 +0200 CEST m=+9357.492418736',
//           category: '',
//           created_at: '',
//           deleted: false,
//           description:
//             'ZC Messaging; This is the plugin that handles both the Direct Messaging and Channels Functionality of Zuri Chat',
//           developer_email: 'dfelastevetest@gmail.com',
//           developer_name: 'ZC Messaging Team',
//           icon_url: '',
//           install_count: 323,
//           install_url: 'https://chat.zuri.chat/api/v1/install',
//           name: 'ZC Messaging',
//           queue: [
//             {
//               event: 'enter_organization',
//               id: 1,
//               message: {
//                 member_id: '61c2458f5a3812d0a9d0b2cd',
//                 organization_id: '61c2382c5a3812d0a9d0b2c6',
//               },
//             },
//           ],
//           queuepid: 1,
//           sidebar_url: 'https://chat.zuri.chat/api/v1/sidebar',
//           sync_request_url: '',
//           template_url: 'https://chat.zuri.chat',
//           updated_at: '',
//           version: '',
//         },
//         plugin_id: '617db02f27c36150b422bc4d',
//         updated_at: '0001-01-01T00:00:00Z',
//       },
//     },
//     settings: {
//       authentication: {
//         authenticationmethod: null,
//         automaticallyopen: null,
//         forcedpasswordreset: null,
//         sessionduration: '',
//         workspacewidetwofactorauthentication: null,
//       },
//       permissions: {
//         customemoji: null,
//         invitations: false,
//         messagesettings: {
//           messagedeleting: false,
//           messageediting: false,
//         },
//         messaging: null,
//         publicfilesharing: false,
//       },
//       settings: {
//         defaultchannels: null,
//         deleteorganization: null,
//         displayemail: false,
//         displaypronouns: false,
//         notifyofnewusers: false,
//         showdisplayname: false,
//         workspaceicon: '',
//         workspacelanguage: '',
//         workspacename: '',
//       },
//     },
//     tokens: 100,
//     updated_at: '0001-01-01T00:00:00Z',
//     version: 'free',
//     workspace_url: 'zurichat-vek2046.zurichat.com',
//   },
// ];

// const user = {
//   created_at: '2022-11-18T04:42:36.114592334Z',
//   display_name: '',
//   email: 'abrahamterahdebik@gmail.com',
//   first_name: 'Jenkins',
//   id: '63770d3c601ce3fc5dc73496',
//   last_name: '',
//   phone: '',
//   status: 0,
//   time_zone: 'Africa/Lagos',
//   token:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFkyT1RFM01qTTROWHhIZDNkQlIwUlplazR5VVRSWk1rVjRUbXBCZUZreVZYcGFiVTB4V2tkTk0wMTZXVFJaZHowOWZNLURiN0huSHh4VmZZc2IzUm1GUC1XU09ZQ2dvNVF6U3Z6N29aNTdJNzc3IiwiZW1haWwiOiJhYnJhaGFtdGVyYWhkZWJpa0BnbWFpbC5jb20iLCJpZCI6IjYzN2Q4Y2ExNjAxY2UzZmM1ZGM3MzY4YyIsIm9wdGlvbnMiOnsiUGF0aCI6Ii8iLCJEb21haW4iOiIiLCJNYXhBZ2UiOjc5NzU4MjcyNzYsIlNlY3VyZSI6ZmFsc2UsIkh0dHBPbmx5IjpmYWxzZSwiU2FtZVNpdGUiOjB9LCJzZXNzaW9uX25hbWUiOiJmNjgyMmFmOTRlMjliYTExMmJlMzEwZDNhZjQ1ZDVjNyJ9.xQkJOBVVlx0G3bHx9rgXWYNjCep9S8Q_lkiv4UryFyM',
//   updated_at: '0001-01-01T00:00:00Z',
// };

// const token =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFkyT1RFM01qTTROWHhIZDNkQlIwUlplazR5VVRSWk1rVjRUbXBCZUZreVZYcGFiVTB4V2tkTk0wMTZXVFJaZHowOWZNLURiN0huSHh4VmZZc2IzUm1GUC1XU09ZQ2dvNVF6U3Z6N29aNTdJNzc3IiwiZW1haWwiOiJhYnJhaGFtdGVyYWhkZWJpa0BnbWFpbC5jb20iLCJpZCI6IjYzN2Q4Y2ExNjAxY2UzZmM1ZGM3MzY4YyIsIm9wdGlvbnMiOnsiUGF0aCI6Ii8iLCJEb21haW4iOiIiLCJNYXhBZ2UiOjc5NzU4MjcyNzYsIlNlY3VyZSI6ZmFsc2UsIkh0dHBPbmx5IjpmYWxzZSwiU2FtZVNpdGUiOjB9LCJzZXNzaW9uX25hbWUiOiJmNjgyMmFmOTRlMjliYTExMmJlMzEwZDNhZjQ1ZDVjNyJ9.xQkJOBVVlx0G3bHx9rgXWYNjCep9S8Q_lkiv4UryFyM';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFkyT1RNek5EVTBPWHhIZDNkQlIwUlplazlFUVhkT2FrVXhUbXBCZUZreVZYcGFiVTB4V2tkTk0wMHlSVEJaVVQwOWZLTEF3cUV6aXh4UmliM3o3R1ZKQkJxWkkwRS1FMkx2dFdSRjVCeGNoMFkwIiwiZW1haWwiOiJhYnJhaGFtdGVyYWhkZWJpa0BnbWFpbC5jb20iLCJpZCI6IjYzODAwNjE1NjAxY2UzZmM1ZGM3M2E0YSIsIm9wdGlvbnMiOnsiUGF0aCI6Ii8iLCJEb21haW4iOiIiLCJNYXhBZ2UiOjc5NzU4MjcyNzYsIlNlY3VyZSI6ZmFsc2UsIkh0dHBPbmx5IjpmYWxzZSwiU2FtZVNpdGUiOjB9LCJzZXNzaW9uX25hbWUiOiJmNjgyMmFmOTRlMjliYTExMmJlMzEwZDNhZjQ1ZDVjNyJ9.MwO-NEeu9NA6YVk6P9_UbJn7hrW7CvhzfZ9hfM0yukM';
