import React from 'react';
import { Button, Progress, CellButton, View, Div, Cell, Group, Separator, Panel, PanelHeader, HeaderButton, IS_PLATFORM_IOS } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import PlayButton from './PlayButton';
import FlashCell from './FlashCell';

class Audition extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            isShowAnswer: false,
            isHelp: false,
            soundStatus: "PLAYING",
            progress: 0
        };

        this.onAnswer = this.onAnswer.bind(this);
    }

    render() {
        const variants = (
            <Group title="Варианты">
                <FlashCell text="hello my dear little friend" />
                <FlashCell text="Some text some some text configuration, hello you!" />
                <FlashCell onClick={this.onAnswer} text={this.props.exercise[this.state.current].question} />
            </Group>
        );

        const answer = (
            <Group title="Ответ">
                <Div>
                    <div className="audition">
                        <h2>{this.props.exercise[this.state.current].question}</h2>
                    </div>
                    
                    <div className="audition">
                        <Button onClick={() => {
                            if (this.state.current + 1 < this.props.exercise.length) {
                                this.setState({
                                    isShowAnswer: false, 
                                    isHelp: false,
                                    soundStatus: "PLAYING",
                                    current: this.state.current + 1
                                });
                            }
                            
                        }}
                        size="l">
                            Дальше
                        </Button>
                    </div>
                </Div>
                
            </Group>
        );

        const helpButton = (
            <CellButton 
                align="center" 
                onClick={() => this.setState({isHelp: true})}>
                    Подсказка
            </CellButton>
        );

        const help = (
            <Div className="audition">{this.getHelpText()}</Div>
        );

        return (
            <View id="auditionView" activePanel="auditionPanel">
                <Panel id="auditionPanel">
                    <PanelHeader 
                        left={
                            <HeaderButton onClick={this.props.onCloseLesson}>
                                {IS_PLATFORM_IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                            </HeaderButton>
                        } > {this.props.lessonTitle}
                    </PanelHeader>
                    <Div className="audition">
                        <PlayButton
                            key={Math.random()}
                            url={"sounds/" + this.props.exercise[this.state.current].sound}
                            status={this.state.soundStatus} />
                    </Div>
                    {this.state.isHelp ? help : helpButton}
                    
                    <Progress value={this.state.progress}/>
                    {this.state.isShowAnswer ? answer : variants}
                </Panel>
            </View>
        );
    }

    getHelpText() {
        return this.props.exercise[this.state.current].answer.join(' ');
    }

    onAnswer() {
        this.setState({
            isShowAnswer: true,
            isHelp: true,
            progress: this.getProgress()
        });
    }

    getProgress() {
        return (this.state.current + 1) / this.props.exercise.length * 100;
    }
    
}

export default Audition;