import React from 'react';
import { connect } from 'react-redux';

import { getAuthUser } from '@selectors/authSelectors';

class RootScreen extends React.Component {
  bootstrap = () => {
    const { navigation } = this.props;

    navigation.navigate('App');
  };

  render() {
    return false;
  }
}

const mapStateToProps = state => ({
  user: getAuthUser(state),
});

export default connect(mapStateToProps)(RootScreen);
