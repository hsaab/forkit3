import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, SectionList, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navbar from '../components/Navbar.js';
import FriendItem from '../components/FriendItem.js';
import FormBar from '../components/FormBar.js';
import axios from 'axios';
import _ from 'underscore';
import Arya from '../assets/prof/Arya.png';
import Adam from '../assets/prof/Adam.png';
import Adil from '../assets/prof/Adil.png';
import Brandon from '../assets/prof/Brandon.png';
import Caroline from '../assets/prof/Caroline.png';
import Etai from '../assets/prof/Etai.png';
import Hassan from '../assets/prof/Hassan.png';
import Jennifer from '../assets/prof/Jennifer.png';
import Paul from '../assets/prof/Paul.png';
import Vasish from '../assets/prof/Vasish.png';

const allData = [
  {title: "A", data:
    [{name: "Adil Trehan", number: "+17322997997", id: 2, img: Adil},
     {name: "Arya Ghadimi", number: "+17322997997", id: 7, img: Arya}]},
  {title: "B", data: [{name: "Brandon Eng", number: "+17322997997", id: 23, img: Brandon}]},
  {title: "C", data: [{name: "Caroline Marques", number: "+17322997997", id: 23, img: Caroline}]},
  {title: "E", data: [{name: "Etai Evenhaim", number: "+17322997997", id: 23, img: Etai}]},
  {title: "J", data: [{name: "Jennifer Rong", number: "+13109442125", id: 21, img: Jennifer}]},
  {title: "P", data: [{name: "Paul Jin", number: "+16502695502", id: 20, img: Paul}]},
  {title: "V", data: [{name: "Vasish Baungally", number: "+13127098951", id: 22, img: Vasish}]},
]

class InviteFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: "A", data:
          [{name: "Adil Trehan", number: "+17322997997", id: 2, img: Adil},
           {name: "Arya Ghadimi", number: "+17322997997", id: 7, img: Arya}]},
        {title: "B", data: [{name: "Brandon Eng", number: "+17322997997", id: 23, img: Brandon}]},
        {title: "C", data: [{name: "Caroline Marques", number: "+17322997997", id: 23, img: Caroline}]},
        {title: "E", data: [{name: "Etai Evenhaim", number: "+17322997997", id: 23, img: Etai}]},
        {title: "J", data: [{name: "Jennifer Rong", number: "+13109442125", id: 21, img: Jennifer}]},
        {title: "P", data: [{name: "Paul Jin", number: "+16502695502", id: 20, img: Paul}]},
        {title: "V", data: [{name: "Vasish Baungally", number: "+13127098951", id: 22, img: Vasish}]},
      ],
      searchVal: '',
      FoF: true
    }
  }

  fofToggle(){
    const opposite = !this.state.FoF;
    this.setState({
      FoF: opposite
    })
  }

  search(searchVal){
    let finalDisplay = _.reduce(allData, (initial, obj) => {
      let newList = obj.data.filter((item) => {
        return item.name.includes(searchVal)});
      if (newList.length > 0) {
        initial.push(Object.assign({}, obj, {data: newList}));
      }
      return initial;
    }, []);
    this.setState({
      data: finalDisplay
    });
  }

  handleCreate() {
    // var dates = [];
    // for (var i = 0; i < this.props.eventData.dates.length; i++) {
    //   dates.push(this.props.eventData.dates[i].dateString)
    // }
    //
    // var participants_id = [];
    // for (var j = 0; j < this.props.friends.friends.length; j++) {
    //   participants_id.push(this.props.friends.friends[j].id)
    // }
    //
    // var cuisinesChosen = [];
    // for (var k = 0; k < this.props.eventData.cuisines.length; k++) {
    //   cuisinesChosen.push(this.props.eventData.cuisines[k].label)
    // }
    //
    // var group_event = {id: Date.now().toString(), title: this.props.eventData.title, dates: dates.toString(), meal_type: this.props.eventData.meal, location: {latitude: this.props.eventData.coords.lat, longitude: this.props.eventData.coords.long}, radius: this.props.eventData.distance, host_id: this.props.user.id, participants_id: participants_id.toString(), restaurant_chosen: false, cuisines: cuisinesChosen.toString()}
    //
    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:3000/db/101_super_duper_secret_101',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: {
    //     password: '$BIG_SHAQ101$',
    //     type: 'search',
    //     query: `insert into group_event(id, title, dates, meal_type, location, radius, host_id, participants_id, restaurant_chosen, cuisines) values ('${group_event.id}', '${group_event.title}', '${group_event.dates}', '${group_event.meal_type}', '${JSON.stringify(group_event.location)}','${group_event.radius}', ${group_event.host_id},'${group_event.participants_id}', true, '${group_event.cuisines}')`
    //   }
    // })
    // .then(response => {
    //   console.log(response.data)
    // })
    // .catch(e => {
    //   console.log(e);
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <FormBar title={"Friends"} aLink={() => Actions.eventform()} bLink={() => Actions.invitefriends()}/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
          <View style={styles.createContainer}>
            <TouchableOpacity style={styles.optionContainer} onPress={() => {this.fofToggle()}}>
              <Image style={styles.group} source={require("../assets/groupMGrey.png")}/>
              {this.state.FoF ? <Text style={styles.optionText}>+1s ON </Text> : <Text style={styles.optionText}>+1s OFF </Text>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer}>
              <Image style={styles.group} source={require("../assets/plusMGrey.png")}/>
              <Text style={styles.optionText}>Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.myevents} style={styles.optionContainer}>
              <Image style={styles.group} source={require("../assets/CubeLogoMGrey.png")}/>
              <Text style={styles.optionText}>Create</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.searchContainer}>
              <Image style={styles.logoSearch} source={require("../assets/search.png")}/>
              <TextInput style={styles.search} placeholder={'Search'} onChangeText={(searchVal) => {this.search(searchVal)}}/>
            </View>
          </View>
          <View style={styles.listContainer}>
            <SectionList
              renderItem={({item}) => <FriendItem img={item.img} title={item.name} number={item.number} id={item.id}/>}
              renderSectionHeader={({section}) =>
              <View style={styles.sectionHeader}><Text style={styles.sectionText}>{section.title}</Text></View>}
              sections={this.state.data}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: '100%',
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-50),
    width: scale(375)
  },
  headerContainer: {
    flex: 1,
    borderColor: '#fff',
    borderBottomWidth: scale(1),
    width: scale(375),
    flexDirection: 'row'
  },
  createContainer: {
    flex: 1.1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderBottomWidth: 1,
    borderBottomColor: '#95989A'
  },
  rowContainer: {
    flex: 0.8,
    flexDirection: 'row',
    width: '100%',
  },
  searchContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: moderateScale(40),
    margin: moderateScale(10)
  },
  textContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterText: {
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontSize: moderateScale(25),
    color: '#646464',
  },
  listContainer: {
    flex: 5
  },
  search: {
    width: '85%',
    left: scale(15),
    fontSize: moderateScale(15),
    color: '#646464'
  },
  optionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%'
  },
  optionText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(15),
    marginTop: verticalScale(5),
    fontWeight: 'bold',
  },
  group: {
    height: verticalScale(30),
    width: scale(30),
    overflow: 'visible'
  },
  logoSearch: {
    height: verticalScale(20),
    width: scale(20),
    left: scale(3),
    opacity: 0.52,
    overflow: 'visible'
  },
  sectionHeader: {
    width: '100%',
    height: verticalScale(15),
    justifyContent: 'space-around',
    backgroundColor: 'silver',
  },
  sectionText: {
    fontFamily: 'Futura',
    fontSize: moderateScale(10),
    marginLeft: scale(10)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InviteFriends);
