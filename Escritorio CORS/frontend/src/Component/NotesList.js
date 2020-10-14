import React, { Component } from 'react'
import axios from 'axios'   

export default class NotesList extends Component {
    
    state = {
        notas:[]
    }
    
    
    async componentDidMount() {
        const res = await axios.get('http://181.31.155.212:8000/api/notes');
        //const res = await axios.get('http://127.0.0.1:8000/api');
        //const res = await axios.get('http://localhost:4000/api/notes');
        
        this.setState({ notas: res.data});
        //console.log(res);
    }
    

    render() {
        return (
            <div className="row">
                    <div className="col-md-2">
                        Listado de conos - Server oficina
                    </div>
                    <div className="col-md-8">
                      <ul className="list-group">
                           {        this.state.notas.map(nota => 


                                    <li className="list-group-item list-group-item-action" key={nota.id}>
                                    
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-.3">
                                                {nota.idComunicador}
                                            </div>
                                            <div className="col-.5">
                                                {nota.idMesh}
                                            </div>
                                            <div className="col-2">
                                                {nota.imei}
                                            </div>
                                            <div className="col-3">
                                                {nota.descripcion}
                                            </div>
                                            <div className="col-3">
                                                {nota.idMesh}
                                            </div>

                                            <div class="card__link col-2" href="">
                                                <span>Detail <i class="emoji-right">👉</i></span>
                                            </div>


                                            </div>


                                    </div>
                                    

                                </li>)
                           }
                      </ul>

                    </div>
                
            </div>
        )
    }
}
