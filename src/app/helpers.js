const Response = require('./response/response');
global.response = function(res) {
    return Response.getInstance(res);
}