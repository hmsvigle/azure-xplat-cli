// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkSecurityGroups/networkSecurityGroupName' under resource group 'xplat-test-nsg' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0fe3d5a9-d42d-4b19-b0cf-72922a338d89',
  'x-ms-correlation-request-id': '0fe3d5a9-d42d-4b19-b0cf-72922a338d89',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T092819Z:0fe3d5a9-d42d-4b19-b0cf-72922a338d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 09:28:19 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkSecurityGroups/networkSecurityGroupName' under resource group 'xplat-test-nsg' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0fe3d5a9-d42d-4b19-b0cf-72922a338d89',
  'x-ms-correlation-request-id': '0fe3d5a9-d42d-4b19-b0cf-72922a338d89',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T092819Z:0fe3d5a9-d42d-4b19-b0cf-72922a338d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 09:28:19 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"4d4b0d59-1188-46e1-ac6f-3bdc08cba97e\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6172',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '66ae8053-a20d-487b-8f83-89a69d1e8574',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/66ae8053-a20d-487b-8f83-89a69d1e8574?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1c48316f-935b-4436-85d8-b0345f5c01b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T092823Z:1c48316f-935b-4436-85d8-b0345f5c01b6',
  date: 'Wed, 27 Sep 2017 09:28:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"4d4b0d59-1188-46e1-ac6f-3bdc08cba97e\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"ddf0614e-2151-41a4-91a7-26ea46827a97\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6172',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '66ae8053-a20d-487b-8f83-89a69d1e8574',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/66ae8053-a20d-487b-8f83-89a69d1e8574?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1c48316f-935b-4436-85d8-b0345f5c01b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T092823Z:1c48316f-935b-4436-85d8-b0345f5c01b6',
  date: 'Wed, 27 Sep 2017 09:28:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/66ae8053-a20d-487b-8f83-89a69d1e8574?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7036b007-d1da-4bdc-a641-86f4a6aca2e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '4559f2b7-eda7-48c0-b0ed-60e488a16aa6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T092854Z:4559f2b7-eda7-48c0-b0ed-60e488a16aa6',
  date: 'Wed, 27 Sep 2017 09:28:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/66ae8053-a20d-487b-8f83-89a69d1e8574?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7036b007-d1da-4bdc-a641-86f4a6aca2e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '4559f2b7-eda7-48c0-b0ed-60e488a16aa6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T092854Z:4559f2b7-eda7-48c0-b0ed-60e488a16aa6',
  date: 'Wed, 27 Sep 2017 09:28:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4d4b0d59-1188-46e1-ac6f-3bdc08cba97e\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6179',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"39cb6c16-ee16-47b2-b70c-9bfb416320ac"',
  'x-ms-request-id': 'a2e2ce2b-22b9-44e6-8933-834059513c82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '4be33833-99aa-4aba-ab2a-dddd6b843e01',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T092854Z:4be33833-99aa-4aba-ab2a-dddd6b843e01',
  date: 'Wed, 27 Sep 2017 09:28:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4d4b0d59-1188-46e1-ac6f-3bdc08cba97e\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"39cb6c16-ee16-47b2-b70c-9bfb416320ac\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6179',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"39cb6c16-ee16-47b2-b70c-9bfb416320ac"',
  'x-ms-request-id': 'a2e2ce2b-22b9-44e6-8933-834059513c82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '4be33833-99aa-4aba-ab2a-dddd6b843e01',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T092854Z:4be33833-99aa-4aba-ab2a-dddd6b843e01',
  date: 'Wed, 27 Sep 2017 09:28:54 GMT',
  connection: 'close' });
 return result; }]];