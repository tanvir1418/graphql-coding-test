let action = [
  {
    _id: "6530933e6a1690d2f0c78a92",
    name: "Send Email Action",
    description: "",
    functionString: null,
    params: {
      to: "leosoccer@test.com",
      from: "leo@test.com",
      subject: "Testing Prod Email",
      text: "Sending Success",
    },
    resourceTemplateId: "62cfc19bf4573e1b32ca2295",
    createdAt: 1697682238144,
    updatedAt: 1697682238144,
  },
];

let node = [
  {
    _id: "6296be3470a0c1052f89cccb",
    name: "Greeting Message",
    description: "",
    trigger: null,
    preActions: null,
    responses: ["6296fcad70a0c11ddb89ccf0"],
    postActions: null,
    actions: null,
    compositeId: "V78P4OA9maz31ORn",
    global: false,
    redirect: null,
    analytics: null,
    memberTagging: null,
    type: null,
    tags: null,
    saveCompositeId: true,
    createdAt: 1654046260304,
    updatedAt: 1696991678515,
    parents: [],
    root: true,
    position: {
      x: 0.0,
      y: 0.0,
    },
  },
  {
    _id: "6297005470a0c10d6b89ccf1",
    name: "Greeting Message Global",
    description: "",
    trigger: "629712b210f525845e1a92f8",
    preActions: null,
    responses: null,
    postActions: null,
    actions: null,
    compositeId: null,
    global: true,
    redirect: {
      nodeCompositeId: "V78P4OA9maz31ORn",
      sendResponse: true,
      runPreAction: true,
      runPostAction: true,
    },
    analytics: null,
    memberTagging: null,
    type: null,
    tags: null,
    saveCompositeId: true,
    createdAt: 1654063188547,
    updatedAt: 1690790880192,
    parents: null,
    root: null,
  },
  {
    _id: "6297164810f52524ba1a9300",
    name: "Sign up Webinar",
    description: "",
    trigger: "629716db70a0c1202689cd0a",
    preActions: null,
    responses: ["6297171270a0c17c5689cd0c"],
    postActions: null,
    actions: null,
    compositeId: "rCMUtmL3aOULyqBL",
    global: false,
    redirect: null,
    analytics: null,
    memberTagging: null,
    type: null,
    tags: null,
    saveCompositeId: true,
    createdAt: 1654068808589,
    updatedAt: 1696991678931,
    parents: ["V78P4OA9maz31ORn"],
    root: false,
    position: {
      x: 199.0,
      y: 0.0,
    },
  },
  {
    _id: "6297172e70a0c165b989cd10",
    name: "User's Email",
    description: "",
    trigger: "6297176c10f525b8a81a9304",
    preActions: null,
    responses: ["6297189510f525833b1a9305"],
    postActions: ["6530933e6a1690d2f0c78a92"],
    actions: null,
    compositeId: "L2ZrxYMqAW44L5tB",
    global: false,
    redirect: null,
    analytics: null,
    memberTagging: null,
    type: null,
    tags: null,
    saveCompositeId: true,
    createdAt: 1654069038783,
    updatedAt: 1696991678725,
    parents: ["rCMUtmL3aOULyqBL"],
    root: false,
    position: {
      x: 406.0,
      y: 0.0,
    },
  },
  {
    _id: "629718ba70a0c1836d89cd12",
    name: "Book for Consulting",
    description: "",
    trigger: "6297193110f5255a271a9307",
    preActions: null,
    responses: ["62971a7910f525e2b41a930a"],
    postActions: null,
    actions: null,
    compositeId: "XTpR0HkNpxWjJ6eG",
    global: false,
    redirect: null,
    analytics: null,
    memberTagging: null,
    type: null,
    tags: null,
    saveCompositeId: true,
    createdAt: 1654069434341,
    updatedAt: 1696991679555,
    parents: ["V78P4OA9maz31ORn"],
    root: false,
    position: {
      x: 199.0,
      y: 53.0,
    },
  },
  {
    _id: "62971a9570a0c12bb389cd13",
    name: "10AM Timeslot",
    description: "",
    trigger: "62971ad610f525424f1a930b",
    preActions: null,
    responses: ["62971b2970a0c15ccc89cd14"],
    postActions: null,
    actions: null,
    compositeId: "Er9xF8cOr7oVrrvj",
    global: false,
    redirect: null,
    analytics: null,
    memberTagging: null,
    type: null,
    tags: null,
    saveCompositeId: true,
    createdAt: 1654069909520,
    updatedAt: 1696991679141,
    parents: ["XTpR0HkNpxWjJ6eG"],
    root: false,
    position: {
      x: 406.0,
      y: 53.0,
    },
  },
  {
    _id: "62971b3470a0c1803c89cd15",
    name: "12PM Timeslot",
    description: "",
    trigger: null,
    preActions: null,
    responses: null,
    postActions: null,
    actions: null,
    compositeId: "cqBGDrKZrRqiMJpz",
    global: false,
    redirect: null,
    analytics: null,
    memberTagging: null,
    type: null,
    tags: null,
    saveCompositeId: true,
    createdAt: 1654070068308,
    parents: ["XTpR0HkNpxWjJ6eG"],
    root: false,
    updatedAt: 1696991679345,
    position: {
      x: 406.0,
      y: 106.0,
    },
  },
];

