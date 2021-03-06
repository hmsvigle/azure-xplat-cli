﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');

var testPrefix = 'arm-network-local-gateway-tests-generated',
  groupName = 'xplat-test-local-gateway',
  location;
var index = 0;

var localNetworkGateways = {
  addressPrefixes: '10.0.0.0/8',
  addressPrefixesNew: '192.168.0.0/16',
  gatewayIpAddress: '10.0.0.42',
  gatewayIpAddressNew: '10.0.0.24',
  asn: '125',
  asnNew: '142',
  bgpPeeringAddress: '11.0.0.11',
  bgpPeeringAddressNew: '11.0.0.12',
  peerWeight: '15',
  peerWeightNew: '25',
  location: 'westus',
  name: 'localNetworkGatewayName'
};

var invalidPrefixes = {
  addressPrefixes: '192.168.0.0',
  gatewayIpAddress: '10.0.0.12',
  location: 'westus',
  name: 'invalidPrefixesName'
};

var invalidIPAddress = {
  gatewayIpAddress: '10.0.0.257',
  location: 'westus',
  name: 'invalidIPAddressName'
};

var invalidBgpPeeringAddress = {
  asn: '1',
  bgpPeeringAddress: '11.0.0.257',
  gatewayIpAddress: '10.0.0.12',
  location: 'westus',
  name: 'invalidBgpPeeringAddressName'
};

var zeroAsn = {
  asn: '0',
  gatewayIpAddress: '10.0.0.12',
  location: 'westus',
  name: 'zeroASNName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment, true);
      suite.isRecording = false;
      suite.setupSuite(function () {
        location = localNetworkGateways.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        localNetworkGateways.location = location;
        localNetworkGateways.name = suite.isMocked ? localNetworkGateways.name : suite.generateId(localNetworkGateways.name, null);

        localNetworkGateways.group = groupName;
        invalidPrefixes.group = groupName;
        invalidIPAddress.group = groupName;
        invalidBgpPeeringAddress.group = groupName;
        zeroAsn.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            done();
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('local network gateways', function () {
      this.timeout(testTimeout);
      it('create should create local network gateways', function (done) {
        var cmd = 'network local-gateway create -g {group} -n {name} --address-space {addressPrefixes} --ip-address {gatewayIpAddress} --asn {asn} --bgp-peering-address {bgpPeeringAddress} --peer-weight {peerWeight} --location {location}'.formatArgs(localNetworkGateways);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display local network gateways details', function (done) {
        var cmd = 'network local-gateway show -g {group} -n {name}'.formatArgs(localNetworkGateways);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update local network gateways', function (done) {
        var cmd = 'network local-gateway set -g {group} -n {name} --address-space {addressPrefixesNew} --ip-address {gatewayIpAddressNew} --asn {asnNew} --bgp-peering-address {bgpPeeringAddressNew} --peer-weight {peerWeightNew}'.formatArgs(localNetworkGateways);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all local network gateways in resource group', function (done) {
        var cmd = 'network local-gateway list -g {group}'.formatArgs(localNetworkGateways);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete local network gateways', function (done) {
        var cmd = 'network local-gateway delete -g {group} -n {name} --quiet'.formatArgs(localNetworkGateways);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network local-gateway show -g {group} -n {name}'.formatArgs(localNetworkGateways);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);

            cmd = 'network local-gateway list -g {group}'.formatArgs(localNetworkGateways);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
      it('create should fail for invalid prefixes', function (done) {
        var cmd = 'network local-gateway create -g {group} -n {name} --address-space {addressPrefixes} --ip-address {gatewayIpAddress} --location {location} --json'.formatArgs(invalidPrefixes);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid ip address', function (done) {
        var cmd = 'network local-gateway create -g {group} -n {name} --ip-address {gatewayIpAddress} --location {location} --json'.formatArgs(invalidIPAddress);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid bgp peering address', function (done) {
        var cmd = 'network local-gateway create -g {group} -n {name} --asn {asn} --bgp-peering-address {bgpPeeringAddress} --ip-address {gatewayIpAddress} --location {location} --json'.formatArgs(invalidBgpPeeringAddress);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for zero asn', function (done) {
        var cmd = 'network local-gateway create -g {group} -n {name} --asn {asn} --ip-address {gatewayIpAddress} --location {location} --json'.formatArgs(zeroAsn);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});
