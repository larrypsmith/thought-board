import React from 'react';
import { withRouter } from 'react-router-dom';

class NoteEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.note;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteClose = this.deleteClose.bind(this);
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
            .then(() => this.props.closeModal())
    }

    deleteClose(e) {
        e.preventDefault();
        this.props.eraseNote(this.props.note._id)
            .then(() => this.props.closeModal())
    }

    render() {
        return (
            <div>
                <button className='close-x' onClick={this.props.closeModal}><i className="fas fa-times"></i></button>
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
                    {/* <label>url
                        <input type="text"
                            value={this.state.url}
                            onChange={this.update('url')}
                        />
                    </label> */}
                    <br/>
                    <input type='submit' value="Submit Edit"/>
                </form>
                <button onClick={this.deleteClose}>
                    Delete Note
                </button>
            </div>
        )
    }
}

export default withRouter(NoteEditForm);