# Backend Dev (Code Test)

---

## Project Setup:

```
npm install

npm run dev
```

---

# Please test all the apis on "Apollo Studio"

## Token:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzEyMDgwY2U0ZDg3MDIwZjg3MWVlZWMiLCJ1c2VyTmFtZSI6IlRhbnZpciIsImlhdCI6MTcyOTQzMDEwMywiZXhwIjoxNzMyMDIyMTAzfQ.mKvChg2uiUymJFMPA4im--pWA1MiApeSgo-x7u5xsjM

## Graphql Queries are listed below:

### CreateToken:

```
mutation CreateToken($name: String){
  createToken(name: $name) {
    token
  }
}


Variables:
---------
{
  "name": "John Doe"
}
```

---

---

# All the queries below must include the "Authorization Header."

```
Key: Authorization
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzEyMDgwY2U0ZDg3MDIwZjg3MWVlZWMiLCJ1c2VyTmFtZSI6IlRhbnZpciIsImlhdCI6MTcyOTQzMDEwMywiZXhwIjoxNzMyMDIyMTAzfQ.mKvChg2uiUymJFMPA4im--pWA1MiApeSgo-x7u5xsjM
```

### AllNodes:

```
query AllNodes{
  nodes{
    name,
    description,
    responses {
      _id,
      name
    }
  }
}
```

### SingleNode:

```
query SingleNode($nodeId: ID!){
  node(nodeId: $nodeId) {
    _id
    name,
    compositeId,
    createdAt,
    updatedAt,
    global,
    parents {
      _id,
      name
    },
    trigger {
      _id,
      name,
      description,
      functionString,
      resourceTemplateId,
      resourceTemplate{
        name,
        description,
      },
      createdAt,
      updatedAt,
    },
    responses {
      _id,
      name,
      description,
      platforms {
        integrationId,
        build,
        localeGroups{
          localeGroupId,
          variations{
            name,
            responses
          }
        }
      }
    },
    actions {
      _id
    }
  }
}


Variables:
---------
{
  "nodeId": "6296be3470a0c1052f89cccb"
}
```

### AllAction:

```
query AllAction{
  actions {
    _id,
    name,
    description,
    functionString,
    resourceTemplateId,
    resourceTemplate{
      _id,
      name,
      description
    },
    createdAt,
    updatedAt
  }
}
```

### SingleAction:

```
query SingleAction($actionId: ID!){
  action(actionId: $actionId) {
    _id,
    name,
    description,
    functionString,
    resourceTemplateId,
    resourceTemplate{
      _id,
      name,
      description
    },
    createdAt,
    updatedAt
  }
}


Variables:
---------
{
  "actionId": "6530933e6a1690d2f0c78a92"
}
```

### AllTriggers:

```
query AllTriggers{
  triggers {
    _id,
    name,
    description,
    functionString,
    resourceTemplateId,
    resourceTemplate {
      _id,
      name,
      description
    },
    createdAt,
    updatedAt
  }
}
```

### SingleTrigger:

```
query SingleTrigger($triggerId: ID!){
  trigger(triggerId: $triggerId) {
    _id,
    name,
    description,
    functionString,
    resourceTemplateId,
    resourceTemplate {
      _id,
      name,
      description
    },
    createdAt,
    updatedAt
  }
}


Variables:
---------
{
  "triggerId": "629716db70a0c1202689cd0a"
}
```

### AllResponses:

```
query AllResponses{
  responses {
    _id,
    name,
    description,
    platforms {
      integrationId,
      build,
      localeGroups {
        localeGroupId,
        variations {
          name
        }
      }
    }
    createdAt,
    updatedAt
  }
}
```

### SingleResponse:

```
query SingleResponse($responseId: ID!){
  response(responseId: $responseId) {
     _id,
    name,
    description,
    platforms {
      integrationId,
      build,
      localeGroups {
        localeGroupId,
        variations {
          name
        }
      }
    }
    createdAt
  }
}


Variables:
---------
{
  "responseId": "6297189510f525833b1a9305"
}
```

### AllResourceTemplates:

```
query AllResourceTemplates{
  resourceTemplates {
    _id,
    name,
    description,
    schema,
    integrationId,
    functionString,
    key,
    updatedAt
  }
}
```

### SingleResourceTemplate:

```
query SingleResourceTemplate($resourceTemplateId: ID!){
  resourceTemplate(resourceTemplateId: $resourceTemplateId) {
    _id,
    name,
    description,
    schema,
    integrationId,
    functionString,
    key,
    updatedAt
  }
}


Variables:
---------
{
  "resourceTemplateId": "61e9ba20f9b58155162dbf52"
}
```

### NodeByCompositeId:

```
query NodeByCompositeId($compositeId: ID!){
  nodeByCompositeId(compositeId: $compositeId){
    _id
    name,
    compositeId,
    createdAt,
    updatedAt,
    global,
    parents {
      _id,
      name
    },
    trigger {
      _id,
      name,
      description,
      functionString,
      resourceTemplateId,
      resourceTemplate{
        name,
        description,
      },
      createdAt,
      updatedAt,
    },
    responses {
      _id,
      name,
      description,
      platforms {
        integrationId,
        build,
        localeGroups{
          localeGroupId,
          variations{
            name,
            responses
          }
        }
      }
    },
    actions {
      _id
    }
  }
}


Variables:
---------
{
  "compositeId": "V78P4OA9maz31ORn"
}
```
