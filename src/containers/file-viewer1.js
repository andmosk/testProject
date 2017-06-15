import React from 'react';
import {connect} from 'react-redux'
import {getDirFromApi} from './../actions/actions'
import ViewFile from './../component/view-file'
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const fileViewer = (props) => {
    console.log(props.dir);
    const files = isEmpty(props.dir) ? [] : props.dir.children;
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Size</th>
            </tr>
            </thead>
            <tbody>
            {files.map((file, i) =>
                <ViewFile key={i} file={file}/>
            )}
            </tbody>
        </table>
    )
};

const mapStateToProps = (state) => {
    return {
        dir: state.activeDirFiles,
        activeDirPath: state.activeDirPath
    }
};

const mapDispatchToProps = (dispatch) =>
    ({
        getDir()  {
            dispatch(getDirFromApi());
        }

    });

export default connect(mapStateToProps, mapDispatchToProps)(fileViewer);