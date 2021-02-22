import React from 'react';
import '../styles/Toggle.scss';

export interface ToggleProps {
  isOn: boolean;
  handleToggle: () => void;
}

function Toggle(props: ToggleProps): JSX.Element {
  const { isOn, handleToggle } = props;

  return (
    <div id={'toggle-container'}>
      <span>Auto Navigate</span>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={'toggle-checkbox'}
        id={'toggle'}
        type="checkbox"/>
      <label
        style={isOn ? { background: '#FEC600CC' } : {}}
        id={'toggle-label'}
        htmlFor={'toggle'}>
        <span id={'toggle-button'}/>
      </label>
    </div>
  );
}

export default Toggle;