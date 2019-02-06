import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/styles/header.css';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { credentialsChanged, searchKeyChanged } from '../actions/accessActions';


class AppHeaderComponent extends Component {
    render() {
        return (
            <Navbar fluid={true}>
                <img src={logo} className='logo' />
                <div style={{ display: 'inline-flex' }}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                   
                                    <input type="password" className="form-control" placeholder="API Secret" aria-label="" aria-describedby="basic-addon1" onChange={(e)=>this.props.dispatch(credentialsChanged(e.target.value))} />
                                </td>
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