let resourceTemplate = [
  {
    _id: "61e9ba20f9b58155162dbf52",
    type: "trigger",
    name: "Predefined Triggers",
    schema: {
      title: "Predefined Triggers",
      type: "object",
      properties: {
        GroupedTriggers: {
          title: "Grouped Triggers",
          description:
            "Grouped Triggers includes any text, any payload and any comment",
          type: "object",
          properties: {
            Input: {
              title: "Any User Input",
              type: "boolean",
            },
          },
        },
        IndividualTriggers: {
          title: "Individual Triggers",
          description: "One or more than one triggers can be selected",
          type: "object",
          properties: {
            Text: {
              title: "Any Text",
              type: "boolean",
            },
            Payload: {
              title: "Any Payload",
              type: "boolean",
            },
            Comment: {
              title: "Any Comment",
              type: "boolean",
            },
            Number: {
              title: "Any Number",
              type: "boolean",
            },
            Email: {
              title: "Any Email",
              type: "boolean",
            },
            "Media/File": {
              title: "Any Media/File",
              type: "boolean",
            },
          },
        },
      },
    },
    integrationId: "woztell-essential-pack",
    functionString:
      'const me = this.messageEvent\nconst it = this.params?.IndividualTriggers\nconst gt = this.params?.GroupedTriggers\nif (!me || (!it && !gt)) {\n  return false\n}\nif (gt?.Input && !["READ", "DELIVERED", "FAILED", "SENT", "DELETED"].includes(me.type) && me.__source__ !== "INCOMING_WEBHOOK") {\n  return true\n}\nif (it?.Text && me.type === "TEXT") {\n  return true\n}\nif (it?.Payload && me.type === "PAYLOAD") {\n  return true\n}\nif (it?.Comment && me.type === "COMMENT") {\n  return true\n}\nif (it?.["Media/File"] && (me.type === "MISC" || me.fileType)) {\n  return true\n}\nif (it?.Email && me.type === "TEXT" && /^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(me.data.text)) {\n  return true\n}\nif (it?.Number && me.type === "TEXT" && /^[0-9]+$/.test(me.data.text)) {\n  return true\n}\nreturn false\n',
    key: "predefined-trigger",
    updatedAt: 1727122901547,
  },
  {
    _id: "61e9ba20f9b581f25a2dbf51",
    type: "trigger",
    name: "Keyword / Payload",
    description: "Use keyword or payload as triggers",
    schema: {
      title: "Keyword Payload Template",
      type: "object",
      default: {
        keywords: [],
        payloads: null,
      },
      properties: {
        payloads: {
          title: "Payloads",
          "ui:type": "creatableTemplate",
          type: "array",
          items: {
            type: "string",
            default: "",
          },
          uniqueItems: true,
        },
        keywords: {
          title: "Keywords Groups",
          type: "array",
          items: {
            type: "object",
            default: {
              caseSensitive: false,
              keyword: [],
            },
            properties: {
              keyword: {
                title: "Keywords",
                type: "array",
                "ui:type": "creatableTemplate",
                items: {
                  type: "string",
                  default: "",
                },
              },
              caseSensitive: {
                title: "Case Sensitive",
                type: "boolean",
              },
              wordBoundary: {
                title: "Word Boundary",
                "ui:tooltipText":
                  'For example, you have toggled this condition and set "hi". When user types "high" (even though "high" contains the alphabets "hi", it is not an individual word of "hi".), the tree node can not be triggered. When user types a sentence containing an individual word of "hi" (i.e. hi, this is Stella!), the tree node can be triggered.',
                type: "boolean",
              },
              equal: {
                title: "Equal",
                "ui:tooltipText":
                  'The Text String must be completely equal for the trigger to occur. If the trigger is set to "Hello", then only "Hello" will trigger the logic. "Hello World" and even "hello" will not work. NOTE: If Equal is set to true, Word Boundary and Case Sensitive is not used.',
                type: "boolean",
              },
            },
            required: ["keyword", "caseSensitive"],
          },
        },
      },
      minProperties: 1.0,
    },
    integrationId: "woztell-essential-pack",
    functionString:
      'let passed = false\nlet failed = false\nconst params = this.params\nconst me = this.messageEvent\n\nfunction escapeRegExp(text) {\n  return text.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, "\\\\$&")\n}\n\nif (!params || !me) {\n  return false\n}\n\nif (params.keywords && params.keywords.length && me.type === "TEXT") {\n  params.keywords.forEach((element) => {\n    if (element.keyword && element.keyword.length) {\n      let regex = ""\n      let i = "i"\n      if (element.equal) {\n        let equal = false\n        element.keyword.forEach((element2) => {\n          if (me.data.text === element2) {\n            equal = true\n          }\n        })\n        if (equal) {\n          passed = true\n        } else {\n          failed = true\n        }\n      } else {\n        element.keyword.forEach((element2) => {\n          if (element.wordBoundary) {\n            if (regex.length) {\n              regex = `${regex}|\\\\b${escapeRegExp(element2)}\\\\b`\n            } else {\n              regex = `\\\\b${escapeRegExp(element2)}\\\\b`\n            }\n          } else if (regex.length) {\n            regex = `${regex}|${escapeRegExp(element2)}`\n          } else {\n            regex = `${escapeRegExp(element2)}`\n          }\n        })\n        if (element.caseSensitive) {\n          i = ""\n        }\n        regex = new RegExp(regex, `${i}`)\n        if (regex.test(me.data.text)) {\n          passed = true\n        } else {\n          failed = true\n        }\n      }\n    }\n  })\n}\nif (params.payloads && params.payloads.length && me.type === "PAYLOAD") {\n  if (me.type === "PAYLOAD") {\n    params.payloads.forEach((element) => {\n      if (element === me.data.payload) {\n        passed = true\n      }\n    })\n  }\n}\nreturn passed && !failed',
    key: "keyword-payload",
    updatedAt: 1727122901548,
  },
  {
    _id: "62cfc19bf4573e1b32ca2295",
    type: "action",
    name: "Send Email",
    integrationId: "email",
    functionString:
      'return new Promise(async (resolve, reject) => {\r\n  try {\r\n    const _ = require("lodash")\r\n    const { sendEmail } = require("email/1.0.0")\r\n\r\n    const from = _.get(this.params, "from")\r\n    const to = _.get(this.params, "to")\r\n    const cc = _.get(this.params, "cc")\r\n    const bcc = _.get(this.params, "bcc")\r\n    const subject = _.get(this.params, "subject")\r\n    const text = _.get(this.params, "text")\r\n    const html = _.get(this.params, "html")\r\n    const attachments = _.get(this.params, "attachments")\r\n    const amp = _.get(this.params, "amp")\r\n    await sendEmail({\r\n      from,\r\n      to,\r\n      cc,\r\n      bcc,\r\n      subject,\r\n      text,\r\n      html,\r\n      attachments,\r\n      amp,\r\n    })\r\n    resolve()\r\n  } catch (e) {\r\n    console.error("[Email Module Error]", e)\r\n    reject(e)\r\n  }\r\n})',
    schema: {
      type: "object",
      title: "Send Email",
      properties: {
        from: {
          type: "string",
          title: "From address",
        },
        to: {
          type: "string",
          title: "To address",
        },
        cc: {
          type: "string",
          title: "CC address",
        },
        bcc: {
          type: "string",
          title: "BCC address",
        },
        subject: {
          type: "string",
          title: "Subject",
          "ui:type": "textTemplate",
        },
        text: {
          type: "string",
          title: "Text",
          "ui:type": "textTemplate",
          description:
            "This will be used as fallback text when HTML is applied.",
        },
        html: {
          type: "string",
          title: "HTML",
          "ui:type": "code",
          "ui:multiLine": true,
          "ui:rows": 4.0,
        },
        attachments: {
          type: "array",
          title: "Attachments",
          maxItems: 10.0,
          items: {
            type: "object",
            title: "Attachment",
            properties: {
              path: {
                type: "string",
                title: "URL",
                "ui:type": "mediaUrl",
              },
            },
          },
        },
        amp: {
          type: "string",
          title: "AMP",
          "ui:hidden": true,
          "ui:multiLine": true,
          "ui:rows": 4.0,
        },
      },
    },
    requestedVerification: false,
    verified: true,
    published: true,
    createdAt: 1654758039590,
  },
];

