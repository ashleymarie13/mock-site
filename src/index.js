import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // nothing there at the moment
//TODO go and undo harcoded values


class Emulator extends React.Component {
	render() {
		return(
			<div className="emulator"> Emulator </div>
		);
	}
}

class MockSite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: {
				profilePicture:"profile.jpeg", // TODO should be a file reference
				username: "acakes", // hard coded for now but must be retrieved from api
				profileMessage: "My first profile message",
			},
		}
	}

	render() {
		return(
			<div className="main-site-frame"> 
				<div className="site-name">VRChat </div>
				<div className="profile">
					<Profile
						profilePicture = {this.state.profile.profilePicture}
						username = {this.state.profile.username}
						profileMessage = {this.state.profile.profileMessage}
					/>
				</div>
			</div>
		);
	}
}

class Profile extends React.Component {
	render() {
		return (
			<div>
				<div className="profilePicture">{this.props.profilePicture}</div>			
				<div className="username">{this.props.username}</div>
				<div className="profileMessage">{this.props.profileMessage}</div>
			</div>
		);
	}
}

class MainSiteFrame extends React.Component {
	render() {
		return(
			<React.Fragment>
				<Emulator/>
				<MockSite/>
			</React.Fragment>
		);
	}
}



// =============================================

ReactDOM.render(
	<MainSiteFrame/>,
	document.getElementById('root')
);