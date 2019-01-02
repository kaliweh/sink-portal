import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/styles/header.css';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { credentialsChanged } from '../actions/accessActions';


class AppHeaderComponent extends Component {
    render() {
        return (
            <Navbar fluid={true}>
                <img src={logo} className='logo' />
                <div style={{ display: 'inline-flex' }}>
                    <table>
                        <tbody>
                            <tr>
                                <td><div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button" >Sign in</button>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Access Token" aria-label="" aria-describedby="basic-addon1" onChange={(e)=>this.props.dispatch(credentialsChanged(e.target.value))} />
                                </div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </Navbar>)
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(AppHeaderComponent);