// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateLb' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14948',
  'x-ms-request-id': 'bfe9d13b-257d-47c6-9856-4348464ecf55',
  'x-ms-correlation-request-id': 'bfe9d13b-257d-47c6-9856-4348464ecf55',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081626Z:bfe9d13b-257d-47c6-9856-4348464ecf55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:16:25 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateLb' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14948',
  'x-ms-request-id': 'bfe9d13b-257d-47c6-9856-4348464ecf55',
  'x-ms-correlation-request-id': 'bfe9d13b-257d-47c6-9856-4348464ecf55',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081626Z:bfe9d13b-257d-47c6-9856-4348464ecf55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:16:25 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb\",\"name\":\"xplatTestGCreateLb\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-request-id': '55835a33-8727-4852-98b4-7a4ac31292dc',
  'x-ms-correlation-request-id': '55835a33-8727-4852-98b4-7a4ac31292dc',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081628Z:55835a33-8727-4852-98b4-7a4ac31292dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:16:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb\",\"name\":\"xplatTestGCreateLb\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-request-id': '55835a33-8727-4852-98b4-7a4ac31292dc',
  'x-ms-correlation-request-id': '55835a33-8727-4852-98b4-7a4ac31292dc',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081628Z:55835a33-8727-4852-98b4-7a4ac31292dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:16:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '125352cb-1129-4d69-92fd-e9b43aea8297',
  'x-ms-correlation-request-id': '125352cb-1129-4d69-92fd-e9b43aea8297',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081629Z:125352cb-1129-4d69-92fd-e9b43aea8297',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:16:29 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '125352cb-1129-4d69-92fd-e9b43aea8297',
  'x-ms-correlation-request-id': '125352cb-1129-4d69-92fd-e9b43aea8297',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081629Z:125352cb-1129-4d69-92fd-e9b43aea8297',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:16:29 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"eb191034-346e-415b-87ad-b64c451d92fb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '54d8fb2f-f05f-4647-8cad-7017483a36f8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/54d8fb2f-f05f-4647-8cad-7017483a36f8?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1178',
  'x-ms-correlation-request-id': '155db3e6-bb7c-41f7-a820-6d08467f616e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081637Z:155db3e6-bb7c-41f7-a820-6d08467f616e',
  date: 'Thu, 21 May 2015 08:16:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"eb191034-346e-415b-87ad-b64c451d92fb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '54d8fb2f-f05f-4647-8cad-7017483a36f8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/54d8fb2f-f05f-4647-8cad-7017483a36f8?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1178',
  'x-ms-correlation-request-id': '155db3e6-bb7c-41f7-a820-6d08467f616e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081637Z:155db3e6-bb7c-41f7-a820-6d08467f616e',
  date: 'Thu, 21 May 2015 08:16:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/54d8fb2f-f05f-4647-8cad-7017483a36f8?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '110fcb08-ecc6-47bd-8158-1283e1af3a0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14949',
  'x-ms-correlation-request-id': '81ca19a8-bf2e-4598-a537-18b11eff9392',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081638Z:81ca19a8-bf2e-4598-a537-18b11eff9392',
  date: 'Thu, 21 May 2015 08:16:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/54d8fb2f-f05f-4647-8cad-7017483a36f8?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '110fcb08-ecc6-47bd-8158-1283e1af3a0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14949',
  'x-ms-correlation-request-id': '81ca19a8-bf2e-4598-a537-18b11eff9392',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081638Z:81ca19a8-bf2e-4598-a537-18b11eff9392',
  date: 'Thu, 21 May 2015 08:16:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"eb191034-346e-415b-87ad-b64c451d92fb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eb191034-346e-415b-87ad-b64c451d92fb"',
  'x-ms-request-id': 'd199d40e-3ade-4bd7-9341-7c13cd1cca6a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14946',
  'x-ms-correlation-request-id': '5a62d4e9-d0b1-482b-870e-80491b27e031',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081640Z:5a62d4e9-d0b1-482b-870e-80491b27e031',
  date: 'Thu, 21 May 2015 08:16:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"eb191034-346e-415b-87ad-b64c451d92fb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eb191034-346e-415b-87ad-b64c451d92fb"',
  'x-ms-request-id': 'd199d40e-3ade-4bd7-9341-7c13cd1cca6a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14946',
  'x-ms-correlation-request-id': '5a62d4e9-d0b1-482b-870e-80491b27e031',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081640Z:5a62d4e9-d0b1-482b-870e-80491b27e031',
  date: 'Thu, 21 May 2015 08:16:39 GMT',
  connection: 'close' });
 return result; }]];