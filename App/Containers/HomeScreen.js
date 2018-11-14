import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Right,
  Body,
} from 'native-base';
import AppHeader from '../Components/AppHeader';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content padder>
          <Text>This is content</Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
