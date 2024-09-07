import React, { useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
import { ButtonStyles, TextFieldStyles } from './App.styled';

function App() {
    const [counter, setCouter] = useState(0);
    const [maxValue, setMaxValue] = useState<string | undefined>();

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
                        sx={TextFieldStyles}
                        value={maxValue}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setMaxValue(event.currentTarget.value);
                        }}
                    />
                    <TextField
                        id="standard-basic"
                        label="start value"
                        variant="outlined"
                        type="number"
                        size="small"
                        sx={TextFieldStyles}
                        color="primary"
                    />
                </div>
                <div className="Button_board">
                    <Button variant="outlined" size="small" sx={ButtonStyles}>
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
                    >
                        INC
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setCouter(0);
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
