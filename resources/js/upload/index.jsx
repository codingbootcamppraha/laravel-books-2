import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [file, setFile] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('file', file);

        const response = await fetch('/upload', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        const response_data = await response.json();

        console.log(response_data);
    }

    return (
        <div>
            <h1>Upload file</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                <input type="submit" value="Upload"/>
            </form>
        </div>
    );
}


ReactDOM.render(<App/>, document.querySelector('#app'));
