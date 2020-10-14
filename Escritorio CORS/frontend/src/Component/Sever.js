import React, { Component } from 'react'
import axios from 'axios'   

export default class Server extends Component {
    
    state = {
        servers:[]
    }
    
    
    async componentDidMount() {
        const res = await axios.get('https://docta.desitsa.com/api/app-panico/validar-licencia/MMMMM-MMMMM-MMMMM-MMMMM');
        this.setState({ servers: res.data});
    }
    

    render() {
        return (
            <div>
                NOTES LIST
                {
                                this.state.servers.map(server => <li>
                                    {server.codigoLicencia}

                                </li>)
                           }
            </div>
        )
    }
}