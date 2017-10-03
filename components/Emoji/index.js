/**
 * @providesModule Emoji
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity } from 'react-native'
import NodeEmoji from 'node-emoji'

import styles from './styles'

class Emoji extends React.PureComponent {

  static propTypes = {
    code: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  }

  render() {
    const { onPress, code } = this.props
    const emoji = NodeEmoji.get(code)
    return (
      <TouchableOpacity onPress={() => onPress(emoji)}>
        <View style={styles.container}>
          <Text style={styles.font}>
            {emoji}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Emoji