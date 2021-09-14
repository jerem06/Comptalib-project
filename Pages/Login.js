import React, {Component} from 'react';
import { Image, ImageBackground, Text, TextInput, View, StyleSheet, Platform, Button, TouchableOpacity} from 'react-native';
import { bindActionCreators } from 'redux';
import * as changeid from '../Redux/actions/getId';
import { connect } from 'react-redux';






class Login extends Component {

  constructor () {
    super();
    this.state = {
      id: "",

    
    };
  }

  
  
  connexion = () => {
    let { id, actions } = this.props;
    id=this.state.id;
    actions.changeid(id);
    this.props.navigation.navigate('ToDo');
     
  }

  _idTextInputChange(text){
    this.setState({id : text})
  }

 
 


  render(){
    

    return (
       <View style={styles.container}>
          <ImageBackground style={styles.image} source={require('../assets/img/comptalib-fond.jpg')} >
              <View style={styles.whiteContainer}>
                  <Image style={styles.logo_comptalib} source={require('../assets/img/comptalib.png')}/> 
                  
                  <Text style={styles.textContainer}> Id</Text>
                  <TextInput 
                  autoCapitalize='none'
                  style={styles.TextInputContainer}
                  onChangeText={(text)=> this._idTextInputChange(text)}
                  />
                  
                  
                  
                  
                  
                 
                    <TouchableOpacity
                      
                      style={styles.buttonContainer}
                      onPress={() => this.connexion()}
                    >
                      <Text style={styles.textButtonContainer}>Valider</Text>
                    </TouchableOpacity>
                 


                  
                  
              </View>
          
          </ImageBackground>
      </View>
    
    
  );
  }
  
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent : 'center',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent : 'center',
      alignItems : 'center',
      },
    whiteContainer :{
        width : '70%',
        aspectRatio: 1/1.3,
        
        alignItems : 'center',
        backgroundColor : 'white',
        borderRadius:10,
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,    
            },
            android: {
              elevation: 5,
            },
          }),
    },
    logo_comptalib : {
        width: '40%', 
        height: '18%',
        marginTop : '8%'
    },
    TextInputContainer :{
        height: '10%', 
        width : '70%',
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:10,
        marginTop : '1%'

    },
    errorContainer : {
      height: '8%', 
      width : '70%',
      backgroundColor: 'red', 
      borderWidth: 1,
      borderRadius:10,
    },
    textContainer : {
      fontSize: 18,
      alignSelf : 'flex-start',
      marginLeft : '15%', 
      marginTop : '10%'
    },
    buttonContainer : {
      backgroundColor: 'black', 
      height : '10%',
      width : '40%',
      alignItems: 'center',
      justifyContent : 'center',
      marginTop : '12%'
    },
    gradientContainer : {
      height : '10%',
      width : '40%',
      alignItems: 'center',
      justifyContent : 'center',
      marginTop : '12%'
    },
    textButtonContainer : {
      color : 'white',
      fontSize : 20
    }
    

    
});



const mapStateToProps = state => ({
  id: state.id,
});

const ActionCreators = Object.assign(
  {},
  changeid,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(changeid, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login)