let response = [
  {
    _id: "6296fcad70a0c11ddb89ccf0",
    name: "Greeting Message",
    description: "",
    platforms: [
      {
        integrationId: "woztell-essential-pack",
        localeGroups: [
          {
            localeGroup: "default",
            variations: [
              {
                name: "Standard",
                responses: [
                  {
                    type: "TEXT",
                    text: "hello {{firstName}}",
                    id: "WxPXEokG",
                    transform: "",
                  },
                ],
              },
            ],
          },
        ],
        build: 1.0,
      },
      {
        integrationId: "whatsapp-cloud",
        localeGroups: [
          {
            localeGroup: "default",
            variations: [
              {
                name: "Standard",
                responses: [
                  {
                    type: "WHATSAPP_REPLY_BUTTONS",
                    header: {
                      type: "text",
                      text: "Hi there, welcome to our booking system 😉",
                    },
                    body: {
                      text: "You would like to...",
                    },
                    action: {
                      buttons: [
                        {
                          type: "reply",
                          reply: {
                            title: "Sign up for Webinar",
                            payload: "WEBINAR",
                          },
                        },
                        {
                          type: "reply",
                          reply: {
                            title: "Book for Consulting",
                            payload: "CONSULT",
                          },
                        },
                      ],
                    },
                    id: "ZPVCmFvV",
                    transform: "",
                  },
                ],
              },
            ],
          },
        ],
        build: 2.0,
      },
    ],
    tags: [],
    createdAt: 1654062253768,
    updatedAt: 1696993124533,
  },
  {
    _id: "6297171270a0c17c5689cd0c",
    name: "Ask for Email",
    description: "",
    platforms: [
      {
        integrationId: "woztell-essential-pack",
        localeGroups: [
          {
            localeGroup: "default",
            variations: [
              {
                name: "Standard",
                responses: [
                  {
                    type: "TEXT",
                    text: "Please enter your email",
                    id: "lQRFKIwH",
                    transform: "",
                  },
                ],
              },
            ],
          },
        ],
        build: 1.0,
      },
    ],
    tags: [],
    createdAt: 1654069010275,
  },
  {
    _id: "6297189510f525833b1a9305",
    name: "Get Email Response",
    description: "",
    platforms: [
      {
        integrationId: "woztell-essential-pack",
        localeGroups: [
          {
            localeGroup: "default",
            variations: [
              {
                name: "Standard",
                responses: [
                  {
                    type: "TEXT",
                    text: "Thank you for signing up for our webinar!",
                    id: "8Y4Qw8A8",
                    transform: "",
                  },
                ],
              },
            ],
          },
        ],
        build: 1.0,
      },
    ],
    tags: [],
    createdAt: 1654069397386,
  },
  {
    _id: "62971a7910f525e2b41a930a",
    name: "Booking Timeslot",
    description: "",
    platforms: [
      {
        integrationId: "woztell-essential-pack",
        localeGroups: [
          {
            localeGroup: "default",
            variations: [
              {
                name: "Standard",
                responses: [
                  {
                    type: "TEXT",
                    id: "DsY0emM1",
                    transform: "",
                  },
                ],
              },
            ],
          },
        ],
        build: 1.0,
      },
      {
        integrationId: "whatsapp-cloud",
        localeGroups: [
          {
            localeGroup: "default",
            variations: [
              {
                name: "Standard",
                responses: [
                  {
                    type: "WHATSAPP_LIST",
                    header: {},
                    body: {
                      text: "Please select a time slot for the consulting session",
                    },
                    action: {
                      button: "Available Time Slot",
                      sections: [
                        {
                          title: "Monday ",
                          rows: [
                            {
                              title: "10:00 AM",
                              payload: "10_AM",
                            },
                            {
                              title: "12:00 PM",
                              payload: "12_PM",
                            },
                          ],
                        },
                      ],
                    },
                    id: "RfQ0iQEV",
                    transform: "",
                  },
                ],
              },
            ],
          },
        ],
        build: 2.0,
      },
    ],
    tags: [],
    createdAt: 1654069881839,
  },
  {
    _id: "62971b2970a0c15ccc89cd14",
    name: "Timeslot 1 Response",
    description: "",
    platforms: [
      {
        integrationId: "woztell-essential-pack",
        localeGroups: [
          {
            localeGroup: "default",
            variations: [
              {
                name: "Standard",
                responses: [
                  {
                    type: "TEXT",
                    text: "Thanks for the booking. Your consulting session will be on:\n\nMonday, 10:00 AM\n3/F, ABC Building ",
                    id: "G8DIOL5S",
                    transform: "",
                  },
                ],
              },
            ],
          },
        ],
        build: 1.0,
      },
    ],
    tags: [],
    createdAt: 1654070057427,
  },
];

