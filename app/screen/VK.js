import React from 'react';
import {TouchableOpacity, Modal, View, Button, Image, Text} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import style from './style';

const photoAva = require('../img/ava.png');
const photo1 = require('../img/1.png');
const photo2 = require('../img/2.png');
const photo3 = require('../img/3.png');
const photo4 = require('../img/4.png');
const photos = [
  {
    url: '',
    props: {
      source: photoAva,
    },
  },
  {
    url: '',
    props: {
      source: photo1,
    },
  },
  {
    url: '',
    props: {
      source: photo2,
    },
  },
  {
    url: '',
    props: {
      source: photo3,
    },
  },
  {
    url: '',
    props: {
      source: photo4,
    },
  },
];

export default class VK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  checkVisibleFalse = () => {
    this.setState({visible: false});
  };

  checkVisibleTrue = () => {
    this.setState({visible: true});
  };

  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <Modal visible={this.state.visible} transparent={true}>
          <View style={{flex: 1}}>
            <ImageViewer
              imageUrls={photos}
              enableSwipeDown={true}
              onSwipeDown={this.checkVisibleFalse}
            />
          </View>
        </Modal>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={photoAva} style={style.avatar} />
          </View>
          <View style={{flexDirection: 'column', marginLeft: 1, marginTop: 10}}>
            <Text style={style.name}> Yulia Guskova </Text>
            <Text style={style.statusText}> this is my status </Text>
            <Text style={style.statusId}> online</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', marginTop: 5}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              backgroundColor: '#808080',
            }}>
            <Button title="Редактировать" color="#808080" />
            <Icon name="pencil" size={30} color="blue" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginTop: 5,
              marginBottom: 5,
            }}>
            <Text style={style.mainText}>История</Text>
            <Text style={style.mainText}>Запись</Text>
            <Text style={style.mainText}>Фото</Text>
            <Text style={style.mainText}>Трансляция</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop: 10}}>
            <Icon name="home" size={20} color="blue" />
            <Text style={style.statusId}>Город : Нижний новгород</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={style.statusId}>
              Образование: ННГУ им. Лобачевского
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={style.mainText}>Укажите место работы</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={style.mainText}>Подробная информация</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', marginTop: 10}}>
          <Text style={style.mainText}>Фотографии 5</Text>
          <TouchableOpacity onPress={this.checkVisibleTrue}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image source={photoAva} style={style.photo} />
              <Image source={photo1} style={style.photo} />
              <Image source={photo2} style={style.photo} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image source={photo3} style={style.photo} />
              <Image source={photo4} style={style.photo} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
