import { View, Text, Image } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View >
      <Text style={{ textAlign: 'center', fontSize: 24, marginVertical: 20 }}>
        Bem-vindo ao nosso aplicativo!
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 20 }}>
        Explore as funcionalidades e divirta-se!
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10 }}>
        Navegue pelas abas para descobrir mais.
      </Text>
    </View>
  )
}

export default home