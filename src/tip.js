import './index.less';

import React from 'react';
import classNames from 'classnames';

export default class Tip extends React.Component {
  componentWillMount() {
    const { timeout, close } = this.props;

    let tid = setTimeout(() => {
      close.call(null, tid);
    }, timeout);
  }

  render() {
    let { index, close, tip } = this.props;

    return (
      <div
        className="poptip-cnt"
        onClick={close}>
        <i className={classNames('icon', 'icon-' + tip.type)}></i>{tip.msg}
      </div>
    );
  }
}
