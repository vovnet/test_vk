import React from 'react';
import { PanelHeader, platform, IOS, HeaderButton, Div, Group } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import VariantsContainer from '../variants/VariantsContainer';
import RemoveButton from '../variants/RemoveButton';
import TestingInputContainer from './TestingInputContainer';
import TrueAnswer from './TrueAnswer';

const Testing = (props) => {
    if (props.isTrueAnswer) {
        props.onTrueAnswer(props.sound);
    }
    const variants = (
        <>
            <Group title="Варианты">
                <VariantsContainer />
            </Group>
            <div className="remove-container">
                <RemoveButton />
            </div>
        </>
    );

    const trueAnswer = (
        <>
            <TrueAnswer />
        </>
    );

    return (
        <>
            <PanelHeader
                addon={<HeaderButton>Назад</HeaderButton>}
                left={<HeaderButton>{platform() === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</HeaderButton>}
                >{props.title}
            </PanelHeader>
            
                <>
                    <Group title="Вопрос">
                        {props.question}
                    </Group>

                    <Group title="Ответ">
                        <TestingInputContainer />
                    </Group>
                    
                    {props.isTrueAnswer ? trueAnswer : variants}
                    
                </>
                
                
            
        </>
    );
}

export default Testing;