//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';

var should = require('should');
var sinon = require('sinon');
var utils = require('../../../lib/util/utils');
var Interactor = require('../../../lib/util/interaction');
var CLITest = require('../../framework/arm-cli-test');
var templateUtils = require('../../../lib/commands/batch/batch.templateUtils');
var fileUtils = require('../../../lib/commands/batch/batch.fileUtils');

var path = require('path');
var createJobScheduleJsonFilePath = path.resolve(__dirname, '../../data/batchCreateJobScheduleForJobTests.json');
var createJsonFilePath = path.resolve(__dirname, '../../data/batchCreateJob.json');
var updateJsonFilePath = path.resolve(__dirname, '../../data/batchUpdateJob.json');

var requiredEnvironment = [
];

var testPrefix = 'cli-batch-ncj-tests';
var suite;

var batchAccount;
var batchAccountKey;
var batchAccountEndpoint;

// return array which value contain subString
function getValueFromJson(obj, val) {
  var objects = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getValueFromJson(obj[i], val));
    } else if (typeof obj[i] == 'string') {
      if (obj[i].indexOf(val) !== -1) {
        objects.push(i);
      }
    }
  }
  return objects;
};

describe('cli', function () {
  describe('batch ncj', function () {
    before(function (done) {
      done();
    });
    
    after(function (done) {
      done();
    });
    
    beforeEach(function (done) {
      done();
    });
    
    afterEach(function (done) {
      done();
    });

    it('should expand template with parameter file', function (_) {
      this.interaction = new Interactor(this);
      var templateFile = path.resolve(__dirname, '../../../lib/commands/batch/demoTemplates/ffmpeg/job.simple.json');
      var parameterFile = path.resolve(__dirname, '../../../lib/commands/batch/demoTemplates/ffmpeg/job.parameters.json');
      var full = templateUtils.expandTemplate(this, templateFile, parameterFile, _);
      should.exist(full);
      should.exist(full.job);
      full.job.properties.id.should.equal('ffmpeg_job_4');
      full.job.properties.poolInfo.poolId.should.equal('ubuntu_16_04');
      getValueFromJson(full, '[parameters(').should.be.empty;
    });
    
    it('should correct replace parametric sweep command', function (done) {
      templateUtils.replacementParameter("cmd {{{0}}}.mp3 {1}.mp3", [5, 10]).should.equal('cmd {5}.mp3 10.mp3');
      templateUtils.replacementParameter("cmd {{{0}}}.mp3 {{{1}}}.mp3", [5, 10]).should.equal('cmd {5}.mp3 {10}.mp3');
      templateUtils.replacementParameter("cmd {{0}}.mp3 {1}.mp3", [5, 10]).should.equal('cmd {0}.mp3 10.mp3');
      templateUtils.replacementParameter("cmd {0}.mp3 {1}.mp3", [5, 10]).should.equal('cmd 5.mp3 10.mp3');
      templateUtils.replacementParameter("cmd {0}{1}.mp3 {1}.mp3", [5, 10]).should.equal('cmd 510.mp3 10.mp3');
      templateUtils.replacementParameter("cmd {0}.mp3 {0}.mp3", [5, 10]).should.equal('cmd 5.mp3 5.mp3');
      templateUtils.replacementParameter("cmd {0:3}.mp3 {0}.mp3", [5, 10]).should.equal('cmd 005.mp3 5.mp3');
      templateUtils.replacementParameter("cmd {0:3}.mp3 {1:3}.mp3", [5, 1234]).should.equal('cmd 005.mp3 1234.mp3');
      templateUtils.replacementParameter("cmd {{}}.mp3", [5, 1234]).should.equal('cmd {}.mp3');
      templateUtils.replacementParameter(
        "gs -dQUIET -dSAFER -dBATCH -dNOPAUSE -dNOPROMPT -sDEVICE=pngalpha -sOutputFile={0}-%03d.png -r250 {0}.pdf && for f in *.png; do tesseract $f ${{f%.*}};done", 
        [5]).should.equal(
          'gs -dQUIET -dSAFER -dBATCH -dNOPAUSE -dNOPROMPT -sDEVICE=pngalpha -sOutputFile=5-%03d.png -r250 5.pdf && for f in *.png; do tesseract $f ${f%.*};done');
      done();
    });

    it('should raise error when replace invalid parametric sweep command', function (done) {
      (function(){ templateUtils.replacementParameter("cmd {0}.mp3 {2}.mp3", [5, 10]); }).should.throw();
      (function(){ templateUtils.replacementParameter("cmd {}.mp3 {2}.mp3", [5, 10]); }).should.throw();
      (function(){ templateUtils.replacementParameter("cmd {{0}}}.mp3 {1}.mp3", [5, 10]); }).should.throw();
      (function(){ templateUtils.replacementParameter("cmd {0:3}.mp3 {1}.mp3", [-5, 10]); }).should.throw();
      (function(){ templateUtils.replacementParameter("cmd {0:-3}.mp3 {1}.mp3", [5, 10]); }).should.throw();      
      done();
    });

    it('should correct parse parameter sets', function (done) {
      templateUtils.parseParameterSets([{start:1, end:2}]).should.eql([[1,2]]);
      templateUtils.parseParameterSets([{start:1, end:1}]).should.eql([[1]]);
      templateUtils.parseParameterSets([{start:1, end:2}, {start:-1, end:-3, step: -1}]).should.eql([[1,2], [-1, -2, -3]]);
      templateUtils.parseParameterSets([{start:1, end:2}, {start:-1, end:-3, step: -1}, {start: -5, end: 5, step: 3}]).should.eql([[1,2], [-1, -2, -3], [-5, -2, 1, 4]]);
      templateUtils.parseParameterSets([{start:1, end:2, step: 2000}, {start:-1, end:-3, step: -1}, {start: -5, end: 5, step: 3}]).should.eql([[1], [-1, -2, -3], [-5, -2, 1, 4]]);
      var result = templateUtils.parseParameterSets([{start:1, end:2000}]);
      result.length.should.equal(1);
      result[0].length.should.equal(2000);
      done();
    });

    it('should raise error when replace invalid parametric sweep command', function (done) {
      (function(){ templateUtils.parseParameterSets([]); }).should.throw();
      (function(){ templateUtils.parseParameterSets([{start:2, end:1}]); }).should.throw();
      (function(){ templateUtils.parseParameterSets([{start:1, end:3, step: -1}]); }).should.throw();
      (function(){ templateUtils.parseParameterSets([{start:1, end:3, step: 0}]); }).should.throw();
      (function(){ templateUtils.parseParameterSets([{end:3, step: 1}]); }).should.throw();
      (function(){ templateUtils.parseParameterSets([{start:3, step: 1}]); }).should.throw();
      (function(){ templateUtils.parseParameterSets([{start:1, end:2}, {}]); }).should.throw();
      done();
    });

    it('should correct parse taskCollection taskfactory', function(done) {
     
      var result = templateUtils.parseTaskFactory(
        { 
          "type": "taskCollection",
          "tasks": [
            {
              "id" : "mytask1",
              "commandLine": "ffmpeg -i sampleVideo1.mkv -vcodec copy -acodec copy output.mp4 -y",
              "resourceFiles": [
                {
                  "filePath": "sampleVideo1.mkv",
                  "blobSource": "[parameters('inputFileStorageContainerUrl')]sampleVideo1.mkv"
                }
              ],
              "outputFiles": [
                {
                  "filePath": "output.mp4",
                  "containerDestination": "[parameters('outputFileStorageUrl')]",
                  "format": "Raw",
                  "uploadMode": "TaskCompletion"
                }
              ]
            }
          ]
        }
      ).should.eql(
      [
        {
          "id" : "mytask1",
          "commandLine": "ffmpeg -i sampleVideo1.mkv -vcodec copy -acodec copy output.mp4 -y",
          "resourceFiles": [
            {
              "filePath": "sampleVideo1.mkv",
              "blobSource": "[parameters('inputFileStorageContainerUrl')]sampleVideo1.mkv"
            }
          ]
        }
      ]);

      done();
    });

    it('should correct parse parametric sweep taskfactory', function (done) {
      templateUtils.parseTaskFactory({ 
        "type": "parametricSweep",
        parameterSets: [{start:1, end:2}, {start: 3, end: 5}], repeatTask : { commandLine: "cmd {0}.mp3 {1}.mp3" } 
      }).should.eql(  
        [ 
          { commandLine: 'cmd 1.mp3 3.mp3', id: '0' },
          { commandLine: 'cmd 1.mp3 4.mp3', id: '1' },
          { commandLine: 'cmd 1.mp3 5.mp3', id: '2' },
          { commandLine: 'cmd 2.mp3 3.mp3', id: '3' },
          { commandLine: 'cmd 2.mp3 4.mp3', id: '4' },
          { commandLine: 'cmd 2.mp3 5.mp3', id: '5' } ]);

      done();
    });

    it('should correct parse parametric sweep', function (done) {
      templateUtils.parseParametricSweep({ parameterSets: [{start:1, end:2}, {start: 3, end: 5}], repeatTask : { commandLine: "cmd {0}.mp3 {1}.mp3" } }).should.eql(  
        [ 
          { commandLine: 'cmd 1.mp3 3.mp3', id: '0' },
          { commandLine: 'cmd 1.mp3 4.mp3', id: '1' },
          { commandLine: 'cmd 1.mp3 5.mp3', id: '2' },
          { commandLine: 'cmd 2.mp3 3.mp3', id: '3' },
          { commandLine: 'cmd 2.mp3 4.mp3', id: '4' },
          { commandLine: 'cmd 2.mp3 5.mp3', id: '5' } ]);

      templateUtils.parseParametricSweep(
        { 
          parameterSets: [
            {start:1, end:3}
          ], 
          repeatTask : { 
            commandLine: "cmd {0}.mp3", 
            resourceFiles : [
              { 
                filePath: "run.exe",
                blobSource: "http://account.blob/run.exe"
              },
              { 
                filePath: "{0}.mp3",
                blobSource: "http://account.blob/{0}.dat"
              }
            ] 
          } 
        }).should.eql(  
        [ { commandLine: 'cmd 1.mp3',              
            resourceFiles : [
              { 
                filePath: "run.exe",
                blobSource: "http://account.blob/run.exe"
              },
              { 
                filePath: "1.mp3",
                blobSource: "http://account.blob/1.dat"
              }
            ], id: '0' },
          { commandLine: 'cmd 2.mp3',
            resourceFiles : [
              { 
                filePath: "run.exe",
                blobSource: "http://account.blob/run.exe"
              },
              { 
                filePath: "2.mp3",
                blobSource: "http://account.blob/2.dat"
              }
            ], id: '1' },
          { commandLine: 'cmd 3.mp3',
            resourceFiles : [
              { 
                filePath: "run.exe",
                blobSource: "http://account.blob/run.exe"
              },
              { 
                filePath: "3.mp3",
                blobSource: "http://account.blob/3.dat"
              }
            ], id: '2' }
        ]);

      templateUtils.parseParametricSweep(
        { parameterSets: [
            {start:1, end:3}
          ], 
          repeatTask : { 
            commandLine: "cmd {0}.mp3"
          },
          mergeTask : {
            commandLine: "summary.exe"
          }
        }).should.eql(  
        [ { commandLine: 'cmd 1.mp3', id: '0' },
          { commandLine: 'cmd 2.mp3', id: '1' },
          { commandLine: 'cmd 3.mp3', id: '2' },
          { commandLine: 'summary.exe', id: 'merge',
              dependsOn: { taskIdRanges: { start: 0, end: 2 }} } ]);
          
      done();
    });

    it('should raise error when invalid parametric sweep task factory', function (done) {
      (function(){templateUtils.parseParametricSweep(
        { repeatTask : { 
            commandLine: "cmd {0}.mp3"
          }
        });
      }).should.throw();

      (function(){templateUtils.parseParametricSweep(
        {  parameterSets: [
            {start:1, end:3}
          ]
        });
      }).should.throw();

      // no commandline
      (function(){templateUtils.parseParametricSweep(
        { parameterSets: [
            {start:1, end:3}
          ], 
          repeatTask : { 
            resourceFiles : [
              { 
                filePath: "run.exe",
                blobSource: "http://account.blob/run.exe"
              },
              { 
                filePath: "{0}.mp3",
                blobSource: "http://account.blob/{0}.dat"
              }
            ] 
          } 
        });
      }).should.throw();

      templateUtils.parseParametricSweep(
        { parameterSets: [
            {start:1, end:3}
          ], 
          repeatTask : { 
            commandLine: "cmd {0}.mp3", 
            resourceFiles : [
              { 
                filePath: "run.exe",
                blobSource: "http://account.blob/run.exe"
              },
              { 
                filePath: "{0}.mp3",
                blobSource: "http://account.blob/{0}.dat"
              }
            ] 
          } 
        })
      done();
    });

    it('should correctly preserve resourceFiles', function (_) {
      var transformed;
      var failed;
      var request = {'resourceFiles': [
        {
          'blobSource': 'abc',
          'filePath': 'xyz'
        }
      ]}
      transformed = templateUtils.postProcessing(request, _)
      transformed.should.have.property('resourceFiles').with.lengthOf(1);
      transformed.resourceFiles[0].blobSource.should.equal('abc');
      transformed.resourceFiles[0].filePath.should.equal('xyz');

      request = {
        'commonResourceFiles': [
          {
            'blobSource': 'abc',
            'filePath': 'xyz'
          }
        ],
        'jobManagerTask': {
            'resourceFiles': [
              {
                'blobSource': 'foo',
                'filePath': 'bar'
              }
            ]
        }
      }
      transformed = templateUtils.postProcessing(request, _)
      transformed.should.have.property('commonResourceFiles').with.lengthOf(1);
      transformed.commonResourceFiles[0].blobSource.should.equal('abc');
      transformed.commonResourceFiles[0].filePath.should.equal('xyz');
      transformed.should.have.property('jobManagerTask');
      transformed.jobManagerTask.should.have.property('resourceFiles').with.length(1);
      transformed.jobManagerTask.resourceFiles[0].blobSource.should.equal('foo');
      transformed.jobManagerTask.resourceFiles[0].filePath.should.equal('bar');

      request = [
        {'resourceFiles': [
          {
            'blobSource': 'abc',
            'filePath': 'xyz'
          }
        ]},
        {'resourceFiles': [
          {
            'blobSource': 'abc',
            'filePath': 'xyz'
          }
        ]}
      ]
      transformed = templateUtils.postProcessing(request, _)
      transformed.length.should.equal(2);
      transformed[0].should.have.property('resourceFiles').with.lengthOf(1);
      transformed[0].resourceFiles[0].blobSource.should.equal('abc');
      transformed[0].resourceFiles[0].filePath.should.equal('xyz');

      request = {'resourceFiles': [{ 'blobSource': 'abc' }]};

      templateUtils.postProcessing(request, function (error, value) {
        should.exist(error);
        should.not.exist(value);
      });
    });

    it('should correctly generate container name from fileGroup', function (done) {
      fileUtils.getContainerName("data").should.equal('fgrp-data');
      fileUtils.getContainerName("Data").should.equal('fgrp-data');
      fileUtils.getContainerName("data__test--").should.equal('fgrp-data-test-6640b0b7acfec6867ab146c9cf185206b5f0bdcb');
      var name = fileUtils.getContainerName("data-test-really-long-name-with-no-special-characters-o8724578o2476");
      name.should.equal('fgrp-data-test-reall-cc5bdae242ec8cee81a2b85a35a0f538991472c2');
      (function() { fileUtils.getContainerName("data-#$%")}).should.throw();
      done();
    });

    it('should correctly resolve file paths', function (done) {
      fileUtils.resolveFilePaths("./test/data/batchFileTests", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('./test/data/batchFileTests');
        resolvedPaths.files.length.should.equal(3);
      });
      fileUtils.resolveFilePaths(".\\test\\data\\batchFileTests", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('.\\test\\data\\batchFileTests');
        resolvedPaths.files.length.should.equal(3);
      });
      fileUtils.resolveFilePaths("./test/data/batchFileTests/", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('./test/data/batchFileTests');
        resolvedPaths.files.length.should.equal(3);
      });
      fileUtils.resolveFilePaths(".\\test\\data\\batchFileTests\\", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('.\\test\\data\\batchFileTests');
        resolvedPaths.files.length.should.equal(3);
      });
      fileUtils.resolveFilePaths("./test/data/batchFileTests/*", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('./test/data/batchFileTests');
        resolvedPaths.files.length.should.equal(3);
      });
      fileUtils.resolveFilePaths(".\\test\\data\\batchFileTests\\*", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('.\\test\\data\\batchFileTests');
        resolvedPaths.files.length.should.equal(3);
      });
      fileUtils.resolveFilePaths("./test/data/batchFileTests/foo.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('./test/data/batchFileTests');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths(".\\test\\data\\batchFileTests\\foo.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('.\\test\\data\\batchFileTests');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths("./test/data/batchFileTests/*.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('./test/data/batchFileTests');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths(".\\test\\data\\batchFileTests\\*.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('.\\test\\data\\batchFileTests');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths("./test/data/batchFileTests/f*.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('./test/data/batchFileTests');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths(".\\test\\data\\batchFileTests\\f*.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('.\\test\\data\\batchFileTests');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths("./test/data/**/sample_data/test.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('./test/data');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths(".\\test\\data\\**\\sample_data\\test.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('.\\test\\data');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths("./test/data/**/sample_data/test*.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('./test/data');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths(".\\test\\data\\**\\sample_data\\test*.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('.\\test\\data');
        resolvedPaths.files.length.should.equal(1);
      });
      fileUtils.resolveFilePaths("./test/data/batchFileTests/**/*.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('./test/data/batchFileTests');
        resolvedPaths.files.length.should.equal(2);
      });
      fileUtils.resolveFilePaths(".\\test\\data\\batchFileTests\\**\\*.txt", function(error, resolvedPaths) {
        should.not.exist(error);
        resolvedPaths.localPath.should.equal('.\\test\\data\\batchFileTests');
        resolvedPaths.files.length.should.equal(2);
      });
      done();
    });

    it('should correctly transform resourceFiles from fileGroup', function (_) {
      sinon.stub(fileUtils, 'generateSasToken', function(blob, container, client) {
        return "https://blob." + container + "/" + blob.name;
      });

      var container = 'proj-data';
      var client = {};
      var resource = {
        'source': { 'project': 'data' }
      };
      var blobs = [
        { 'name': 'data1.txt'},
        { 'name': 'data2.txt'}
      ];
      var resources = fileUtils.convertBlobsToResourceFiles(blobs, resource, container, client, _);
      should.exist(resources);
      resources.length.should.equal(2);
      resources[0].blobSource.should.equal("https://blob.proj-data/data1.txt");
      resources[0].filePath.should.equal("data1.txt");
      resources[1].blobSource.should.equal("https://blob.proj-data/data2.txt");
      resources[1].filePath.should.equal("data2.txt");

      resource = {
        'source': { 'project': 'data', 'path': 'data1.txt'},
        'filePath': 'localFile'
      };
      blobs = [
        { 'name': 'data1.txt'}
      ];
      resources = fileUtils.convertBlobsToResourceFiles(blobs, resource, container, client, _);
      should.exist(resources);
      resources.length.should.equal(1);
      resources[0].blobSource.should.equal("https://blob.proj-data/data1.txt");
      resources[0].filePath.should.equal("localFile");

      resource = {
        'source': { 'project': 'data', 'path': 'data1'},
        'filePath': 'localFile'
      };
      blobs = [
        { 'name': 'data1.txt'}
      ];
      resources = fileUtils.convertBlobsToResourceFiles(blobs, resource, container, client, _);
      should.exist(resources);
      resources.length.should.equal(1);
      resources[0].blobSource.should.equal("https://blob.proj-data/data1.txt");
      resources[0].filePath.should.equal("localFile/data1.txt");

      resource = {
        'source': { 'project': 'data', 'path': 'subdir/data'},
        'filePath': 'localFile'
      };
      blobs = [
        { 'name': 'subdir/data1.txt'},
        { 'name': 'subdir/data2.txt'}
      ];
      resources = fileUtils.convertBlobsToResourceFiles(blobs, resource, container, client, _);
      should.exist(resources);
      resources.length.should.equal(2);
      resources[0].blobSource.should.equal("https://blob.proj-data/subdir/data1.txt");
      resources[0].filePath.should.equal("localFile/subdir/data1.txt");
      resources[1].blobSource.should.equal("https://blob.proj-data/subdir/data2.txt");
      resources[1].filePath.should.equal("localFile/subdir/data2.txt");

      resource = {
        'source': { 'project': 'data', 'path': 'subdir/data'},
        'filePath': 'localFile/'
      };
      blobs = [
        { 'name': 'subdir/data1.txt'}
      ];
      resources = fileUtils.convertBlobsToResourceFiles(blobs, resource, container, client, _);
      should.exist(resources);
      resources.length.should.equal(1);
      resources[0].blobSource.should.equal("https://blob.proj-data/subdir/data1.txt");
      resources[0].filePath.should.equal("localFile/subdir/data1.txt");

      resource = {
        'source': { 'project': 'data', 'path': 'subdir/data'},
      };
      blobs = [
        { 'name': 'subdir/data1.txt'},
        { 'name': 'subdir/more/data2.txt'}
      ];
      resources = fileUtils.convertBlobsToResourceFiles(blobs, resource, container, client, _);
      should.exist(resources);
      resources.length.should.equal(2);
      resources[0].blobSource.should.equal("https://blob.proj-data/subdir/data1.txt");
      resources[0].filePath.should.equal("subdir/data1.txt");
      resources[1].blobSource.should.equal("https://blob.proj-data/subdir/more/data2.txt");
      resources[1].filePath.should.equal("subdir/more/data2.txt");

    });

    it('should validate the parameter value', function (done) {

      var parameterContent = {
        'a': {
          "type": "int",
          "maxValue": 5,
          "minValue": 3
        },
        'b': {
          "type": "string",
          "maxLength": 5,
          "minLength": 3
        },
        'c': {
          "type": "string",
          "allowedValues": [
              "STANDARD_A1",
              "STANDARD_A2",
              "STANDARD_A3",
              "STANDARD_A4",
              "STANDARD_D1",
              "STANDARD_D2",
              "STANDARD_D3",
              "STANDARD_D4"
          ]
        },
        'd': {
          "type": "bool"
        }
      };
      templateUtils.validateParameter(undefined, 'a', parameterContent['a'], {'a': 3}).should.equal(true);
      templateUtils.validateParameter(undefined, 'a', parameterContent['a'], {'a': 5}).should.equal(true);
      templateUtils.validateParameter(undefined, 'a', parameterContent['a'], {'a': 1}).should.equal(false);
      templateUtils.validateParameter(undefined, 'a', parameterContent['a'], {'a': 10}).should.equal(false);
      var input = {'a': '3'};
      templateUtils.validateParameter(undefined, 'a', parameterContent['a'], input).should.equal(true);
      input.a.should.equal(3);
      templateUtils.validateParameter(undefined, 'a', parameterContent['a'], {'a': '3.1'}).should.equal(false);
      templateUtils.validateParameter(undefined, 'a', parameterContent['a'], {'a': '1'}).should.equal(false);
      templateUtils.validateParameter(undefined, 'b', parameterContent['b'], {'b': 'abcd'}).should.equal(true);
      templateUtils.validateParameter(undefined, 'b', parameterContent['b'], {'b': 'a'}).should.equal(false);
      templateUtils.validateParameter(undefined, 'b', parameterContent['b'], {'b': 'abcdeffg'}).should.equal(false);
      templateUtils.validateParameter(undefined, 'b', parameterContent['b'], {'b': 1}).should.equal(false);
      input = {'b': 100};
      templateUtils.validateParameter(undefined, 'b', parameterContent['b'], input).should.equal(true);
      input.b.should.equal('100');
      templateUtils.validateParameter(undefined, 'c', parameterContent['c'], {'c': 'STANDARD_A1'}).should.equal(true);
      templateUtils.validateParameter(undefined, 'c', parameterContent['c'], {'c': 'STANDARD_C1'}).should.equal(false);
      templateUtils.validateParameter(undefined, 'c', parameterContent['c'], {'c': 'standard_a1'}).should.equal(false);
      input = {'d': true};
      templateUtils.validateParameter(undefined, 'd', parameterContent['d'], input).should.equal(true);
      input.d.should.equal(true);
      input = {'d': false};
      templateUtils.validateParameter(undefined, 'd', parameterContent['d'], input).should.equal(true);
      input.d.should.equal(false);
      input = {'d': 'false'};
      templateUtils.validateParameter(undefined, 'd', parameterContent['d'], input).should.equal(true);
      input.d.should.equal(false);
      input = {'d': 'true'};
      templateUtils.validateParameter(undefined, 'd', parameterContent['d'], input).should.equal(true);
      input.d.should.equal(true);
      templateUtils.validateParameter(undefined, 'd', parameterContent['d'], {'d': 'true1'}).should.equal(false);
      templateUtils.validateParameter(undefined, 'd', parameterContent['d'], {'d': 3}).should.equal(false);
      done();
    });

    it('should preserve clientExtensions when parsing a task collection', function (done) {
      templateUtils.parseSimpleTaskFactory(
        {
          tasks: [
            {
              id: "task01",
              commandLine: "cmd echo hi",
              clientExtensions: {
                dockerOptions: {
                  image: "ncj/caffe:cpu"
                }
              }
            }
          ]
        }
      ).should.eql(
        [
          { commandLine: 'cmd echo hi', id: 'task01', clientExtensions: { dockerOptions: { image: 'ncj/caffe:cpu' } } }
        ]
      );
      done();
    });

    it('should handle clientExtensions when parsing a parametric sweep', function (done) {
      templateUtils.parseParametricSweep(
        {
          parameterSets: [
            { start: 1, end: 3 }
          ], 
          repeatTask : {
            commandLine: "cmd {0}.mp3",
            clientExtensions: {
              dockerOptions: {
                image: "ncj/caffe:cpu{0}",
                dataVolumes: [
                  {
                    hostPath: "/tmp{0}",
                    containerPath: "/hosttmp{0}"
                  }
                ],
                sharedDataVolumes: [
                  {
                    name: "share{0}",
                    volumeType: "azurefile",
                    containerPath: "/abc{0}"
                  }
                ]
              }
            }
          },
          mergeTask : {
            commandLine: "summary.exe",
            clientExtensions: {
              dockerOptions: {
                image: "ncj/merge"
              }
            }
          }
        }).should.eql(  
        [{
            commandLine: 'cmd 1.mp3', 
            id: '0', 
            clientExtensions: {
              dockerOptions: {
                image: 'ncj/caffe:cpu1',
                dataVolumes: [
                  {
                    hostPath: "/tmp1",
                    containerPath: "/hosttmp1"
                  }
                ],
                sharedDataVolumes: [
                  {
                    name: "share1",
                    volumeType: "azurefile",
                    containerPath: "/abc1"
                  }
                ]
              }
            }
          },
          {
            commandLine: 'cmd 2.mp3',
            id: '1',
            clientExtensions: {
              dockerOptions: {
                image: 'ncj/caffe:cpu2',
                dataVolumes: [
                  {
                    hostPath: "/tmp2",
                    containerPath: "/hosttmp2"
                  }
                ],
                sharedDataVolumes: [
                  {
                    name: "share2",
                    volumeType: "azurefile",
                    containerPath: "/abc2"
                  }
                ]
              }
            }
          },
          {
            commandLine: 'cmd 3.mp3', 
            id: '2', 
            clientExtensions: {
              dockerOptions: {
                image: 'ncj/caffe:cpu3',
                dataVolumes: [
                  {
                    hostPath: "/tmp3",
                    containerPath: "/hosttmp3"
                  }
                ],
                sharedDataVolumes: [
                  {
                    name: "share3",
                    volumeType: "azurefile",
                    containerPath: "/abc3"
                  }
                ]
              }
            }
          },
          {
            commandLine: 'summary.exe', id: 'merge',
            dependsOn: { taskIdRanges: { start: 0, end: 2 } },
            clientExtensions: { dockerOptions: { image: 'ncj/merge' } }
          }]);
      done();
    });
  });
});