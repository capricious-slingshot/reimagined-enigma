import React, { Component } from 'react';
import Mission from './Mission';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: PARTNERS
    };
  }
  static navigationOptions = {
    title: 'About'
  }
  renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require('../assets/images/bootstrap-logo.png') }}
        />
      );
    };

  render() {
    return (
      <ScrollView>
        <Mission />
        <Card wrapperStyle={{ margin: 10 }}>
          <Card.Title>Community Partners</Card.Title>
          <Card.Divider />
          <FlatList
            data={this.state.partners}
            renderItem={renderPartner}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    )
  }
}

export default About;