// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-149d-812c5c59d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-06.ppe.azure-dns.com.\",\"ns2-06.ppe.azure-dns.net.\",\"ns3-06.ppe.azure-dns.org.\",\"ns4-06.ppe.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '528',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-149d-812c5c59d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'de83f8b9-6d31-4fa7-875a-e99948accad2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '74ae3d99-7cd7-486b-a64e-c77f471a57ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131136Z:74ae3d99-7cd7-486b-a64e-c77f471a57ca',
  date: 'Thu, 09 Nov 2017 13:11:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-149d-812c5c59d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-06.ppe.azure-dns.com.\",\"ns2-06.ppe.azure-dns.net.\",\"ns3-06.ppe.azure-dns.org.\",\"ns4-06.ppe.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '528',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-149d-812c5c59d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'de83f8b9-6d31-4fa7-875a-e99948accad2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '74ae3d99-7cd7-486b-a64e-c77f471a57ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131136Z:74ae3d99-7cd7-486b-a64e-c77f471a57ca',
  date: 'Thu, 09 Nov 2017 13:11:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/CAA/set-caa?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CAA\\/set-caa\",\"name\":\"set-caa\",\"type\":\"Microsoft.Network\\/dnszones\\/CAA\",\"etag\":\"31f7735e-7e91-4e72-934a-e411e4ff6462\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-caa.exampledns.com.\",\"TTL\":3600,\"caaRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '31f7735e-7e91-4e72-934a-e411e4ff6462',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c182cefe-c219-49d5-a0c7-52ff571a9087',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5c031bc0-7e8b-4e50-9be4-dd5e6829935a',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131137Z:5c031bc0-7e8b-4e50-9be4-dd5e6829935a',
  date: 'Thu, 09 Nov 2017 13:11:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/CAA/set-caa?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CAA\\/set-caa\",\"name\":\"set-caa\",\"type\":\"Microsoft.Network\\/dnszones\\/CAA\",\"etag\":\"31f7735e-7e91-4e72-934a-e411e4ff6462\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-caa.exampledns.com.\",\"TTL\":3600,\"caaRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '31f7735e-7e91-4e72-934a-e411e4ff6462',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c182cefe-c219-49d5-a0c7-52ff571a9087',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5c031bc0-7e8b-4e50-9be4-dd5e6829935a',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131137Z:5c031bc0-7e8b-4e50-9be4-dd5e6829935a',
  date: 'Thu, 09 Nov 2017 13:11:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/CAA/set-caa?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CAA\\/set-caa\",\"name\":\"set-caa\",\"type\":\"Microsoft.Network\\/dnszones\\/CAA\",\"etag\":\"170e296b-4f44-44e5-9ade-b7abdc9d0a31\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-caa.exampledns.com.\",\"TTL\":3600,\"caaRecords\":[{\"flags\":1,\"tag\":\"tag1\",\"value\":\"val1\"}]}}", { 'cache-control': 'private',
  'content-length': '442',
  'content-type': 'application/json; charset=utf-8',
  etag: '170e296b-4f44-44e5-9ade-b7abdc9d0a31',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '441561ab-b478-4726-9224-5b7e6796727f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '18deb39f-7982-4f43-ad98-f958b4e4b843',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131138Z:18deb39f-7982-4f43-ad98-f958b4e4b843',
  date: 'Thu, 09 Nov 2017 13:11:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/CAA/set-caa?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CAA\\/set-caa\",\"name\":\"set-caa\",\"type\":\"Microsoft.Network\\/dnszones\\/CAA\",\"etag\":\"170e296b-4f44-44e5-9ade-b7abdc9d0a31\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-caa.exampledns.com.\",\"TTL\":3600,\"caaRecords\":[{\"flags\":1,\"tag\":\"tag1\",\"value\":\"val1\"}]}}", { 'cache-control': 'private',
  'content-length': '442',
  'content-type': 'application/json; charset=utf-8',
  etag: '170e296b-4f44-44e5-9ade-b7abdc9d0a31',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '441561ab-b478-4726-9224-5b7e6796727f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '18deb39f-7982-4f43-ad98-f958b4e4b843',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131138Z:18deb39f-7982-4f43-ad98-f958b4e4b843',
  date: 'Thu, 09 Nov 2017 13:11:38 GMT',
  connection: 'close' });
 return result; }]];