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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreatevnet' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-request-id': '1cdc6aa9-3c32-4e04-bb89-6e14378912c0',
  'x-ms-correlation-request-id': '1cdc6aa9-3c32-4e04-bb89-6e14378912c0',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080549Z:1cdc6aa9-3c32-4e04-bb89-6e14378912c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:05:49 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreatevnet' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-request-id': '1cdc6aa9-3c32-4e04-bb89-6e14378912c0',
  'x-ms-correlation-request-id': '1cdc6aa9-3c32-4e04-bb89-6e14378912c0',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080549Z:1cdc6aa9-3c32-4e04-bb89-6e14378912c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:05:49 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet\",\"name\":\"xplatTestGCreatevnet\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '2dbedae2-d0c9-4389-a3d9-90123a7b9a81',
  'x-ms-correlation-request-id': '2dbedae2-d0c9-4389-a3d9-90123a7b9a81',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080552Z:2dbedae2-d0c9-4389-a3d9-90123a7b9a81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:05:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet\",\"name\":\"xplatTestGCreatevnet\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '2dbedae2-d0c9-4389-a3d9-90123a7b9a81',
  'x-ms-correlation-request-id': '2dbedae2-d0c9-4389-a3d9-90123a7b9a81',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080552Z:2dbedae2-d0c9-4389-a3d9-90123a7b9a81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:05:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2e0ecc21-53db-4c08-83b0-de42c1e4f301',
  'x-ms-correlation-request-id': '2e0ecc21-53db-4c08-83b0-de42c1e4f301',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080554Z:2e0ecc21-53db-4c08-83b0-de42c1e4f301',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:05:53 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2e0ecc21-53db-4c08-83b0-de42c1e4f301',
  'x-ms-correlation-request-id': '2e0ecc21-53db-4c08-83b0-de42c1e4f301',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080554Z:2e0ecc21-53db-4c08-83b0-de42c1e4f301',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:05:53 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"b86d659c-6d57-4533-88c8-007a0c3db0d5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '569',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '584024dc-bf9e-4129-ae38-3f0eeab5bda1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/584024dc-bf9e-4129-ae38-3f0eeab5bda1?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '6d8898d8-490e-43b4-91fc-fcd702699ec2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080601Z:6d8898d8-490e-43b4-91fc-fcd702699ec2',
  date: 'Thu, 21 May 2015 08:06:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"b86d659c-6d57-4533-88c8-007a0c3db0d5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '569',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '584024dc-bf9e-4129-ae38-3f0eeab5bda1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/584024dc-bf9e-4129-ae38-3f0eeab5bda1?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '6d8898d8-490e-43b4-91fc-fcd702699ec2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080601Z:6d8898d8-490e-43b4-91fc-fcd702699ec2',
  date: 'Thu, 21 May 2015 08:06:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/584024dc-bf9e-4129-ae38-3f0eeab5bda1?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f9c2500-51b6-4a1b-be6d-b449767b5bd5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': '09dd22da-0b22-4773-a5d5-07f21b5b2be4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080612Z:09dd22da-0b22-4773-a5d5-07f21b5b2be4',
  date: 'Thu, 21 May 2015 08:06:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/584024dc-bf9e-4129-ae38-3f0eeab5bda1?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f9c2500-51b6-4a1b-be6d-b449767b5bd5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': '09dd22da-0b22-4773-a5d5-07f21b5b2be4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080612Z:09dd22da-0b22-4773-a5d5-07f21b5b2be4',
  date: 'Thu, 21 May 2015 08:06:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"c69330b6-dd9c-4c77-b98f-b7d76bfb6f42\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '570',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c69330b6-dd9c-4c77-b98f-b7d76bfb6f42"',
  'x-ms-request-id': '0ebd17fd-7933-4944-ac2f-685335738ad7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '2caed434-956f-44f9-b250-62b39d653b18',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080613Z:2caed434-956f-44f9-b250-62b39d653b18',
  date: 'Thu, 21 May 2015 08:06:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"c69330b6-dd9c-4c77-b98f-b7d76bfb6f42\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '570',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c69330b6-dd9c-4c77-b98f-b7d76bfb6f42"',
  'x-ms-request-id': '0ebd17fd-7933-4944-ac2f-685335738ad7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '2caed434-956f-44f9-b250-62b39d653b18',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080613Z:2caed434-956f-44f9-b250-62b39d653b18',
  date: 'Thu, 21 May 2015 08:06:13 GMT',
  connection: 'close' });
 return result; }]];