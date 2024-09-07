import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
import { ButtonStyles, TextFieldStylesFunc } from './App.styled';

function App() {
    const [maxValue, setMaxValue] = useState(
        Number(
            localStorage.getItem('maxValue')
                ? localStorage.getItem('maxValue')
                : 0
        )
    );
    const [startValue, setStartValue] = useState(
        Number(
            localStorage.getItem('startValue')
                ? localStorage.getItem('startValue')
                : 0
        )
    );
    const [counter, setCouter] = useState(startValue);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (maxValue > startValue) setError(false);
        if (maxValue <= startValue) setError(true);
        if (maxValue < 0 || startValue < 0) setError(true);
    }, [maxValue, startValue]);

    return (
        <div className="Wrapper">
            <section className="Board">
                <div className="Info_board">
                    <TextField
                        id="standard-basic"
                        label="max value"
                        variant="outlined"
                        type="number"
                        size="small"
                        sx={TextFieldStylesFunc(error)}
                        value={maxValue}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setMaxValue(+event.currentTarget.value);
                        }}
                        color={error ? 'error' : 'primary'}
                    />
                    <TextField
                        id="standard-basic"
                        label="start value"
                        variant="outlined"
                        type="number"
                        size="small"
                        sx={TextFieldStylesFunc(error)}
                        value={startValue}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setStartValue(+event.currentTarget.value);
                        }}
                        color={error ? 'error' : 'primary'}
                    />
                </div>
                <div className="Button_board">
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            localStorage.setItem('maxValue', String(maxValue));
                            localStorage.setItem(
                                'startValue',
                                String(startValue)
                            );
                            setCouter(startValue);
                        }}
                        sx={ButtonStyles}
                        disabled={error}
                    >
                        SET
                    </Button>
                </div>
            </section>
            <section className="Board">
                <div className="Info_board">{counter}</div>
                <div className="Button_board">
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setCouter(counter + 1);
                        }}
                        sx={ButtonStyles}
                        disabled={
                            counter >= Number(localStorage.getItem('maxValue'))
                                ? true
                                : false
                        }
                    >
                        INC
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setCouter(startValue);
                        }}
                        sx={ButtonStyles}
                    >
                        RESET
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default App;
