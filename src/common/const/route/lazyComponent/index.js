import React from 'react';
import {Spin} from 'antd';

export default function lazyComponent(path, model) {

  return class extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
      super(props);
      this.state = {
        loadCom: null,
      };
    }

    componentDidMount() {
      import(`pages/${path}`).then(res => {
        this.setState({
          loadCom: res.default,
        });
      });
    }

    render() {
      const {loadCom: LoadCom} = this.state;
      if (!this.state.loadCom) {
        return (
          <Spin size="large" style={{width: '100%', margin: '40px 0'}} />
        );
      }

      return <LoadCom {...this.props}/>;
    }
  };
}