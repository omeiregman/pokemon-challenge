import React, { Component } from 'react';
import "./css/style.css";


class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    render() {
        return (
            <section>
                <div>
                    <input type="text" name="search" onChange={this.onChange} value={this.state.search}/>
                </div>
            </section>
        );
    }
}

export default Search;