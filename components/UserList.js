import React, {Component} from "react";
import {Text,Button, View} from "react-native";
class UserList extends Component {

    //kurucu metot
    constructor(props){
        super(props);
        this.state={
            users:[],
            loading: false,
        };
    }
    render(){
        return(
            <View>
                <Button
  title="Learn More"
  color="#841584"
/>
                <Text>Kuzalakcam benim</Text>
            </View>
        )
    }
}

export default UserList;