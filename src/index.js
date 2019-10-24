import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // nothing there at the moment



class Emulator extends React.Component {
	render() {
		return(
			<div className="emulator"> Emulator </div>
		);
	}
}

class MockSite extends React.Component {
	render() {
		return(
			<div className="main-site-frame"> VRChat </div>
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