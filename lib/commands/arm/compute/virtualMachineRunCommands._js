/**
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

/*

Generated Command List:

azure vm-runcommand show 
--location $p0
--command-id $p1

azure vm-runcommand list 
--location $p0


*/

'use strict';

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;
function capitalize(str) {
  if (str && str.length >= 1) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  else {
    return str;
  }
}

function makeTuple(k, v, d) {
  return { key : k, value : v, depth : d };
}

function displayImpl(o, key, depth, arr) {
  if ((!!o) && (o.constructor === Object || o.constructor === Array)) {
    arr.push(makeTuple(key, '', depth));
    var len = 0;
    Object.keys(o).forEach(function(k1) {
      var v1 = o[k1];
      var p1 = o.constructor === Array ? '#' : '';
      var w = displayImpl(v1, p1 + k1, depth + 1, arr);
      if (w > len) {
        len = w;
      }
    });
    return len;
  }
  else {
    arr.push(makeTuple(key, o ? o.toString() : '', depth));
    return depth * 2 + (key ? key.toString().length : 0);
  }
}

function display(cli, o) {
  var arr = [];
  var width = displayImpl(o, '', 0, arr);
  for (var t in arr) {
    var prebuf = new Array(arr[t].depth * 2).join(' ');
    var key = arr[t].key ? arr[t].key : '';
    var postLen = width - (prebuf.length + key.length);
    var postbuf = new Array(postLen > 0 ? postLen : 0).join(' ');
    var str = prebuf + capitalize(key) + postbuf;
    if (arr[t].value) {
      str += ' : ' + arr[t].value;
    }
    cli.output.data(str);
  }
}
exports.init = function (cli) {



/*
  VirtualMachineRunCommands Get
  --location
  --command-id
*/
  var virtualMachineRunCommandsGet = cli.category('vm-runcommand')
  .description($('Commands to manage your virtual machine run commands.  '));
  virtualMachineRunCommandsGet.command('show [location] [command-id]')
  .description($('Gets specific run command for a subscription in a location.'))
  .usage('[options] <location> <command-id>')
  .option('--location <location>', $('location'))
  .option('--command-id <command-id>', $('command-id'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(location, commandId, options, _) {
    if (!location) {
      location = cli.interaction.promptIfNotGiven($('location : '), location, _);
    }

    cli.output.verbose('location = ' + location);
    if (!commandId) {
      commandId = cli.interaction.promptIfNotGiven($('command-id : '), commandId, _);
    }

    cli.output.verbose('commandId = ' + commandId);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineRunCommands.get(location, commandId, _);
    if (cli.output.format().json) {
      cli.output.json(result);
    }
    else {
      display(cli, result);
    }
  });
/*
  VirtualMachineRunCommands List
  --location
*/
  var virtualMachineRunCommandsList = cli.category('vm-runcommand')
  .description($('Commands to manage your virtual machine run commands.  '));
  virtualMachineRunCommandsList.command('list [location]')
  .description($('Lists all available run commands for a subscription in a location.'))
  .usage('[options] <location>')
  .option('--location <location>', $('location'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(location, options, _) {
    if (!location) {
      location = cli.interaction.promptIfNotGiven($('location : '), location, _);
    }

    cli.output.verbose('location = ' + location);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeManagementClient(subscription);
    var result = computeManagementClient.virtualMachineRunCommands.list(location, _);
    var nextPageLink = result.nextLink;
    while (nextPageLink) {
      var pageResult = computeManagementClient.virtualMachineRunCommands.listNext(nextPageLink, _);
      pageResult.forEach(function(item) {
        result.push(item);
      });
      nextPageLink = pageResult.nextLink;
    }

    if (result) {
      cli.output.json(result);
    }
  });


};
