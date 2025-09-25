import '../styles/layout/home.css';

export default function Home() {
    return (
        <div className='body-home'>
            <div className="vscode-window">
                <div className="sidebar">
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>

                <div className="main">
                    <div className="tabs">
                        <div className="tab active">data.json</div>
                        <div className="tab">app.js</div>
                        <div className="tab">style.css</div>
                    </div>

                    <div className="editor">
                        <div className="line-numbers">
                            1<br />2<br />3<br />4<br />5<br />6<br />7<br />
                        </div>
                        <div className="code">
                            <span className="key">{'{'}"name"</span>: <span className="string">"Lana"</span>,<br />
                            <span className="key"> "age"</span>: <span className="number">25</span>,<br />
                            <span className="key"> "active"</span>: <span className="boolean">true</span>,<br />
                            <span className="key"> "skills"</span>: [<span className="string">"JavaScript"</span>, <span className="string">"React"</span>],<br />
                            <span className="key"> "address"</span>: <span className="null">null</span><br />{'}'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