let trigger = [
  {
    _id: "629712b210f525845e1a92f8",
    name: "Keyword: Say Hi",
    description: "",
    params: {
      keywords: [
        {
          caseSensitive: false,
          keyword: ["hi", "hello", "hey"],
        },
      ],
    },
    functionString: null,
    resourceTemplateId: "61e9ba20f9b581f25a2dbf51",
    createdAt: 1654067890224,
  },
  {
    _id: "629716db70a0c1202689cd0a",
    name: "Payload: WEBINAR",
    description: "",
    params: {
      keywords: [],
      payloads: ["WEBINAR"],
    },
    functionString: null,
    resourceTemplateId: "61e9ba20f9b581f25a2dbf51",
    createdAt: 1654068955016,
  },
  {
    _id: "6297176c10f525b8a81a9304",
    name: "Email Trigger",
    description: "",
    params: {
      IndividualTriggers: {
        Email: true,
      },
    },
    functionString: null,
    resourceTemplateId: "61e9ba20f9b58155162dbf52",
    createdAt: 1654069100236,
  },
  {
    _id: "6297193110f5255a271a9307",
    name: "Payload: CONSULT",
    description: "",
    params: {
      keywords: [],
      payloads: ["CONSULT"],
    },
    functionString: null,
    resourceTemplateId: "61e9ba20f9b581f25a2dbf51",
    createdAt: 1654069553350,
  },
  {
    _id: "62971ad610f525424f1a930b",
    name: "Payload: 10_AM",
    description: "",
    params: {
      keywords: [],
      payloads: ["10_AM"],
    },
    functionString: null,
    resourceTemplateId: "61e9ba20f9b581f25a2dbf51",
    createdAt: 1654069974465,
  },
];

export default { action, node, resourceTemplate, response, trigger };
