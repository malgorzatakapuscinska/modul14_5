var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
	render: function(){
		return(
			React.createElement('div', {className: 'contact_item'},
				React.createElement('img', {className: 'contact_image', src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}),
				React.createElement('p', {className: 'contact_label'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contact_label'}, 'Nazwisko: ' + this.props.item.lastName),
				React.createElement('p', {className: 'contact_email', href: 'mailto:' + this.props.item.email}, 'Email: ' + this.props.item.email)
			)
		);
	}
});