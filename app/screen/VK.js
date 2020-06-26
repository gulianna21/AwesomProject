import React, {Component} from 'react';
import {StyleSheet, View, Button, Image, Text} from 'react-native';
import Style from './style';

const photoAva = [require('/img/ava.png')];
const photo1 = [require('./img/1.png')];
const photo2 = [require('./img/2.png')];
const photo3 = [require('./img/3.png')];
const photo4 = [require('./img/4.png')];
const photos = [photoAva, photo1, photo2, photo3, photo4];

photos.map(item => this.renderItem(item));

export default class VK extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Image
            source={photoAva}
            resizeMode={'contain'}
            style={Style.avatar}
          />
          <View style={{flexDirection: 'column', marginLeft: 1}}>
            <Text style={Style.name}> Yulia Guskova </Text>
            <Text style={Style.statusText}> this is my status </Text>
            <Text style={Style.statusId}>online</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', marginTop: 5}}>
          <Button title="Редактировать" color="#808080" />

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginTop: 5,
              marginBottom: 5,
            }}>
            <Text style={Style.mainText}>История</Text>
            <Text style={Style.mainText}>Запись</Text>
            <Text style={Style.mainText}>Фото</Text>
            <Text style={Style.mainText}>Трансляция</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={Style.statusId}>Город : Нижний новгород</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={Style.statusId}>
              Образование: ННГУ им. Лобачевского
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={Style.mainText}>Укажите место работы</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={Style.mainText}>Подробная информация</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', marginTop: 10}}>
          <Text style={Style.mainText}>Фотографии 5</Text>
          <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 20}}>
            <Image
              source={{photoAva}}
              resizeMode={'contain'}
              style={Style.photo}
            />
            <Image source={photo1} resizeMode={'contain'} style={Style.photo} />
            <Image source={photo2} resizeMode={'contain'} style={Style.photo} />
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={photo3} resizeMode={'contain'} style={Style.photo} />
            <Image source={photo4} resizeMode={'contain'} style={Style.photo} />
          </View>
        </View>
      </View>
    );
  }
}
