app.factory('YoshkaFactory', [function() {


var factory = {};

factory.yoshkaTemplates = [
                            {
                              "FTP": [
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "FTPLoginTask",
                                  "task": "edu.fit.icis.yoshka.tasks.ftp.FTPLoginTask"
                                },
                                {
                                  "args": {
                                    "destination": null,
                                    "name": null,
                                    "remote": null
                                  },
                                  "name": "FTPDownloadFileTask",
                                  "task": "edu.fit.icis.yoshka.tasks.ftp.FTPDownloadFileTask"
                                },
                                {
                                  "args": {
                                    "filepath": null,
                                    "name": null
                                  },
                                  "name": "FTPUploadFileTask",
                                  "task": "edu.fit.icis.yoshka.tasks.ftp.FTPUploadFileTask"
                                },
                                {
                                  "args": {
                                    "name": null,
                                    "remotePathToList": null
                                  },
                                  "name": "FTPListFilesTask",
                                  "task": "edu.fit.icis.yoshka.ftp.FTPListFilesTask"
                                },
                                {
                                  "args": {
                                    "name": null,
                                    "remotePathToList": null
                                  },
                                  "name": "FTPListDirectoriesTask",
                                  "task": "edu.fit.icis.yoshka.FTPListDirectoriesTask"
                                },
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "FTPLogoutTask",
                                  "task": "edu.fit.icis.yoshka.tasks.ftp.FTPLogoutTask"
                                }
                              ]
                            },
                            {
                              "Web": [
                                {
                                  "args": {
                                    "name": null,
                                    "url": null
                                  },
                                  "name": "GetRequestTask",
                                  "task": "edu.fit.icis.yoshka.tasks.web.GetRequestTask"
                                },
                                {
                                  "args": {
                                    "name": null,
                                    "parameter": null,
                                    "url": null
                                  },
                                  "name": "PostRequestTask",
                                  "task": "edu.fit.icis.yoshka.tasks.web.PostRequestTask"
                                }
                              ]
                            },
                            {
                              "Commands": [
                                {
                                  "args": {
                                    "filePath": null,
                                    "name": null
                                  },
                                  "name": "CheckFileTask",
                                  "task": "edu.fit.icis.yoshka.tasks.commands"
                                },
                                {
                                  "args": {
                                    "filePath": null,
                                    "name": null
                                  },
                                  "name": "ReadFileTask",
                                  "task": "edu.fit.icis.yoshka.tasks.commands"
                                },
                                {
                                  "args": {
                                    "destination": null,
                                    "name": null,
                                    "soruce": null
                                  },
                                  "name": "SCPTask",
                                  "task": "edu.fit.icis.yoshka.tasks.commands"
                                }
                              ]
                            },
                            {
                              "Generics": [
                                {
                                  "args": {
                                    "name": null,
                                    "time": null
                                  },
                                  "name": "Sleep",
                                  "task": "edu.fit.icis.yoshka.tasks.generics.SleepTask"
                                },
                                {
                                  "args": {
                                    "command": null,
                                    "name": null,
                                    "outputFile": null
                                  },
                                  "name": "ExecuteCommandTask",
                                  "task": "edu.fit.icis.yoshka.tasks.generics.ExecuteCommandTask"
                                },
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "ReturnFailureTask",
                                  "task": "edu.fit.icis.yoshka.tasks.generics.ReturnFailureTask"
                                },
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "ReturnSuccessTask",
                                  "task": "edu.fit.icis.yoshka.tasks.generics.ReturnSuccessTask"
                                }
                              ]
                            },
                            {
                              "Database": [
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "CloseSQLTask",
                                  "task": "edu.fit.icis.yoshka.database.CloseSQLTask"
                                },
                                {
                                  "arsg": {
                                    "name": null
                                  },
                                  "name": "ConnectSQLTask",
                                  "task": "edu.fit.icis.yoshka.database.ConnectSQLTask"
                                },
                                {
                                  "args": {
                                    "name": null,
                                    "update": null
                                  },
                                  "name": "ExecuteUpdateTask",
                                  "task": "edu.fit.icis.yoshka.database.ExecuteUpdateTask"
                                },
                                {
                                  "args": {
                                    "name": null,
                                    "query": null
                                  },
                                  "name": "ExecuteQueryTask",
                                  "task": "edu.fit.icis.yoshka.database.ExecuteQueryTask"
                                }
                              ]
                            },
                            {
                              "Mail": [
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "MailLoginTask",
                                  "task": "edu.fit.icis.yoshka.tasks.mail.MailLoginTask"
                                },
                                {
                                  "args": {
                                    "key": null,
                                    "name": null,
                                    "taskName": null
                                  },
                                  "name": "ReadMailTask",
                                  "task": "edu.fit.icis.yoshka.tasks.mail.ReadMailTask"
                                },
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "CheckMailTask",
                                  "task": "edu.fit.icis.yoshka.tasks.mail.CheckMailTask"
                                },
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "DeleteAllMailTask",
                                  "task": "edu.fit.icis.yoshka.tasks.mail.DeleteAllMailTask"
                                },
                                {
                                  "arsg": {
                                    "mailID": null,
                                    "name": null
                                  },
                                  "name": "GetMailByIDTask",
                                  "task": "edu.fit.icis.yoshka.tasks.mail.GetMailByIDTask"
                                },
                                {
                                  "args": {
                                    "name": null,
                                    "sender": null
                                  },
                                  "name": "GetMailBySenderTask",
                                  "tasks": "edu.fit.icis.yoshka.tasks.mail.GetMailBySenderTask"
                                },
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "RetrieveMailTask",
                                  "task": "edu.fit.icis.yoshka.tasks.mail.RetrieveMailTask"
                                },
                                {
                                  "args": {
                                    "filePath": null,
                                    "from": null,
                                    "mailServer": null,
                                    "messageToSend": null,
                                    "name": null,
                                    "recipients": null,
                                    "subject": null
                                  },
                                  "name": "SendMailAttachmentTask",
                                  "task": "edu.fit.icis.yoshka.tasks.mail.SendMailAttachmentTask"
                                },
                                {
                                  "args": {
                                    "from": null,
                                    "mailServer": null,
                                    "messageToSend": null,
                                    "name": null,
                                    "recipients": null,
                                    "subject": null
                                  },
                                  "name": "sendMail",
                                  "task": "edu.fit.icis.yoshka.tasks.mail.SendMailTask"
                                },
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "MailLogout",
                                  "task": "edu.fit.icis.yoshka.tasks.mail.MailLogoutTask"
                                }
                              ]
                            },
                            {
                              "Git": [
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "GitPushTask",
                                  "task": "edu.fit.icis.yoshka.tasks.git.GitPushTask"
                                },
                                {
                                  "args": {
                                    "name": null
                                  },
                                  "name": "GitPullTask",
                                  "task": "edu.fit.icis.yoshka.tasks.git.GitPullTask"
                                },
                                {
                                  "args": {
                                    "local": null,
                                    "remote": null
                                  },
                                  "name": "GitConnectTask",
                                  "task": "edu.fit.icis.yoshka.tasks.git.GitConnectTask"
                                },
                                {
                                  "args": {
                                    "message": null,
                                    "name": null
                                  },
                                  "name": "GitCommitTask",
                                  "task": "edu.fit.icis.yoshka.tasks.git.GitCommitTask"
                                },
                                {
                                  "args": {
                                    "local": null,
                                    "name": null,
                                    "remote": null
                                  },
                                  "name": "GitCloneRepoTask",
                                  "task": "edu.fit.icis.yoshka.tasks.git.GitCloneRepoTask"
                                },
                                {
                                  "args": {
                                    "name": null,
                                    "path": null
                                  },
                                  "name": "GitAddTask",
                                  "task": "edu.fit.icis.yoshka.tasks.git.GitAddTask"
                                }
                              ]
                            }
                          ]


