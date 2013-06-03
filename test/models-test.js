var assert = require('assert');
var async = require('async');

describe('User', function() {
    describe('#createUser()', function() {
        it('should create a user with proper fields', function(done) {
            // require Associated model files
            var models = require(__dirname + "/../lib/models/");
            models.init(function() {
                // steps:
                // ------
                // create instances of the objects
                // assign association
                // assert() some expectations about the associations
                // finish by calling parallelCallback
                // done() to end the test
                
                var A_User = models.User;
				//TODO:
				done();
/*
                var testMeshHasRelationshipsWithMeshVertex = function(parallelCallback) {
                    A_Mesh.create({  }).success(function(mesh) {
                        A_MeshVertex.create({  }).success(function(meshVertex) {
                            mesh.hasMeshVertex(meshVertex).success(function(result1) {
                                console.log("result1:" + result1);
                                assert(result1 == false);
                                mesh.addMeshVertex(meshVertex).success(function() {
                                    mesh.hasMeshVertex(meshVertex).success(function(result2) {
                                        console.log("result2:" + result2);
                                        assert(result2 == true);

                                        parallelCallback(null, result1+","+result2);
                                    });
                                });
                            });
                        });
                    });
                };
                */
                
                //Run tests and finish when all are done.
				//This is here for future use.
                //async.parallel({
                //    one: testMeshHasRelationshipsWithMeshVertex
                //},
                //function(err, results) {
                //    done();
                //});
                
            });
        });
    });
});