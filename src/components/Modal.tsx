import {
  Modal,
  Pressable,
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {height, width} from '../utilities';
import {cross} from '../assets/images';
import {NavigationProp} from '@react-navigation/native';
interface UserModalProps {
  modalVisible: boolean;
  setModalVisible: Function;
  message: string;
  btnText: string;
}

const UserModal: React.FC<UserModalProps> = ({
  modalVisible,
  setModalVisible,
  message,
  btnText,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={modalVisible}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={globalStyle.modalCenteredView}>
        <View style={globalStyle.modalOverlay} />
        <View style={globalStyle.modalView}>
          <View
            //   source={modalBackground}
            style={[globalStyle.modalImageWrapper]}
            //   imageStyle={{ borderRadius: 20 }}
          >
            <View style={globalStyle.modalInner}>
              <Image
                source={cross}
                style={{height: width * 0.3, width: width * 0.3}}
              />
              <Text style={globalStyle.modalText}>{message}</Text>
            </View>
            <View style={globalStyle.btnView}>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}
                style={globalStyle.modalBtn}>
                {/* <LinearGradient
                  colors={['#55A9F5', '#55A9F5']}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1}}
                  style={globalStyle.gradient}> */}
                <View style={globalStyle.gradient}>
                  <Text style={globalStyle.modalBtnText}>{btnText}</Text>
                </View>
                {/* </LinearGradient> */}
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default UserModal;
const globalStyle = StyleSheet.create({
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width * 0.9,
  },
  modalImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 40,
    //   resizeMode: "cover",
    backgroundColor: '#fff',
  },
  modalInner: {
    //   paddingTop: 50,
    paddingHorizontal: 70,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 10,
  },
  modalText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  btnView: {
    //   paddingBottom: 50,
    paddingTop: 20,
  },
  modalBtn: {
    width: width * 0.4,
    height: width * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  gradient: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#55A9F5',
  },
  modalBtnText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#fff',
  },
});
