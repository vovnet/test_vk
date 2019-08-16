import React from 'react';
import { PanelHeader, HeaderButton, IS_PLATFORM_IOS, Group, Div } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import allmaterials from './materials/materials';

class Material extends React.Component {

    render () {
        return (
            <div>
                <PanelHeader 
                    left={
                        <HeaderButton onClick={this.props.onClose}>
                            {IS_PLATFORM_IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                        </HeaderButton>
					}>Материалы</PanelHeader>
                <Group>
                    <Div>
                        {allmaterials[this.props.lessonId]}
                    </Div>
                </Group>
                
            </div>
        );
    }
}

export default Material;