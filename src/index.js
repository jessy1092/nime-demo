
'use strict';

module.exports = {
  textReducer(request, preState) {
    return preState;
  },

  response(request, state) {
    if (request['method'] === 'filterKeyDown') {

      let {charCode, seqNum} = request;

      let response = {return: false, success: true, seqNum};

      if ((charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) ||
        (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0))) {
        response['return'] = true;
      }
      return response;

    }

    if (request['method'] === 'onKeyDown') {
      let {charCode, seqNum} = request;
      let commitString = '';

      if ((charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0))) {
        commitString = String.fromCharCode(charCode).toUpperCase();
      }
      if ((charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0))) {
        commitString = String.fromCharCode(charCode).toLowerCase();
      }

      let response = {success: true, commitString, seqNum};

      return response;
    }

    return {success: true, seqNum: request['seqNum']};
  }
}
