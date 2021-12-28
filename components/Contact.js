import React, { Component } from 'react';

class Contact extends Component {
  static navigationOptions = {
    title: 'Contact'
  }
  render() {
    return (
      <ScrollView>
         <Card wrapperStyle={{margin: 20}}>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider />
            <Text style={{marginBottom: 10}}>
              1 Nucamp Way <br/>
              Seattle, WA 98001<br/>
              U.S.A.
            </Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@nucamp.co</Text>
          </Card>
      </ScrollView>
    )
  }
}

export default Contact;