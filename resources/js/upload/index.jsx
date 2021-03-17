import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [file, setFile] = useState(null);
    const [name, setName] = useState(null);

    const [url, setUrl] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('picture', file);
        data.append('name', name);

        const response = await fetch('/upload', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        const response_data = await response.text();
        setUrl(response_data);
    }

    return (
        <div>
            <h1>Upload file</h1>
            {
                url !== null && (
                    <img style={{width: '30vw'}} src={`/uploads/${url}`}/>
                )
            }
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)}/>

                <input type="file" onChange={(e) => setFile(e.target.files[0])}/>

                <input type="submit" value="Upload"/>
            </form>
        </div>
    );
}


ReactDOM.render(<App/>, document.querySelector('#app'));
