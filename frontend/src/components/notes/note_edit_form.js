import React from 'react';
import { withRouter } from 'react-router-dom';

class NoteEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.note;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchNote(this.props.note.id)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateNote(this.state)
    }

    render() {
        console.log(this.props.note._id)
        return (
            <div>
                <button onClick={this.closeModal}>Close</button>
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input type='text'
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>
                    <br/>
                    <label>Caption
                        <input type='text'
                            value={this.state.caption}
                            onChange={this.update('caption')}
                        />
                    </label>
                    <br/>
                    <label>url
                        <input type="text"
                            value={this.state.url}
                            onChange={this.update('url')}
                        />
                    </label>
                    <br/>
                    <input type='submit' value="Submit Edit"/>
                    <button onClick={() => this.props.eraseNote(this.props.note._id)}>
                        Delete Note
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(NoteEditForm);