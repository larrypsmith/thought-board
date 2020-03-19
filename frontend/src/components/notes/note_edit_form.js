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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input type='text'
                            value={this.props.note.title}
                            onChange={this.update('title')}
                        />
                    </label>
                    <br/>
                    <label>Caption
                        <input type='text'
                            value={this.props.note.caption}
                            onChange={this.update('caption')}
                        />
                    </label>
                    <br/>
                    <label>url
                        <input type="text"
                            value={this.props.note.url}
                            onChange={this.update('url')}
                        />
                    </label>
                    <br/>
                    <button onClick={this.props.eraseNote(this.props.note.id)}>
                        Delete Note
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(NoteEditForm);