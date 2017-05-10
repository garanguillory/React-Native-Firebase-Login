import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGE_SENDER_ID } from 'react-native-dotenv';

class App extends Component {

	state = { loggedIn: null };
	
	componentWillMount(){
		firebase.initializeApp({
	    apiKey: API_KEY,
	    authDomain: AUTH_DOMAIN,
	    databaseURL: DATABASE_URL,
	    projectId: PROJECT_ID,
	    storageBucket: STORAGE_BUCKET,
	    messagingSenderId: MESSAGE_SENDER_ID
	  });
	  firebase.auth().onAuthStateChanged((user) => {
	  	if(user){
	  		this.setState({ loggedIn: true });
	  	} else {
	  		this.setState({ loggedIn: false });
	  	}
	  });
	}

	renderContent(){
		switch (this.state.loggedIn){
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default: 
				return (
					<View style={{marginTop: 300}}>
						<Spinner size="large" />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;