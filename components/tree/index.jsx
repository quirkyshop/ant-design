import React from 'react';
import Tree from 'rc-tree';
import animation from '../common/openAnimation';

const AntTree = React.createClass({
  getDefaultProps() {
    return {
      prefixCls: 'ant-tree',
      checkable: false,
      showIcon: false,
      openAnimation: animation,
    };
  },
  render() {
    const props = this.props;
    let checkable = props.checkable;
    if (checkable) {
      checkable = <span className={`${props.prefixCls}-checkbox-inner`}></span>;
    }
    return (
      <Tree {...props} checkable={checkable}>
        {this.props.children}
      </Tree>
    );
  }
});

AntTree.TreeNode = Tree.TreeNode;
export default AntTree;
