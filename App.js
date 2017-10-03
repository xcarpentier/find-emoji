import React from 'react'
import Fuse from 'fuse.js'
import { StyleSheet,
  Text,
  View,
  FlatList,
  Clipboard,
  Platform,
  StatusBar,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

import Emoji from 'Emoji'
import emoji_data from './data/emoji.json'

const data = emoji_data.filter(item => item[Platform.OS] !== false)

export default class App extends React.Component {
  state = {
    data,
    text: ''
  }

  fuse = new Fuse(data, {
    shouldSort: true,
    threshold: 0.1,
    location: 0,
    distance: 80,
    findAllMatches: false,
    maxPatternLength: 3,
    minMatchCharLength: 1,
    keys: [{
      name: 'name',
      weight: 0.9
    }, {
      name: 'alt',
      weight: 0.1
    }]
  })

  handleFilterChange = (value) => {
    const filteredEmoji = value === '' ? data : this.fuse.search(value);

    this.setState({
      text: value,
      data: filteredEmoji,
    });
  }

  componentWillMount() {
    StatusBar.setHidden(true)
  }

  onPress = Clipboard.setString

  renderItem = ({ item }) => <Emoji code={item.code} onPress={this.onPress}/>

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <FlatList
          ref={list => this.list = list}
          keyExtractor={item=> item.code}
          data={this.state.data}
          renderItem={this.renderItem}
          numColumns={4}
        />
        <TextInput
          style={styles.filter}
          onChangeText={this.handleFilterChange}
          value={this.state.text}
          autoCapitalize="none"
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  filter: {
    height: 40,
    borderColor: '#CED0CE',
    borderWidth: 1,
  }
})
