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

var testPrefix = 'arm-network-nsg-rule-tests-generated',
  groupName = 'xplat-test-rule',
  location;
var index = 0;

var securityRules = {
  description: 'createdesc',
  descriptionNew: 'setdesc',
  protocol: 'Tcp',
  protocolNew: 'Udp',
  sourcePortRanges: '1024,1026',
  destinationPortRanges: '4242,65042',
  sourceAddressPrefixes: '10.0.0.0/16',
  destinationAddressPrefixes: '11.0.0.0/24',
  access: 'Allow',
  accessNew: 'Deny',
  priority: '1500',
  priorityNew: '1542',
  direction: 'Inbound',
  directionNew: 'Outbound',
  name: 'securityRuleName'
};

securityRules.networkSecurityGroupName = 'networkSecurityGroupName';
securityRules.sourceASGName = 'sourceASGName';
securityRules.destinationASGName = 'destinationASGName';

var networkSecurityGroup = {
  location: 'westcentralus',
  name: 'networkSecurityGroupName'
};

var sourceASG = {
  location: 'westcentralus',
  name: 'sourceASGName'
};

var destinationASG = {
  location: 'westcentralus',
  name: 'destinationASGName'
};

var securityRulesDefault = {
  priority: '1500',
  protocol: '*',
  sourcePortRange: '*',
  destinationPortRange: '80',
  sourceAddressPrefix: '*',
  destinationAddressPrefix: '*',
  access: 'Allow',
  direction: 'Inbound',
  networkSecurityGroupName: 'networkSecurityGroupName',
  applicationSecurityGroupName: 'applicationSecurityGroupName',
  applicationSecurityGroupName: 'applicationSecurityGroupName',
  name: 'securityRulesDefaultName',
  group: groupName
};

var tooLongDescription = {
  description: 'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'tooLongDescriptionName'
};

var protocolOutOfRange = {
  protocol: 'Http',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'protocolOutOfRangeName'
};

var sourcePortOutOfRange = {
  sourcePortRange: '66600',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'sourcePortOutOfRangeName'
};

var destinationPortOutOfRange = {
  destinationPortRange: '66600',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'destinationPortOutOfRangeName'
};

var invalidSourceAddressPrefix = {
  sourceAddressPrefix: '10.0.0.0/42',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'invalidSourceAddressPrefixName'
};

var invalidDestinationAddressPrefix = {
  destinationAddressPrefix: '10.0.0.0/42',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'invalidDestinationAddressPrefixName'
};

var accessOutOfRange = {
  access: 'Access',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'accessOutOfRangeName'
};

var rulePriorityUnderRange = {
  priority: '99',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'rulePriorityUnderRangeName'
};

var rulePriorityOverRange = {
  priority: '4097',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'rulePriorityOverRangeName'
};

var directionOutOfRange = {
  direction: 'Direction',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'directionOutOfRangeName'
};

