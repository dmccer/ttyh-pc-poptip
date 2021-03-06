import './index.less';

import React from 'react';
import classNames from 'classnames';
import Tip from './tip';

import { EE } from './ee';

export default class TipContainer extends React.Component {
  state = {
    tips: []
  };

  show(type: string, msg: string, timeout=3000: number) {
    const tip = {
      type: type,
      msg: msg,
      timeout: timeout
    };

    const tips = this.state.tips;

    // 同一提示不重复显示
    let hasTip = tips.filter((item) => {
      return tip.type === item.type && tip.msg === item.msg;
    });

    if (hasTip && hasTip.length) {
      return;
    }

    tips.push(tip);

    this.setState({ tips });
  }

  componentDidMount() {
    EE.on('add/tip', this.show.bind(this));
  }

  componentWillUnmount() {
    EE.removeListener('add/tip');
  }

  close(tid, tip: Object) {
    tid && clearTimeout(tid);

    let tips = this.state.tips;
    const index = tips.indexOf(tip);
    tips.splice(index, 1);
    this.setState({ tips });
  }

  render() {
    let tipList = this.state.tips.map((tip, index) => {
      return (
        <Tip
          key={`tip_item_${index}`}
          close={this.close.bind(this, tip)}
          timeout={tip.timeout}
          tip={tip}
        />
      );
    });

    return (
      <section className="poptip">
        {tipList}
      </section>
    );
  }
}
