import React from 'react';
import { InputNumber } from 'antd';

import './Counter.scss';

interface CounterProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onMount?: (value: number) => void;
  isInput?: boolean;
}

const Counter: React.FC<CounterProps> = ({
  min,
  max,
  value = 0,
  onChange,
  onIncrease,
  onDecrease,
  onMount,
  isInput = true,
}) => {
  const [stateValue, setStateValue] = React.useState(value);
  React.useEffect(() => {
    onMount && onMount(stateValue);
  }, []);
  const handleDecrease = () => {
    let curValue: number = stateValue;
    if (min !== undefined) {
      if (stateValue - 1 >= min) {
        curValue = stateValue - 1;
        setStateValue(stateValue - 1);
      }
    } else {
      curValue = stateValue - 1;
      setStateValue(stateValue - 1);
    }
    onChange && onChange(curValue);
    onDecrease && onDecrease();
  };

  const handleIncrease = () => {
    let curValue: number = stateValue;
    if (max) {
      if (stateValue + 1 <= max) {
        curValue = stateValue + 1;
        setStateValue(stateValue + 1);
      }
    } else {
      curValue = stateValue + 1;
      setStateValue(stateValue + 1);
    }
    onChange && onChange(curValue);
    onIncrease && onIncrease();
  };

  const handleChange = (value: any) => {
    if (max && value <= max) {
      onChange && onChange(value);
      setStateValue(value);
    }
  };

  return (
    <div className="counter">
      <div className="counter__btn" onClick={handleDecrease}></div>
      {/* <div className="counter__content text text-gradient">{stateValue}</div> */}
      {isInput ? (
        <InputNumber
          className="counter__content text text-gradient"
          value={stateValue}
          onChange={handleChange}
        />
      ) : (
        <div className="counter__content counter__content-noinput text text-gradient">
          {stateValue}
        </div>
      )}
      <div
        className="counter__btn counter__plus"
        onClick={handleIncrease}></div>
    </div>
  );
};

export default React.memo(Counter);
