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
            <span>{`${instanceRow.current} ${value ? '\t' : ''}`}</span>
            <span className="key">{dataKey}</span>{value && ': '}
            <span className={classNameInput}>{`${value || ''} `}</span>
            <span>{value ? ',' : ''}</span>
        </div>
    )
};

export default function Home() {

    const jsonString: string = JSON.stringify(DEVELOPER, null, 2);
    console.log(jsonString);

    return (
        <div className='body-home'>
            <div className="vscode-window">
                <div className="main">
                    <div className="tabs">
                        <div className="tab active">data.json</div>
                        <div className="tab">app.js</div>
                        <div className="tab">style.css</div>
                    </div>

                    <div className="editor">
                        <div className="code">
                            {
                                jsonString.split('\n')
                                    .map(a => {
                                        const KeyValue = a.split(':');
                                        return <LineEditorCode dataKey={KeyValue[0]} value={KeyValue[1]} />
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
