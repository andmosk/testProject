/**
 * Created by andriy.moskaliuk on 15.06.2017.
 */
import c from './../const/const'
import {createAction} from 'redux-actions'
import {v4} from 'uuid'

const getDir = createAction(
    c.getDir,
    (files, path) => ({files, path})
);

export const getDirFromApi = path => dispatch => {
    console.log(path);
    const pathStr = path ? path.join('/') : '';
    const url = `api/tree/${pathStr}`;
    fetch(url)
        .then(response => response.json())
        .then(files => dispatch(getDir(files, path)));
};

