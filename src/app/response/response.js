class Response
{
    #response
    constructor(res) {
        this.#response = res;
    }
  success = (message, data = [] , statusCode = 200)=>{
      return this.#response.status(statusCode).json(
          {
              "status":statusCode,
              "message":message,
              "data":data
          }
      )
  }
  error = (error, statusCode = 500,data = [])=>{
      let response = {
          "status":statusCode,
          "message":error,
          "data":data
      }
      if(error?.message){
          response.message =error?.message
          response.status = error?.code?error.code:statusCode
          return this.#response.status(response.status).json(response);
      }
      return this.#response.status(response.status).json(response)
  }
  setRes = (res)=>{
        this.#response = res;
  }
}
let responseInstance = null;
Response.getInstance = function (res) {
    if (!responseInstance) {
        responseInstance = new Response(res);
    }else {
        responseInstance.setRes(res);
    }
    return responseInstance;
}

module.exports = Response;