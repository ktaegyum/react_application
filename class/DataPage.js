import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  ScrollView
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {styles} from './Style';

//function that form the list of infusion date in actual date format
function unixToDate(unix_infutsion_date) {
  //it returns two d array to 
    var infusionDate = [];
    for(var i = 0; i < this.props.state.infusion_Date.length; i++) {
      infusionDate.push(new Date(unix_infutsion_date[i]));
    }
    var listInfusion = [];
    for(var i = 0; i < infusionDate.length; i++) {
        if(i + 1 < infusionDate.length) {
            var days = timeDiff(infusionDate[i+1], infusionDate[i]);
            listInfusion.push({'infusion_date': infusionDate[i], 'Num_days': days});
        }
    }
    return listInfusion;
}
//time diff between two different date
//date1,2 is new Date object
function timeDiff(date1, date2) {
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return diffDays;
}
function mapCreate(record) {
  var symptom_map = new Object();
  record.map(function(observations){
    var list = [observations.nausea, observations.fatigue, observations.anxiety, observations.lack_of_appetite];
    symptom_map[new Date(observations.entry_datetime)] = list;
  })
  return symptom_map;
}
//infusion_date : array, past_symtpoms : array, date_of_interests: unixtimeof(new Data(), 
// date_of_interests : user can specify the date that they want to know the pain level date.
function computeExpectedAnxiety(infusion_date, past_symptoms, days_after_infusion) {
    //creating array (key: infusion_date, value: number of element);
    //past symtpoms (fatigue, nausea, fever, pain);
    //date of interest
    //it returns the array(key: pain, value : array of average pain)
    //TODO, we need to know what day of the week 'days_after_infusion' is 
    //
    //
    var average_list = new Object();
    var tracking = new Object();
    var infusionDate = unixToDate(this.props.state.infusion_Date); // list
    var record = mapCreate(past_symptoms);
    infusionDate.map(function(infusions,i){
      
      var time_date = infusions.infusion_date;
      for(var i = 1; i <= infusions.Num_days; i++) {
        //find the diff 1
        tracking[i] += 1;
        average_list[i] += record[infusions.infusion_date+1] 
      }
    })
    for(var i = 1; i <= average_list.length; i++) {
        average_list[i] = average_list[i] / 4;
    }
    return average_list;
};
function DateAndBar(day, width) {
  return (
    <View style={{
      flexDirection: 'row'
    }}>
      <View style ={{
        marginRight: 5
      }}>
        <Text>{day}:</Text>
      </View>
      <View style={{
        width: width,
        height: 10,
        backgroundColor: 'blue',
        marginTop: 4
      }}/>
    </View>
  )
}

export default class DataPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  };
  render() {
    const daysOfWeek = [
      "U",
      "M",
      "T",
      "W",
      "R",
      "F",
      "S"
    ]

    const fatigueItems = this.props.observations.map((ob) => {
      dateTimeOfObservation = new Date(ob.entry_datetime)
      dayIndexOfWeek = dateTimeOfObservation.getDay()
      dayOfMonth = dateTimeOfObservation.getDate()
      monthNum = dateTimeOfObservation.getMonth()
      observation_width = ob.fatigue
      return (
        <View style={{
          flexDirection: 'row'
        }} key={ob.entry_datetime}>
          <View style ={{
            marginRight: 5
          }}>
            <Text style={styles.dataTitles}>
              {daysOfWeek[dayIndexOfWeek]}, {monthNum}/{dayOfMonth}:
            </Text>
          </View>
          <View style={{
            width: 300 *(observation_width / 4),
            height: 10,
            backgroundColor: '#bfa4e8',
            marginTop: 4
          }}/>
        </View>
      )
    });

    const anxietyItems = this.props.observations.map((ob) => {
      dateTimeOfObservation = new Date(ob.entry_datetime)
      dayIndexOfWeek = dateTimeOfObservation.getDay()
      dayOfMonth = dateTimeOfObservation.getDate()
      monthNum = dateTimeOfObservation.getMonth()
      observation_width = ob.anxiety
      return (
        <View style={{
          flexDirection: 'row'
        }} key={ob.entry_datetime}>
          <View style ={{
            marginRight: 5
          }}>
          <Text style={styles.dataTitles}>
            {daysOfWeek[dayIndexOfWeek]}, {monthNum}/{dayOfMonth}:
          </Text>
          </View>
          <View style={{
            width: 300 *(observation_width / 4),
            height: 10,
            backgroundColor: '#a4e8db',
            marginTop: 4
          }}/>
        </View>
      )
    });

    const appetiteItems = this.props.observations.map((ob) => {
      dateTimeOfObservation = new Date(ob.entry_datetime)
      dayIndexOfWeek = dateTimeOfObservation.getDay()
      dayOfMonth = dateTimeOfObservation.getDate()
      monthNum = dateTimeOfObservation.getMonth()
      observation_width = ob.lack_of_appetite
      return (
        <View style={{
          flexDirection: 'row'
        }} key={ob.entry_datetime}>
          <View style ={{
            marginRight: 5
          }}>
          <Text style={styles.dataTitles}>
            {daysOfWeek[dayIndexOfWeek]}, {monthNum}/{dayOfMonth}:
          </Text>
          </View>
          <View style={{
            width: 300 *(observation_width / 4),
            height: 10,
            backgroundColor: '#a4bee8',
            marginTop: 4
          }}/>
        </View>
      )
    });
    /*
    const datePrediction = () => {
      return(
        <View>
         <calendar button to change date_to_protect>
        <Text>
        On {this.state.date_to_protect} the expected anxiety is X
        </Text>
        </View>
        )
    }
    */

    return (
      <ScrollView>
        {datePrediction}
        <Text style={{fontSize:25}}>FATIGUE</Text>
        <View style={{marginLeft: 10}}>
        <Text style={styles.dataHeaders}>FATIGUE</Text>
          {fatigueItems}
          <Text style={styles.dataHeaders}>ANXIETY</Text>
          {anxietyItems}
          <Text style={styles.dataHeaders}>LACK OF APPETITE</Text>
          {appetiteItems}
          <Text>{JSON.stringify(this.props.observations)}</Text>
        </View>
      </ScrollView>
    )
  };
}
