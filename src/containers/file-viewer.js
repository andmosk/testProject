import React from 'react';
import {connect} from 'react-redux'
import {getDirFromApi} from './../actions/actions'


const fileViewer = (props) => {
    props.getDir();
    return (<div ></div>)
};


const mapDispatchToProps = (dispatch) =>
    ({
        getDir()  {
            dispatch(getDirFromApi(['']));
        }

    });

export default connect(null, mapDispatchToProps)(fileViewer);