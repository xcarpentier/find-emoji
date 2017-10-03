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
    name: PropTypes.string.isRequired,
    copied: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  }

  render() {
    const { onPress, code, copied, name } = this.props
    const emoji = NodeEmoji.get(code)
    return (
      <TouchableOpacity onPress={() => onPress({code: emoji, name })}>
        <View style={styles.container}>
          <Text style={styles.font}>
            {emoji}
          </Text>
          {!copied && __DEV__ &&
            <Text style={styles.copied}>
              {name}
            </Text>
          }
          {copied &&
            <Text style={styles.copied}>
              {"copied"}
            </Text>
          }
        </View>
      </TouchableOpacity>
    )
  }
}

export default Emoji