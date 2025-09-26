import React from 'react';
import '../styles/layout/home.css';
import type { propsLinearCode } from '../types/Componets';
import { DEVELOPER } from '../assets/Data/data';


let globalCounterRow = 0;

const LineEditorCode = (props: propsLinearCode) => {
    const { dataKey, value } = props;
    const instanceRow = React.useRef(++globalCounterRow);
    const classNameInput = !dataKey && typeof value === 'string' ? 'char' : typeof value;

    return (
        <div className="code">
            <span>{`${instanceRow.current} ${dataKey ? '\t' : ''}`}</span>
            <span className="key">{dataKey}</span>{dataKey && ': '}
            <span className={classNameInput}>{`${value} `}</span>
            <span>{dataKey ? ',' : ''}</span>
        </div>
    )
};

export default function Home() {

    const jsonString: string = JSON.stringify(DEVELOPER, null, 2);
    console.log(jsonString);

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
                        <div className="code">
                            {jsonString}
                            <LineEditorCode value={"{"} />
                            <LineEditorCode dataKey={'name'} value={"Lana"} />
                            <LineEditorCode dataKey={'age'} value={25} />
                            <LineEditorCode dataKey={'active'} value={true} />
                            <LineEditorCode value={"}"} />
                            <span className="key"> "skills"</span>: [<span className="string">"JavaScript"</span>, <span className="string">"React"</span>],<br />
                            <span className="key"> "address"</span>: <span className="null">null</span><br />
                            {'}'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
