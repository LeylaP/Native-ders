import React, {Component} from "react";
import { View, ActivityIndicator, Button } from "react-native";

class AnyComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            password: 666,
            loading: false,
        }
        fetchUsers=()=> {
            this.setState=({loading:true});

            fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .then (data => this.setState({users:data, loading:false}))
      .catch(error => {
        console.log(error);
        this.setState({loading:false});
      })

        }
    }
    render(){
        return(
            <View>
                <Button
                title="Next  Page"/>
                {this.state.loading && <ActivityIndicator size="large" color="#00ff00" />}
            </View>

        );
    };
}
export default AnyComponent;
