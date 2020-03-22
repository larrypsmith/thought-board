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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // document.querySelector('.fas.fa-image').addEventListener('mouseover', () => {
        //     document.querySelector('.file-input-dev').classList.remove('hidden');
        // })
        // document.querySelector('.fas.fa-image').addEventListener('mouseout', () => {
        //     const div = document.querySelector('.file-input-div')
        //     if (!div.className.includes('hidden')) {
        //         div.classList.add('hidden');
        //     }
        // })
    }

    handleFiles(e) {
        e.preventDefault();
        this.setState({ file: e.target.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.fileInput.current.files.length <= [0]) {
            const errors = [];
            errors.push("Unable to upload image. image must be a JPEG or PNG and cannot be empty");
            this.setState({errors});
        } else if (this.fileInput.current.files.length > 0) {
            if (this.fileInput.current.files[0].type === 'image/jpg' ||
                this.fileInput.current.files[0].type === 'image/png') {
                const image = new FormDate();
                image.append('image', this.state.file);
                this.props.uploadImage(image);
                this.setState({
                    errors: [],
                    inputReset: Date.now(),
                    file: null,
                    imageUrl: null
                })
            } else {
                const errors = []
                errors.push('Invalid image');
                this.setState({ errors });
            }
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label htmlFor='file-input' className='file-input-label'>
                        <i className='fas fa-image'></i>
                        <div className="file-input-div hidden">Attach Image</div>
                    </label> */}
                    <input type='file'
                        // id='file-input'
                        ref={this.fileInput}
                        key={this.state.inputReset}
                        name='image'
                        onChange={this.handleFiles}
                    />
                    <input type='submit'
                        // className='upload-image-submit'
                        value='Submit'
                    />
                </form>
                {this.state.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </div>
        );
    }
    
}

export default ImageUpload;