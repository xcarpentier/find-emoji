import React from 'react'
import Fuse from 'fuse.js'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Clipboard,
  Platform,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native'

import Emoji from 'Emoji'
import emoji_data from './data/emoji.json'

const data = emoji_data.filter(item => item[Platform.OS] !== false)

export default class App extends React.Component {
  state = {
    data,
    text: '',
    name: undefined,
  }

  fuse = new Fuse(data, {
    threshold: 0.1,
    shouldSort: true,
    location: 0,
    distance: 100,
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

  onPress = ({ code, name }) => {
    Clipboard.setString(code)
    this.setState({ name })
    setTimeout(() => this.setState({ name: undefined }), 3000)
  }

  renderItem = ({ item }) =>
    <Emoji
      code={item.code}
      name={item.name}
      onPress={this.onPress}
      copied={item.name === this.state.name}
    />

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={(Platform.OS === 'ios' || (Platform.OS === 'android' && Platform.Version < 21))? "padding" : null}
        keyboardVerticalOffset={(Platform.OS === 'android' && Platform.Version < 21) ? -200 : 0}
      >
        <FlatList
          ref={list => this.list = list}
          keyExtractor={item=> item.name}
          data={this.state.data}
          extraData={this.state}
          renderItem={this.renderItem}
          numColumns={4}
          keyboardShouldPersistTaps="never"
          keyboardDismissMode="on-drag"
        />
        <TextInput
          style={styles.filter}
          onChangeText={this.handleFilterChange}
          value={this.state.text}
          autoCapitalize="none"
          placeholder="filter..."
          autoCorrect={false}
          clearTextOnFocus
          keyboardAppearance="light"
          underlineColorAndroid={'transparent'}
        />
      </KeyboardAvoidingView>
    )
  }
}
const window = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center' ,
    justifyContent: 'space-around',
  },
  filter: {
    height: 40,
    borderColor: '#CED0CE',
    borderWidth: 1,
    textAlign: 'center',
    width: window.width,
  }
})
