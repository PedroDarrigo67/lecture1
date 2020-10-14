import React, { Component } from 'react'
import axios from 'axios'   

export default class NotesList extends Component {
    
    async componentDidMount() {
        const res = await axios.get('https://docta.desitsa.com/api/app-panico/validar-licencia/MMMMM-MMMMM-MMMMM-MMMMM');
        console.log(res);
    }
    

    render() {
        return (
            <div>
                NOTES LIST
            </div>
        )
    }
}