import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {
  ProviderTypes,
  TranslatorConfiguration,
} from 'react-native-power-translator';
import Style from './style';

const access =
  'ya29.c.Ko8B0QfoTphpBoXkOFLq-dqqRPS1eq0NTKNTSjCt8HHfjp87KXk3PldhxE_xkYRhhCNtcanltrG_00V1MQzoLS1mBxauOuZahXOadOqyBpgODSOGBZp3Q1k6zeOKJG06z07vKVv9iuuVsKAiAL4rwQoGOtog_RgJj1sqPOgrLwbmsldLfBjKfHm74_SjdQvp4AQ';
export default class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageFrom: '',
      languageTo: '',
      languageCode: 'en',
      inputText: '',
      outputText: '',
      submit: false,
    };
  }

  handleTranslate() {
    const source = 'ru';
    const target = 'en';
    const q = this.state.inputText;
    const query = `format=text&source=${source}&target=${target}&q=${q}`;
    fetch('https://translation.googleapis.com/language/translate/v2?' + query, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(a => a.json())
      .then(a => {
        this.setState({outputText: a.data.translations[0].translatedText});
      });
  }

  render() {
    TranslatorConfiguration.setConfig(
      ProviderTypes.Google,
      '@google-cloud/translate',
      this.state.languageCode,
    );
    console.log(this.props);
    return (
      <View style={Style.container}>
        <View
          style={{
            backgroundColor: 'powderblue',
            padding: 10,
            marginBottom: 20,
            borderRadius: 15,
          }}>
          <TextInput
            style={Style.input}
            placeholder="Enter Text"
            underlineColorAndroid="transparent"
            onChangeText={inputText => this.setState({inputText})}
            value={this.state.inputText}
          />
        </View>

        <View style={{backgroundColor: 'yellow', padding: 10}}>
          <TouchableOpacity
            style={Style.submitButton}
            onPress={() => this.handleTranslate()}>
            <Text style={Style.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: 'skyblue', padding: 10, marginTop: 20,borderRadius: 15,}}>
          <TextInput
            style={Style.output}
            placeholder="Translate text"
            underlineColorAndroid="transparent"
            value={this.state.outputText}
          />
        </View>
        <View
          style={{
            backgroundColor: 'green',
            padding: 30,
            marginTop: 20,
            borderRadius: 45,
          }}>
          <TouchableOpacity
            onPress={() => {
              console.log(this.props);
              this.props.navigation.navigate('VK');
            }}>
            <Text>Go to VK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
