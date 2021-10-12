import React from "react";
import Profile from './Profile';
import {
  getUserProfile, getUserStatus, updateStatus
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;

      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    // if (!this.props.isAuth) {
    //   return <Redirect to="/login" />;
    // }

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.id
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);