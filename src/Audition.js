import React from 'react';
import { Button, Progress, CellButton, View, Div, Cell, Group, Separator, Panel, PanelHeader, HeaderButton, IS_PLATFORM_IOS } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import PlayButton from './PlayButton';
import FlashCell from './FlashCell';
import { shuffle, getPercent } from './tools';
import PieChart from 'react-minimal-pie-chart';

const NUM_VARIANTS = 2;

class Audition extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            isShowAnswer: false,
            isHelp: false,
            isComplete: false,
            isError: false,
            numErrors: 0,
            soundStatus: "PLAYING",
            progress: 0
        };

        this.variants = this.generateVariants(NUM_VARIANTS);

        this.onAnswer = this.onAnswer.bind(this);
        this.onErrorAnswer = this.onErrorAnswer.bind(this);
    }

    render() {
        const variants = (
            <Group title="Варианты">
                {
                    this.variants.map((item, i) => (
                        <FlashCell
                            key={i}
                            text={item.question}
                            onClick={item.isRight ? this.onAnswer : this.onErrorAnswer} 
                        />
                    ))
                }
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
                                    isError: false,
                                    soundStatus: "PLAYING",
                                    current: this.state.current + 1
                                });
                                this.variants = this.generateVariants(NUM_VARIANTS, this.state.current + 1);
                            } else {
                                this.setState({ isComplete: true });
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
                onClick={() => this.setState({ isHelp: true })}>
                Подсказка
            </CellButton>
        );

        const help = (
            <Div className="audition">{this.getHelpText()}</Div>
        );



        const complete = (
            <Group title="Завершено">
                <Div className="complete-box">
                    <h2>{this.isGoodResult() ? "Успех!" : "Нужно больше практики"}</h2>

                    <PieChart className="pie"
                        data={this.getPieData()}
                        totalValue={100}
                        lineWidth={20}
                        label
                        rounded
                        labelStyle={{
                            fontSize: '.4em',
                            fontFamily: 'sans-serif'
                        }}
                        labelPosition={60}
                        radius={20}
                    />
                    <p className={this.isGoodResult() ? "good-result" : "bad-result"}>
                        Успешно завершено {getPercent(this.state.numErrors, this.props.exercise.length, true)}% заданий!
                    </p>
                    <Button className="complete-button"
                        size="l"
                        onClick={this.props.onCloseLesson}
                    >Меню
                    </Button>
                </Div>

            </Group>
        );

        const lesson = (
            <div>
                <Div className="audition">
                    <PlayButton
                        key={Math.random()}
                        url={"sounds/" + this.props.exercise[this.state.current].sound}
                        status={this.state.soundStatus} />
                </Div>
                {this.state.isHelp ? help : helpButton}

                <Progress value={this.state.progress} />
                {this.state.isShowAnswer ? answer : variants}
            </div>
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
                    {this.state.isComplete ? complete : lesson}
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

    generateVariants(numVariants = NUM_VARIANTS, curr = 0) {
        let result = this.props.exercise.filter((item, i) => {
            if (this.props.exercise[curr].question === item.question) {
                item.isRight = true;
                return item;
            }
            if (numVariants > 0) {
                numVariants--;
                item.isRight = false;
                return item;
            }
            return null;
        });

        return shuffle(result);
    }


    onErrorAnswer() {
        if (!this.state.isError) {
            this.setState({
                isError: true,
                numErrors: this.state.numErrors + 1
            });
        }
    }

    getPieData() {
        const first = getPercent(this.state.numErrors, this.props.exercise.length, false);
        const second = 100 - first;
        return [
            { value: second, color: 'var(--field_valid_border)' },
            { value: first, color: 'var(--field_error_border)' }
        ]
    }

    isGoodResult() {
        return getPercent(this.state.numErrors, this.props.exercise.length, true) >= 80 ;
    }

}

export default Audition;