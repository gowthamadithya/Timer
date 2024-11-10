import { useState, useEffect } from 'react';

export default function App() {
    const [timers, setTimers] = useState([]);
    const [timerInput, setTimerInput] = useState(null);

    const addTimer = () => {
        if (timers.length >= 5) {
            alert('Only up to 5 timers can be added');
            return;
        }
        const timerValue = (timerInput || 1) * 60;
        setTimers([...timers, { id: timers.length + 1, orgTime: timerValue, curTime: timerValue, status: 'running' }]);
    };

    const startTimer = (id) => {
        setTimers((prevTimers) =>
            prevTimers.map((timer) =>
                timer.id === id ? { ...timer, status: 'running' } : timer
            )
        );
    };

    const pauseTimer = (id) => {
        setTimers((prevTimers) =>
            prevTimers.map((timer) =>
                timer.id === id ? { ...timer, status: 'stopped' } : timer
            )
        );
    };

    const resetTimer = (id) => {
        setTimers((prevTimers) =>
            prevTimers.map((timer) =>
                timer.id === id ? { ...timer, curTime: timer.orgTime, status: 'stopped' } : timer
            )
        );
    };

    const deleteTimer = (id) => {
        setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
    };

    const updateTimer = (id, newTime) => {
        setTimers((prevTimers) =>
            prevTimers.map((timer) =>
                timer.id === id ? { ...timer, curTime: newTime } : timer
            )
        );
    };

    return (
        <>
            <input
                type="number"
                value={timerInput}
                onChange={(e) => setTimerInput(Number(e.target.value))}
                placeholder="Set timer in Minutes"
            />
            <button onClick={addTimer}>Add Timer (Max 5)</button>

            {timers.map((timer) => (
                <div key={timer.id} style={{ backgroundColor: '#e0e0e0', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
                    <Timer id={timer.id} time={timer.curTime} status={timer.status} updateTimer={updateTimer} />
                    <button onClick={() => startTimer(timer.id)}>Start</button>
                    <button onClick={() => pauseTimer(timer.id)}>Pause</button>
                    <button onClick={() => resetTimer(timer.id)}>Reset</button>
                    <button onClick={() => deleteTimer(timer.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}

const Timer = ({ id, time, status, updateTimer }) => {

    useEffect(() => {
        if (status !== 'running' || time <= 0) return;

        const interval = setInterval(() => {
            updateTimer(id, time - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [status, time, updateTimer]);

    return (
        <div style={{ marginRight: '10px', color: '#000', display: 'flex', flexDirection: 'column' }}>
            <h1>Timer No: {id}</h1>
            <h3>Remaining time:</h3>
            <p>{time > 0 ? `${time} sec` : "Time's up!"}</p>
        </div>
    );
};
