import React, { Component } from 'react'
import axios from 'axios'   

export default class NotesList extends Component {
    
    state = {
        notas:[]
    }
    
    
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({ notas: res.data});
    }
    

    render() {
        return (
            <div className="row">
                    <div className="col-md-4">
                        form user
                    </div>
                    <div className="col-md-8">
                      <ul className="list-group">
                           {
                                this.state.notas.map(nota => 
                                    <li className="list-group-item list-group-item-action" key={nota.id}>
                                    {nota.barrio}

                                </li>)
                           }
                      </ul>

                    </div>
                
            </div>
        )
    }
}
