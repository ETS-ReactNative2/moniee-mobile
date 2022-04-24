import React, { Component } from 'react';
import {
  View, Text, TextInput, Button
} from "react-native";

class OTPTextInput extends Component {
      constructor(props){
            super(props)
            this.state={
                  otp1: '',
                  otp2: '',
                  otp3: '',
                  otp4: ''
            }
      }
      componentDidMount=()=> {
            this.refs.otp1ref.focus()
      };

      render(){
            const {otp1, otp2, otp3, otp4} = this.state
            return (
                  <View style={{ flex: 0 }}>
                        <View style={{flex: 0, justifyContent: 'space-evenly', flexDirection: 'row'}}>
                              <TextInput
                                    ref={'otp1ref'}
                                    onChangeText={(otp1) => {
                                          this.setState({ otp1 : otp1 }) 
                                          if (otp1 != ''){
                                                this.refs.otp2ref.focus();}
                                    }}
                                    value={otp1}
                                    maxLength={1} 
                                    keyboardType="number-pad" 
                                    style={{
                                          backgroundColor: '#eaeaea', 
                                          alignItems: 'center', 
                                          fontWeight: '600', 
                                          padding: 20, 
                                          fontSize: 20, 
                                          height: 65, 
                                          width: '18%', 
                                          borderRadius: 10, 
                                          borderWidth: 0.5, 
                                          justifyContent: 'center', 
                                          alignItems: 'center', 
                                          alignContent: 'center', 
                                          textAlign: 'center', 
                                          borderColor: '#e4e2e2'
                                    }} 
                              />
                              <TextInput
                                    ref={'otp2ref'}
                                    onChangeText={(otp2) => {
                                          this.setState({ otp2 : otp2 }) 
                                          if (otp2 != ''){
                                                this.refs.otp3ref.focus();}
                                    }} 
                                    value={otp2}
                                    maxLength={1} 
                                    keyboardType="number-pad" 
                                    style={{
                                          backgroundColor: '#eaeaea', 
                                          alignItems: 'center', 
                                          fontWeight: '600', 
                                          padding: 20, 
                                          fontSize: 20, 
                                          height: 65, 
                                          width: '18%', 
                                          borderRadius: 10, 
                                          borderWidth: 0.5, 
                                          justifyContent: 'center', 
                                          alignItems: 'center', 
                                          alignContent: 'center', 
                                          textAlign: 'center', 
                                          borderColor: '#e4e2e2'
                                    }} 
                              />
                              <TextInput
                                    ref={'otp3ref'}
                                    onChangeText={(otp3) => {
                                          this.setState({ otp3 : otp3 }) 
                                          if (otp3 != ''){
                                                this.refs.otp4ref.focus();}
                                    }} 
                                    value={otp3}
                                    maxLength={1} 
                                    keyboardType="number-pad" 
                                    style={{
                                          backgroundColor: '#eaeaea', 
                                          alignItems: 'center', 
                                          fontWeight: '600', 
                                          padding: 20, 
                                          fontSize: 20, 
                                          height: 65, 
                                          width: '18%', 
                                          borderRadius: 10, 
                                          borderWidth: 0.5, 
                                          justifyContent: 'center', 
                                          alignItems: 'center', 
                                          alignContent: 'center', 
                                          textAlign: 'center', 
                                          borderColor: '#e4e2e2'
                                    }} 
                              />
                              <TextInput
                                    ref={'otp4ref'}
                                    onChangeText={(otp4) => {
                                          this.setState({ otp4 : otp4 }) 
                                          if (otp4 != ''){
                                                alert('verified');}
                                                // this.refs.otp5ref.focus();}
                                    }}
                                    value={otp4}
                                    maxLength={1} 
                                    keyboardType="number-pad" 
                                    style={{
                                          backgroundColor: '#eaeaea', 
                                          alignItems: 'center', 
                                          fontWeight: '600', 
                                          padding: 20, 
                                          fontSize: 20, 
                                          height: 65, 
                                          width: '18%', 
                                          borderRadius: 10, 
                                          borderWidth: 0.5, 
                                          justifyContent: 'center', 
                                          alignItems: 'center', 
                                          alignContent: 'center', 
                                          textAlign: 'center', 
                                          borderColor: '#e4e2e2'
                                    }} 
                              />
                              {/* <TextInput ref={'otp3ref'} onChangeText={(otp3) => this.setState({ otp3 : otp3 })} value={otp3} maxLength={1} keyboardType="number-pad" style={{backgroundColor: '#eaeaea', alignItems: 'center', fontWeight: '600', padding: 20, fontSize: 20, height: 60, width: '18%', borderRadius: 10, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center', borderColor: '#e4e2e2'}} />
                              <TextInput ref={'otp4ref'} onChangeText={(otp4) => this.setState({ otp4 : otp4 })} value={otp4} maxLength={1} keyboardType="number-pad" style={{backgroundColor: '#eaeaea', alignItems: 'center', fontWeight: '600', padding: 20, fontSize: 20, height: 60, width: '18%', borderRadius: 10, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center', borderColor: '#e4e2e2'}} /> */}
                        </View>
                  </View>
            );
      };
      
};

export default OTPTextInput;