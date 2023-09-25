import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const navigation = useNavigation();

  const handleLogin = () => {
   
    if (username === 'user' && password === '1234') {
      // Successful login, you can navigate to another screen here
      alert('Login successful!');
      navigation.navigate('MainView');
    } else {
      // Failed login, show an error message
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../Images/snowe.png')} style={styles.backgroundImage}/>
      
      <Text style={styles.title}>Snowe</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
          <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
          >
              <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>


          <View style={styles.linkContainer}>
              {/* "아이디/비밀번호 찾기" 링크 */}
              <TouchableOpacity>
                  <Text style={styles.forgotId}>아이디 찾기</Text>
              </TouchableOpacity>
              <View style={{ width: 10 }} />
              <TouchableOpacity>
                  <Text style={styles.forgotPassword}>비밀번호 찾기</Text>
              </TouchableOpacity>

              <View style={{ width: 10 }} />
              {/* "회원가입" 링크 */}
              <TouchableOpacity>
                  <Text style={styles.sign}>회원가입</Text>
              </TouchableOpacity>
          </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50,
    },
    title: {
      fontSize: 35,
      marginTop: 100,
      marginBottom: 15,
      fontStyle: 'normal',
      color: 'black',
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'white',
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    
    forgotPassword: {
      marginTop: 15, // 첫 번째 링크의 위치
      marginBottom: 15, // 다른 값은 그대로 유지
      color: 'black',
      textDecorationLine: 'underline',
    },

    forgotId: {
        marginTop: 15, // 첫 번째 링크의 위치
        marginBottom: 15, // 다른 값은 그대로 유지
        color: 'black',
        textDecorationLine: 'underline',
      },
  
    sign: {
      marginTop: 15, // 두 번째 링크의 위치 (1칸 띄우기)
      marginBottom: 15, // 다른 값은 그대로 유지
      color: 'black',
      textDecorationLine: 'underline',
    },
    
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '150%',
      height: '100%', 
      resizeMode: 'cover',
      zIndex: -1,
    },
    linkContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    loginButton: {
        width: '100%',
        height: 40,
        backgroundColor: 'skyblue', // 배경색을 투명으로 설정
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      loginText: {
        color: 'black', // 텍스트 색상 변경
      },
  });
  

export default LoginScreen;
