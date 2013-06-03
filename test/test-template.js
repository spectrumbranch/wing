//TODO: Rename to satisfy pattern theobject-test.js
/*
var assert = require('assert');
 
describe('TheObject', function() {
	describe('#aFunction()', function() {
		it('should have some demonstrable charactistics', function(done) {
			//assert stuff and done() when done
		});
	});
});
*/


/*
var assert = require('assert');
var async = require('async');

describe('Mesh', function() {
    describe('{associations}', function() {
        it('should belong to a Tile, and have a one-to-many relationship with both MeshVertex and MeshVertexIndex.', function(done) {
            // require Associated model files
            var models = require(__dirname + "/../app/models/");
            models.init(function() {
                // steps:
                // ------
                // create instances of the objects
                // assign association
                // assert() some expectations about the associations
                // finish by calling parallelCallback
                // done() to end the test
                
                var A_Mesh = models.Mesh;
                var A_MeshVertex = models.MeshVertex;

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
                
                var B_Mesh = models.Mesh;
                var B_MeshVertexIndex = models.MeshVertexIndex;
                
                var testMeshHasRelationshipsWithMeshVertexIndex = function(parallelCallback) {
                    B_Mesh.create({  }).success(function(mesh) {
                        B_MeshVertexIndex.create({  }).success(function(meshVertexIndex) {
                            mesh.hasMeshVertexIndex(meshVertexIndex).success(function(result1) {
                                console.log("result1:" + result1);
                                assert(result1 == false);
                                mesh.addMeshVertexIndex(meshVertexIndex).success(function() {
                                    mesh.hasMeshVertexIndex(meshVertexIndex).success(function(result2) {
                                        console.log("result2:" + result2);
                                        assert(result2 == true);

                                        parallelCallback(null, result1+","+result2);
                                    });
                                });
                            });
                        });
                    });
                };
                
                //Run tests and finish when all are done.
                async.parallel({
                    one: testMeshHasRelationshipsWithMeshVertex,
                    two: testMeshHasRelationshipsWithMeshVertexIndex
                },
                function(err, results) {
                    done();
                });
                
            });
        });
    });
});
*/