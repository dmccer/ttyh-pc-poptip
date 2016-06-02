import './index.less';

import React from 'react';
import classNames from 'classnames';
import TTimers from 'ttyh-timers';

@TTimers
export default class Tip extends React.Component {
  componentWillMount() {
    let props = this.props;
    props.setTimeout(props.close, props.timeout);
  }

  render() {
    let { index, close, ...tip } = this.props;

    return (
      <div
        className="poptip-cnt"
        onClick={close}>
        <i className={classNames('icon', 'icon-' + tip.type)}></i>{tip.msg}
      </div>
    );
  }
}
