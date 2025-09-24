import '../styles/layout/home.css';

export default function Home() {
    return (
        <div className='body-home'>
            <div className="vscode-window">
                <div className="title-bar">
                    <span className="btn red"></span>
                    <span className="btn yellow"></span>
                    <span className="btn green"></span>
                </div>
                <div className="editor">{'{'}
                    <span className="key">"name"</span>: <span className="string">"Lana"</span>,<br />
                    <span className="key"> "age"</span>: <span className="number">25</span>,<br />
                    <span className="key"> "active"</span>: <span className="boolean">true</span>,<br />
                    <span className="key"> "skills"</span>: [<span className="string">"JavaScript"</span>, <span className="string">"React"</span>],<br />
                    <span className="key"> "address"</span>: <span className="null">null</span><br />{'}'}
                </div>
            </div>
        </div>
    );
}
