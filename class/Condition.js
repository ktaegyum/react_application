import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  TextInput,
  ScrollView
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {StackNavigator} from 'react-navigation';
import styles from './Style';
import RegimenInfomation from './RegimenInfomation'
import SignUp from './SignUp';
import LogIn from  './Login'

export default class Condition extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      EULA: 0,
      Condition: 0
    }
  }
  static navigationOptions = {
    title: 'Condition'
  };
  setEula = (user_eula) => {
    this.setState({EULA: user_eula})
  }
  setCondition = (user_condition) => {
    this.setState({Condition: user_condition})
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>

        <ScrollView style={styles.container}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a augue a neque tristique rutrum vel egestas dolor. Aliquam sagittis fringilla tincidunt. Duis vel odio at nibh molestie gravida et a neque. Duis porttitor condimentum purus, quis rutrum purus volutpat quis. Donec non bibendum quam. Ut in nibh massa. Donec pellentesque, dui in tempor dictum, elit diam convallis lectus, placerat condimentum lacus nisl sit amet nisi. Donec tempor, erat non viverra auctor, nulla nibh volutpat dui, non lobortis ex nisi in mauris. Aliquam facilisis lorem a odio varius, ut scelerisque ex ultrices. Pellentesque sed nunc eget dolor cursus rhoncus. Maecenas in imperdiet elit. Maecenas eleifend turpis purus, sed consequat tellus varius rutrum. Aenean vitae sodales orci, id porta ex. Vivamus sodales luctus nibh. Maecenas at scelerisque diam. Praesent maximus, lorem vitae sagittis commodo, nunc lacus rutrum nibh, a porta tellus erat id tellus. Praesent malesuada eu ante ut porttitor. Curabitur fermentum at dolor vitae dapibus. Nunc vestibulum lectus neque, quis interdum ligula venenatis in. Curabitur dolor augue, tristique accumsan hendrerit ultricies, pellentesque at ligula. Aliquam venenatis lorem leo, at placerat enim viverra a. Ut malesuada elit vitae velit placerat commodo. Donec orci sem, molestie vel tempor vitae, feugiat vel risus. Proin nec urna sit amet elit vehicula vulputate ac vitae massa. Maecenas vitae mattis ligula. Nunc cursus euismod purus in finibus. Donec vel arcu quis lacus pellentesque ultrices non eget libero. Ut eleifend dui non elit porta, nec aliquam turpis maximus. Duis nec libero risus. Nullam sed neque at justo laoreet ultrices at a enim. Integer at metus hendrerit, congue dui rutrum, pretium orci. Vivamus vel tincidunt leo. Curabitur venenatis sollicitudin gravida. Curabitur tristique ex in leo tempus egestas. Sed tristique ipsum lorem, nec pretium arcu fermentum vel. Aenean iaculis auctor ante a dictum. Proin volutpat metus at mauris aliquet volutpat. Sed eu orci fringilla magna posuere commodo. Morbi vitae sapien varius, posuere arcu id, placerat leo. Integer tempus sapien eget elementum malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sed ullamcorper lacus, ut pulvinar augue. Donec nisi metus, vehicula id tortor sed, interdum luctus purus. In dapibus, libero vitae hendrerit eleifend, ipsum ligula eleifend est, vitae sodales nisi augue eget justo. Suspendisse in eros tortor. Integer nec felis eget turpis consectetur facilisis vel quis erat. Phasellus molestie felis eget placerat dapibus. Duis velit tortor, pharetra vel justo sed, eleifend consequat metus. Fusce nec erat massa. Suspendisse urna felis, tempus in quam vel, auctor fermentum sapien. Maecenas risus urna, ullamcorper in porttitor eget, ornare lacinia enim. Proin tempus odio vel purus eleifend, in lobortis lacus vehicula. In vitae tincidunt sapien, eu sagittis tortor. Sed pretium sodales libero ut cursus. Pellentesque ut arcu convallis, finibus urna sed, aliquet risus. Nulla leo nibh, finibus vel ligula ac, pretium pulvinar justo. Vestibulum lobortis nibh ligula, in fringilla leo tristique sit amet. Cras efficitur vel nibh eu venenatis. Praesent varius mattis mollis. Sed lacinia commodo felis vel pretium. Maecenas consequat risus erat, a blandit tortor malesuada ac. Ut consequat nibh ut dui luctus, quis consequat diam interdum. Aliquam faucibus tellus dignissim sem finibus, nec posuere massa gravida. Nam hendrerit viverra elit. In odio erat, gravida quis vestibulum quis, accumsan nec ante. Vivamus tempor, lacus sed egestas dignissim, ipsum diam consequat mi, sit amet tristique nibh nunc sed libero. Vivamus porta felis at ligula tempus, nec interdum ipsum tincidunt. Suspendisse non libero facilisis orci efficitur luctus id nec nulla. Sed ligula diam, condimentum nec ultrices eu, fermentum vel metus. Duis ac feugiat dui. Integer sed ipsum ut quam aliquet convallis. Donec suscipit felis vitae euismod vestibulum. Donec varius dignissim urna, vel varius lacus mattis tempus. Sed id ornare ante. Sed non consectetur orci. In sit amet diam eu elit tincidunt rhoncus vitae in est. Sed venenatis, libero eu pretium accumsan, erat leo luctus massa, eget euismod est ipsum eget leo. Aliquam tincidunt in ante ac fringilla. Integer justo nisi, dignissim porta ipsum at, sodales dictum est. Ut eget gravida nunc. Duis vel congue arcu, sed fermentum augue. Vestibulum euismod arcu orci, vitae condimentum dolor pellentesque eu. Vestibulum vulputate, elit et maximus aliquam, leo erat pretium diam, nec rutrum nisi leo vitae diam. Pellentesque lacus libero, tincidunt et purus ac, molestie porttitor arcu. Vivamus consectetur nisl eget velit ornare rutrum. Fusce sagittis sed dui id tempus. Praesent non lacus a est facilisis aliquam. Pellentesque eu varius diam, eget volutpat mauris. Etiam imperdiet sapien lorem, sit amet porttitor lectus sodales ac. Etiam ultrices mauris quis faucibus laoreet. Sed quis sapien ligula. Quisque efficitur erat in aliquam lobortis. Donec accumsan dui justo, nec consectetur purus consectetur id. Curabitur scelerisque ornare quam, at dignissim dui varius eu. Duis at cursus enim. Vivamus a mi ut tortor finibus tempus nec nec risus. In et quam sem. In at egestas sem, at sagittis mi. Etiam egestas non sapien id consectetur. Phasellus condimentum volutpat tincidunt. Etiam tempor, est ut rhoncus semper, purus ex euismod felis, vel ornare sapien leo eu elit. Morbi a lectus lorem. Phasellus faucibus dapibus erat sed luctus. Vestibulum in molestie libero. Morbi eleifend nunc quam, eu vulputate massa accumsan id. Nunc pulvinar consectetur arcu sed tempus. In eros neque, lacinia vel felis eu, ornare tincidunt ligula. Nunc nec egestas urna. Donec ut nisl magna. Donec facilisis ante nibh, ut efficitur eros ullamcorper in. Vivamus ullamcorper fringilla pulvinar. Donec in maximus neque. Donec eget posuere elit. Nullam id leo porttitor, faucibus nisi vel, mollis lorem. Suspendisse luctus felis vel maximus bibendum. Aenean ut urna et velit bibendum pretium. Aenean vel imperdiet libero. Vivamus quis feugiat nulla, tincidunt fermentum enim. Pellentesque et nibh faucibus ipsum condimentum lacinia. Cras quis ex vitae nibh posuere tincidunt. Integer eu sem tincidunt, rhoncus felis eu, eleifend purus. Cras dictum ultrices lacus. Suspendisse imperdiet ex vitae velit lobortis, sed eleifend arcu euismod. Sed ex mi, viverra id nisl at, tempor vehicula diam. In felis orci, malesuada in vehicula a, consectetur nec ligula. In hendrerit, tortor quis congue lobortis, purus dolor maximus mauris, sit amet euismod arcu dui id arcu. Sed nec bibendum augue, ut gravida lacus. Nunc blandit semper elit eu finibus. Phasellus consectetur velit a aliquam vulputate. Nam dapibus sed risus in tempor. Praesent mauris urna, auctor quis cursus vel, auctor in nibh. Sed nec felis sodales, venenatis nisl a, fringilla odio. In libero lorem, gravida ac gravida iaculis, suscipit at augue. Cras sed cursus neque. Fusce convallis sapien id libero lobortis, a luctus tellus consectetur.

          </Text>
        </ScrollView>
        <View style={{
          backgroundColor: '#FFFFFF'
        }}>
          <Button onPress={() => this.props.navigation.navigate('LogIn')} title="DONE" color="#841584"/>
        </View>
      </View>

    );
  }
}