factory.example = [{
                                     "root": true,
                                     "behavior": [
                                      {
                                       "root": false,
                                       "behavior": [
                                        {
                                         "root": false,
                                         "behavior": [
                                          {
                                           "root": false,
                                           "behavior": [
                                            {
                                             "root": false,
                                             "behavior": [
                                              {
                                               "root": false,
                                               "behavior": [],
                                               "args": [{
                                                "name": "HTTPGet",
                                                "url": "http://www.yahoo.com"
                                               }],
                                               "task": "edu.fit.icis.yoshka.tasks.web.GetRequestTask",
                                               "name": "HTTPGet",
                                               "type": "Success"
                                              },
                                              {
                                               "root": false,
                                               "behavior": [],
                                               "args": [{"name": "returnFailure"}],
                                               "task": "edu.fit.icis.yoshka.tasks.generics.ReturnFailureTask",
                                               "name": "returnFailure",
                                               "type": "Failure"
                                              }
                                             ],
                                             "args": [{"name": "ftpLogout"}],
                                             "task": "edu.fit.icis.yoshka.tasks.ftp.FTPLogoutTask",
                                             "name": "FTPLogout",
                                             "type": "Success"
                                            },
                                            {
                                             "root": false,
                                             "behavior": [],
                                             "args": [{"name": "ftpLogout2"}],
                                             "task": "edu.fit.icis.yoshka.tasks.ftp.FTPLogoutTask",
                                             "name": "FTPLogout2",
                                             "type": "Failure"
                                            }
                                           ],
                                           "args": [{
                                            "name": "FTPDownload",
                                            "remote": "/home/{{ansible_ssh_user}}/{{inventory_hostname_short}}.txt",
                                            "destination": "/home/{{ansible_ssh_user}}/yoshka/stuff.txt"
                                           }],
                                           "task": "edu.fit.icis.yoshka.tasks.ftp.FTPDownloadFileTask",
                                           "name": "FTPDownload",
                                           "type": "Success"
                                          },
                                          {
                                           "root": false,
                                           "behavior": [],
                                           "args": [{"name": "returnFailure"}],
                                           "task": "edu.fit.icis.yoshka.tasks.generics.ReturnFailureTask",
                                           "name": "returnFailure",
                                           "type": "Failure"
                                          }
                                         ],
                                         "args": [{"name": "ftpLogin"}],
                                         "task": "edu.fit.icis.yoshka.tasks.ftp.FTPLoginTask",
                                         "name": "FTPLogin",
                                         "type": "Success"
                                        },
                                        {
                                         "root": false,
                                         "behavior": [],
                                         "args": [{"name": "returnFailure"}],
                                         "task": "edu.fit.icis.yoshka.tasks.generics.ReturnFailureTask",
                                         "name": "returnFailure",
                                         "type": "Failure"
                                        }
                                       ],
                                       "args": [{
                                        "name": "ReadMail",
                                        "taskName": "RetrieveMail",
                                        "key": "requirements"
                                       }],
                                       "task": "edu.fit.icis.yoshka.tasks.mail.ReadMailTask",
                                       "name": "ReadMail",
                                       "type": "Success"
                                      },
                                      {
                                       "root": false,
                                       "behavior": [],
                                       "args": [{"name": "returnFailure"}],
                                       "task": "edu.fit.icis.yoshka.tasks.generics.ReturnFailureTask",
                                       "name": "returnFailure",
                                       "type": "Failure"
                                      }
                                     ],
                                     "args": [{"name": "login"}],
                                     "task": "edu.fit.icis.yoshka.tasks.mail.MailLoginTask",
                                     "name": "MailLogin"
                                    }]


return factory;



}])