import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Text, Picker} from 'react-native';
import Languages from './languages.json';
import {
  ProviderTypes,
  TranslatorConfiguration,
} from 'react-native-power-translator';
import Style from './style';

const access =
  'ya29.c.Ko8B0QfoTphpBoXkOFLq-dqqRPS1eq0NTKNTSjCt8HHfjp87KXk3PldhxE_xkYRhhCNtcanltrG_00V1MQzoLS1mBxauOuZahXOadOqyBpgODSOGBZp3Q1k6zeOKJG06z07vKVv9iuuVsKAiAL4rwQoGOtog_RgJj1sqPOgrLwbmsldLfBjKfHm74_SjdQvp4AQ';
export default class Translator extends Component {
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
    const target = this.stat.languageCode;
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
    return (
      <View style={Style.container}>
        <View style={Style.input}>
          <TextInput
            style={{flex: 1, height: 80}}
            placeholder="Enter Text"
            underlineColorAndroid="transparent"
            onChangeText={inputText => this.setState({inputText})}
            value={this.state.inputText}
          />
        </View>

        <Picker
          selectedValue={this.state.languageTo}
          onValueChange={lang =>
            this.setState({languageTo: lang, languageCode: lang})
          }>
          {Object.keys(Languages).map(key => (
            <Picker.Item label={Languages[key]} value={key} />
          ))}
        </Picker>

        <View style={Style.output}>
          {/* output text displays here.. */}
          <TextInput
            style={{flex: 1, height: 80}}
            underlineColorAndroid="transparent"
            value={this.state.outputText}
            disabled="true"
          />
        </View>
        <TouchableOpacity
          style={Style.submitButton}
          onPress={() => this.handleTranslate()}>
          <Text style={Style.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
