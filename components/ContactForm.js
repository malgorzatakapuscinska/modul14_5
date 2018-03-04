var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
			React.createElement('form', {className: 'contact_form'},
				React.createElement('imput', {
					type: 'text', 
					placeholder: 'Imię', 
					value: this.props.contact.firsName
				}),
				React.createElement('input', {
					type: 'text',
					placeholder: 'Nazwisko',
					value: this.props.contact.lastName
				}),
				React.createElement('input', {
					type: 'text',
					placeholder: 'email',
					value: this.props.contact.email
				}),
				React.createElement('button', {type: 'submit'}, 'Dodaj kontakt')
			)
		);
	}
});
