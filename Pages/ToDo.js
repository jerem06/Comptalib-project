import React, {Component} from 'react';
import {Text, View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {getUserToDo} from '../Services/Api'
import {StyleSheet} from 'react-native';
import { bindActionCreators } from 'redux';
import { changeid } from '../Redux/actions/getId';
import { connect } from 'react-redux';



class ToDo extends Component {


  constructor () {
    super();
    this.state = {
      Data: [],
      isCompleted : false
    
    };
  }
  
  componentDidMount(){
      const {id} = this.props.id;
      getUserToDo(id).then((response)=>{
      this.setState({Data : response})
    })
    
  }


  
  render(){
    
    
    
    
    return (
      <SafeAreaView style={styles.container}>
      <FlatList
        data={this.state.Data}
        renderItem={({item}) => 
          <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    
    
  );
  }
  
}






const Item = ({ title }) => (
  <View style={styles.item}>
    <Text  numberOfLines={1} style={styles.title}>{title}</Text>
     <View style={styles.rowView}>
            <TouchableOpacity style={styles.editButtonContainer}>
                  <Text style={styles.textWhite}>Modifier  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButtonContainer}>
                  <Text style={styles.textWhite}> Supprimer  </Text>
            </TouchableOpacity>
        </View>
  </View>
);








const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#1656ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    marginBottom : 15
  },
  rowView : {
    flexDirection : 'row',
    alignItems : 'center',
  },
  deleteButtonContainer : {
    backgroundColor : 'red',
    padding : 5,
    borderRadius : 5,
    marginLeft : 5,
    marginRight : 5,
    marginBottom : 10
   },
  editButtonContainer : {
    backgroundColor : 'black',
    padding : 5,
    borderRadius : 5,
    marginLeft : 5,
    marginRight : 5,
    marginBottom : 10
  },
  textWhite : {
    color : 'white',
     
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
  actions: bindActionCreators(ActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(ToDo)