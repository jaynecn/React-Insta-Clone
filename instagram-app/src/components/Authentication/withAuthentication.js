import React from 'react';

export default function withAuthentication(Component) {
    return class Authentication extends React.Component {
        constructor() {
            super();
            this.state = {
                isAuthed: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('is_authed')) {
                this.setState({ isAuthed: true });
            }
        }

        login = () => {
            localStorage.setItem('is_authed', true);
            this.setState({ isAuthed: true });
        }

        logout = () => {
            localStorage.removeItem('is_authed');
            this.setState({ isAuthed: false });
        }

        render() {
            return(
                <Component 
                    isAuthed={this.state.isAuthed}
                    login={this.login}
                    logout={this.logout}
                />
            );
        }
    }
}