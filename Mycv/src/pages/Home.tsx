import React from 'react';
import '../styles/layout/home.css';
import type { propsLinearCode } from '../types/Componets';
import { DEVELOPER } from '../assets/Data/data';


let globalCounterRow = 0;

const LineEditorCode = (props: propsLinearCode) => {
    const instanceRow = React.useRef(++globalCounterRow);
    const value = props.value.replace(',', '').trim();
    const regex = /"([^"]+)":\s*(.*?)/g;
    const [dataKey, dataValue] = regex.test(value) ? Object.entries(JSON.parse(`{${value}}`))[0] : [value, ''];
    const classNameInput = !dataValue && typeof dataValue === 'string' ? 'char' : typeof dataValue;

    return (
        <div className="code">
            <span>{`${instanceRow.current} ${dataValue ? '\t' : ''}`}</span>
            <span className={classNameInput == 'char' ? 'char' : 'key'}>{'' + dataKey}</span>{dataValue ? ': ' : ''}
            <span className={classNameInput}>{`${dataValue || ''} `}</span>
            <span>{dataValue ? ',' : ''}</span>
        </div>
    )
};

const TabsContent = (props :{jsonString:string}) => {
    const { jsonString } = props;

    const DATA = JSON.parse(jsonString);
    console.log(DATA.array.forEach(element => {
        console.log(element);
    }));

    return (
        <div className="main">
            <div className="tabs">
                <div className="tab active">data.json</div>
                <div className="tab">app.js</div>
                <div className="tab">style.css</div>
            </div>

            <div className="editor">
            </div>
        </div>
    );
};

export default function Home() {
    const developer: string = JSON.stringify(DEVELOPER, null, 2);
    const DATA = `{"Developer": ${developer}, "Developer1": ${developer},"Developer2": ${developer}}`;

    return (
        <div className='body-home'>
            <div className="vscode-window">
                <div className="main">
                    <div className="tabs">
                        <div className="tab active">Developer.json</div>
                        <div className="tab">app.js</div>
                        <div className="tab">style.css</div>
                    </div>

                    <div className="editor">
                        <div className="code">
                            {developer.split('\n').map(a => <LineEditorCode value={a} />)}
                        </div>
                    </div>
                </div>
            </div>
            <TabsContent jsonString={DATA} />
        </div>
    );
}
