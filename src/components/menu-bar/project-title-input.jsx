import classNames from 'classnames';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import React from 'react';

import BufferedInputHOC from '../forms/buffered-input-hoc.jsx';
import Input from '../forms/input.jsx';
const BufferedInput = BufferedInputHOC(Input);

import {setProjectTitle} from '../../reducers/project-title';

import styles from './project-title-input.css';

class ProjectTitleInput extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleUpdateProjectTitle'
        ]);
    }
    // call onUpdateProjectTitle if it is defined (only defined when gui
    // is used within scratch-www)
    handleUpdateProjectTitle (newTitle) {
        this.props.onSetProjectTitle(newTitle);
        if (this.props.onUpdateProjectTitle) {
            this.props.onUpdateProjectTitle(newTitle);
        }
    }
    render () {
        return (
            <BufferedInput
                className={classNames(styles.titleField)}
                placeholder=""
                tabIndex="0"
                type="text"
                value={this.props.projectTitle}
                onSubmit={this.handleUpdateProjectTitle}
            />
        );
    }
}

ProjectTitleInput.propTypes = {
    onSetProjectTitle: PropTypes.func,
    onUpdateProjectTitle: PropTypes.func,
    projectTitle: PropTypes.string
};

const mapStateToProps = state => ({
    projectTitle: state.scratchGui.projectTitle
});

const mapDispatchToProps = dispatch => ({
    onSetProjectTitle: title => dispatch(setProjectTitle(title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectTitleInput);
