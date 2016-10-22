
'use strict';

module.exports = {
  textReducer(request, preState) {
    return preState;
  },

  response(request, state) {
    if (request['method'] === 'filterKeyDown') {

      let {charCode, seqNum} = request;
      let char = String.fromCharCode(charCode);

      let response = {return: false, success: true, seqNum};

      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        response['return'] = true;
      }
      return response;
    }

    if (request['method'] === 'onKeyDown') {

      let {charCode, seqNum} = request;
      let char = String.fromCharCode(charCode);
      let commitString = '';

      if (char >= 'a' && char <= 'z') {
        commitString = char.toUpperCase();
      }
      if (char >= 'A' && char <= 'Z') {
        commitString = char.toLowerCase();
      }
      return {success: true, commitString, seqNum};
    }

    return {success: true, seqNum: request['seqNum']};
  }
}
