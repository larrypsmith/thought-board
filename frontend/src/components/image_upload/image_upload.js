import React from 'react';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();

        this.state = {
            file: null,
            imageUrl: null,
            errors: [],
            inputReset: Date.now()
        }

        this.handleFiles = this.handleFiles.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleFiles(e) {
        e.preventDefault();
        this.setState({ file: e.target.files[0] });
    }

    handleUpload(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.fileInput.current.files.length <= [0]) {
            const errors = [];
            errors.push("Unable to upload image. image must be a JPEG or PNG and cannot be empty");
            this.setState({errors});

        } else if (this.fileInput.current.files.length > 0) {

            if (this.fileInput.current.files[0].type === 'image/jpg' ||
                this.fileInput.current.files[0].type === 'image/png' ||
                this.fileInput.current.files[0].type === 'image/jpeg') {
                const image = new FormData();
                image.append('image', this.state.file);
                this.props.uploadImage(image)
                this.setState({
                    errors: [],
                    inputReset: Date.now(),
                    file: null,
                    imageUrl: null
                })
                // this.setState({ file: e.target.files[0]})
            } else {
                const errors = []
                errors.push('Invalid Image');
                this.setState({ errors });
            }
        }
    }

    render() {
        return (
            <div>
                {/* <label htmlFor='file-input' className='file-input-label'>
                    <i className='fas fa-image'></i>
                    <div className="file-input-div hidden">Attach Image</div>
                </label> */}
                <input type='file'
                    ref={this.fileInput}
                    key={this.state.inputReset}
                    type='file'
                    name='image'
                    onChange={this.handleFiles}
                />
                <button type='button' onClick={this.handleUpload}>
                    Upload Image
                </button>
                {this.state.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </div>
        );
    }
    
}

export default ImageUpload;