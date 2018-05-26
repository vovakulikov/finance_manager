import * as React from 'react';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import { PropsMenuItem } from './types';

const styles = (theme: Theme) => ({
    active: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: 'rgba(0, 0, 0, 0.87)',
    }
});

export interface Node {
    path: string;
    items?: Node[];
    permission?: string;
    title: string;
}

interface StateNode {
    isOpen: boolean;
}

interface Props {
    item: Node;
    menuOption: PropsMenuItem;
    insertLevel?: number;
}

const PADDING_INSERT = 15;

class ListNode extends React.Component<Props & WithStyles<'active'>, StateNode> {

    static defaultProps: Partial<Props> = { insertLevel: 0 };

    state: StateNode = { isOpen: this.hasActive() };

    getInitialyOpenState() {
        const {} = this.props;
    }

    toogleState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    execListNodeAction = (e: React.MouseEvent<{}>) => {
        const { item } = this.props;
        const hasChildren = (item.items && item.items.length);

        hasChildren ? this.toogleState() : this.props.menuOption.onClick(e, item.path);
    }

    hasActive() {
        return this.props.menuOption.pathname.indexOf(this.props.item.path) === 0;
    }

    renderIcon() {
        return (this.state.isOpen ? <ExpandLess /> : <ExpandMore />);
    }

    renderSubNodes({ items }: Node): any {
        const { menuOption, insertLevel } = this.props;
        const { isOpen } = this.state;
        const nextInsertLevel = insertLevel + 1;

        return (
            <Collapse in={isOpen} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    { items.map((node: Node, index: number)  =>
                        <ListNodeWithStyles insertLevel={nextInsertLevel} menuOption={menuOption} key={index} item={node}/>) }
                </List>
            </Collapse>
        );
    }

    render() {
        const { item, classes, insertLevel } = this.props;
        const hasChildren = !!(item.items && item.items.length);
        const classesString = `${((this.hasActive() && !hasChildren) ? classes.active : '')}`;

        return (
            <React.Fragment>

                <ListItem button className={classesString} onClick={this.execListNodeAction}>
                    <ListItemText style={{ paddingLeft: `${insertLevel * PADDING_INSERT}px`}} primary={item.title} />
                    { hasChildren && this.renderIcon()}
                </ListItem>

                { hasChildren && this.renderSubNodes(item) }
            </React.Fragment>
        );
    }
}

const ListNodeWithStyles =  withStyles(styles)<Props>(ListNode);

export default ListNodeWithStyles;


