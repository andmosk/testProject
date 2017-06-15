
import {handleActions} from 'redux-actions';
import c from './../const/const'
export default handleActions({
  [c.getDir]: (state, {payload: {files, path}}) => {
      console.log(files, path);
      return {
          ...state,
          activeDirFiles: files,
          activeDirPath: path
      }
  },
}, {activeDirFiles: {}, activeDirPath: ['']})
