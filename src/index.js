import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@vkontakte/vkui/dist/vkui.css';
import connect from '@vkontakte/vkui-connect';
import MainMenu from './MainMenu';


connect.subscribe((e) => {
    switch (e.detail.type) {
        case 'VKWebAppUpdateConfig':
            let schemeAttribute = document.createAttribute('scheme');
            schemeAttribute.value = e.detail.data.scheme ? e.detail.data.scheme : 'client_light';
            document.body.attributes.setNamedItem(schemeAttribute);
            break;

        default:
            console.log(e.detail.type);
    }
});

connect.send('VKWebAppInit', {});

ReactDOM.render(<MainMenu />, document.getElementById('root'));