var singularPrefixes = {
  sourcePortRange: '1025-1030',
  sourcePortRangeNew: '64000',
  sourceAddressPrefix: '10.0.0.0/16',
  sourceAddressPrefixNew: '10.0.0.0/24',
  destinationPortRange: '4242',
  destinationPortRangeNew: '1200-1202',
  destinationAddressPrefix: '11.0.0.0/24',
  destinationAddressPrefixNew: '11.0.0.0/16',
  description: 'testDesc',
  priority: '1470',
  networkSecurityGroupName: 'networkSecurityGroupName',
  name: 'singularPrefixesName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westcentralus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = securityRules.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        securityRules.location = location;
        securityRules.name = suite.isMocked ? securityRules.name : suite.generateId(securityRules.name, null);

        securityRules.group = groupName;
        tooLongDescription.group = groupName;
        protocolOutOfRange.group = groupName;
        sourcePortOutOfRange.group = groupName;
        destinationPortOutOfRange.group = groupName;
        invalidSourceAddressPrefix.group = groupName;
        invalidDestinationAddressPrefix.group = groupName;
        accessOutOfRange.group = groupName;
        rulePriorityUnderRange.group = groupName;
        rulePriorityOverRange.group = groupName;
        directionOutOfRange.group = groupName;
        singularPrefixes.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network nsg create -g {1} -n {name} --location {location} --json'.formatArgs(networkSecurityGroup, groupName);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              if (!testUtils.assertExitStatus(result, done)) return;
              var cmd = 'network application-security-group create -g {1} -n {name} --location {location} --json'.formatArgs(sourceASG, groupName);
              generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                if (!testUtils.assertExitStatus(result, done)) return;
                var output = JSON.parse(result.text);
                securityRules.sourceASGId = output.id;
                var cmd = 'network application-security-group create -g {1} -n {name} --location {location} --json'.formatArgs(destinationASG, groupName);
                generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                  if (!testUtils.assertExitStatus(result, done)) return;
                  var output = JSON.parse(result.text);
                  securityRules.destinationASGId = output.id;
                  done();
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          securityRules.sourceASGId = generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'sourceASGs', securityRules.sourceASGName);
          securityRules.destinationASGId = generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'destinationASGs', securityRules.destinationASGName);
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

    describe('security rules', function () {
      this.timeout(testTimeout);
      it('create should create security rules', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --description {description} --protocol {protocol} --source-port-ranges {sourcePortRanges} --destination-port-ranges {destinationPortRanges} --source-address-prefixes {sourceAddressPrefixes} --destination-address-prefixes {destinationAddressPrefixes} --access {access} --priority {priority} --direction {direction} --nsg-name {networkSecurityGroupName} --json'.formatArgs(securityRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(securityRules.name);
          output.description.toLowerCase().should.equal(securityRules.description.toLowerCase());
          output.protocol.toLowerCase().should.equal(securityRules.protocol.toLowerCase());
          generatorUtils.splitStringByCharacter(securityRules.sourcePortRanges, ',').forEach(function (item) { output.sourcePortRanges.should.containEql(item) });
          generatorUtils.splitStringByCharacter(securityRules.destinationPortRanges, ',').forEach(function (item) { output.destinationPortRanges.should.containEql(item) });
          generatorUtils.splitStringByCharacter(securityRules.sourceAddressPrefixes, ',').forEach(function (item) { output.sourceAddressPrefixes.should.containEql(item) });
          generatorUtils.splitStringByCharacter(securityRules.destinationAddressPrefixes, ',').forEach(function (item) { output.destinationAddressPrefixes.should.containEql(item) });
          output.access.toLowerCase().should.equal(securityRules.access.toLowerCase());
          output.priority.should.equal(parseInt(securityRules.priority, 10));
          output.direction.toLowerCase().should.equal(securityRules.direction.toLowerCase());
          done();
        });
      });
      it('show should display security rules details', function (done) {
        var cmd = 'network nsg rule show -g {group} -n {name} --nsg-name {networkSecurityGroupName} --json'.formatArgs(securityRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(securityRules.name);
          output.description.toLowerCase().should.equal(securityRules.description.toLowerCase());
          output.protocol.toLowerCase().should.equal(securityRules.protocol.toLowerCase());
          generatorUtils.splitStringByCharacter(securityRules.sourcePortRanges, ',').forEach(function (item) { output.sourcePortRanges.should.containEql(item) });
          generatorUtils.splitStringByCharacter(securityRules.destinationPortRanges, ',').forEach(function (item) { output.destinationPortRanges.should.containEql(item) });
          generatorUtils.splitStringByCharacter(securityRules.sourceAddressPrefixes, ',').forEach(function (item) { output.sourceAddressPrefixes.should.containEql(item) });
          generatorUtils.splitStringByCharacter(securityRules.destinationAddressPrefixes, ',').forEach(function (item) { output.destinationAddressPrefixes.should.containEql(item) });
          output.access.toLowerCase().should.equal(securityRules.access.toLowerCase());
          output.priority.should.equal(parseInt(securityRules.priority, 10));
          output.direction.toLowerCase().should.equal(securityRules.direction.toLowerCase());
          done();
        });
      });
      it('set should update security rules', function (done) {
        var cmd = 'network nsg rule set -g {group} -n {name} --description {descriptionNew} --protocol {protocolNew} --access {accessNew} --priority {priorityNew} --direction {directionNew} --nsg-name {networkSecurityGroupName} --source-application-security-groups {sourceASGId} --destination-application-security-groups {destinationASGId} --json'.formatArgs(securityRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(securityRules.name);
          output.description.toLowerCase().should.equal(securityRules.descriptionNew.toLowerCase());
          output.protocol.toLowerCase().should.equal(securityRules.protocolNew.toLowerCase());
          output.access.toLowerCase().should.equal(securityRules.accessNew.toLowerCase());
          output.priority.should.equal(parseInt(securityRules.priorityNew, 10));
          output.direction.toLowerCase().should.equal(securityRules.directionNew.toLowerCase());
          done();
        });
      });
      it('list should display all security rules in resource group', function (done) {
        var cmd = 'network nsg rule list -g {group} --nsg-name {networkSecurityGroupName} --json'.formatArgs(securityRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === securityRules.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete security rules', function (done) {
        var cmd = 'network nsg rule delete -g {group} -n {name} --nsg-name {networkSecurityGroupName} --quiet --json'.formatArgs(securityRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network nsg rule show -g {group} -n {name} --nsg-name {networkSecurityGroupName} --json'.formatArgs(securityRules);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;

            cmd = 'network nsg rule list -g {group} --nsg-name {networkSecurityGroupName} --json'.formatArgs(securityRules);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var outputs = JSON.parse(result.text);
              _.some(outputs, function (output) {
                return output.name === securityRules.name;
              }).should.be.false;
              done();
            });
          });
        });
      });
      it('create with defaults should create security rules with default values', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(securityRulesDefault);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(securityRulesDefault.name);
          output.protocol.toLowerCase().should.equal(securityRulesDefault.protocol.toLowerCase());
          output.sourcePortRange.toLowerCase().should.equal(securityRulesDefault.sourcePortRange.toLowerCase());
          output.destinationPortRange.toLowerCase().should.equal(securityRulesDefault.destinationPortRange.toLowerCase());
          output.sourceAddressPrefix.toLowerCase().should.equal(securityRulesDefault.sourceAddressPrefix.toLowerCase());
          output.destinationAddressPrefix.toLowerCase().should.equal(securityRulesDefault.destinationAddressPrefix.toLowerCase());
          output.access.toLowerCase().should.equal(securityRulesDefault.access.toLowerCase());
          output.direction.toLowerCase().should.equal(securityRulesDefault.direction.toLowerCase())

          cmd = 'network nsg rule delete -g {group} -n {name} --nsg-name {networkSecurityGroupName} --quiet --json'.formatArgs(securityRulesDefault);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for too long description', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --description {description} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(tooLongDescription);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for protocol out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --protocol {protocol} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(protocolOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for source port out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --source-port-range {sourcePortRange} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(sourcePortOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for destination port out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --destination-port-range {destinationPortRange} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(destinationPortOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid source address prefix', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --source-address-prefix {sourceAddressPrefix} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(invalidSourceAddressPrefix);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid destination address prefix', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --destination-address-prefix {destinationAddressPrefix} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(invalidDestinationAddressPrefix);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for access out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --access {access} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(accessOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for rule priority under range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(rulePriorityUnderRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for rule priority over range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(rulePriorityOverRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for direction out of range', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --direction {direction} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(directionOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should pass for singular prefixes', function (done) {
        var cmd = 'network nsg rule create -g {group} -n {name} --source-port-range {sourcePortRange} --source-address-prefix {sourceAddressPrefix} --destination-port-range {destinationPortRange} --destination-address-prefix {destinationAddressPrefix} --description {description} --priority {priority} --nsg-name {networkSecurityGroupName} --json'.formatArgs(singularPrefixes);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(singularPrefixes.name);
          output.sourcePortRange.toLowerCase().should.equal(singularPrefixes.sourcePortRange.toLowerCase());
          output.sourceAddressPrefix.toLowerCase().should.equal(singularPrefixes.sourceAddressPrefix.toLowerCase());
          output.destinationPortRange.toLowerCase().should.equal(singularPrefixes.destinationPortRange.toLowerCase());
          output.destinationAddressPrefix.toLowerCase().should.equal(singularPrefixes.destinationAddressPrefix.toLowerCase());
          output.description.toLowerCase().should.equal(singularPrefixes.description.toLowerCase());
          output.priority.should.equal(parseInt(singularPrefixes.priority, 10));

          cmd = 'network nsg rule set -g {group} -n {name} --source-port-range {sourcePortRangeNew} --source-address-prefix {sourceAddressPrefixNew} --destination-port-range {destinationPortRangeNew} --destination-address-prefix {destinationAddressPrefixNew} --nsg-name {networkSecurityGroupName} --json'.formatArgs(singularPrefixes);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(singularPrefixes.name);
            output.sourcePortRange.toLowerCase().should.equal(singularPrefixes.sourcePortRangeNew.toLowerCase());
            output.sourceAddressPrefix.toLowerCase().should.equal(singularPrefixes.sourceAddressPrefixNew.toLowerCase());
            output.destinationPortRange.toLowerCase().should.equal(singularPrefixes.destinationPortRangeNew.toLowerCase());
            output.destinationAddressPrefix.toLowerCase().should.equal(singularPrefixes.destinationAddressPrefixNew.toLowerCase());

            cmd = 'network nsg rule delete -g {group} -n {name} --nsg-name {networkSecurityGroupName} --quiet --json'.formatArgs(singularPrefixes);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
    });
  });
});
