import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@vkontakte/vkui/dist/vkui.css';
import connect from '@vkontakte/vkui-connect';
import MainMenu from './MainMenu';
import mVKMiniAppsScrollHelper from '@vkontakte/mvk-mini-apps-scroll-helper';


connect.subscribe((e) => {
    switch (e.detail.type) {
        case 'VKWebAppUpdateConfig':
            let schemeAttribute = document.createAttribute('scheme');
            schemeAttribute.value = e.detail.data.scheme ? e.detail.data.scheme : 'client_light';
            document.body.attributes.setNamedItem(schemeAttribute);
            break;

        default:
            //console.log(e.detail.type);
    }
});

connect.send('VKWebAppInit', {});

const root = document.getElementById('root');
//mVKMiniAppsScrollHelper(root);
ReactDOM.render(<MainMenu />, root);
