import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import ListNode, { Node } from './list-node';
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles';

import { PropsMenuItem } from './types';

const tree = [
    {
        'path': '/menu/',
        'title': 'Меню3434',
        'permission': 'menu.read'
    },
    {
        'path': '/auth/',
        'title': 'Авторизация',
        'items': [
            {
                'path': '/auth/users/',
                'title': 'Пользователи',
                'permission': 'auth.services.read'
            },
            {
                'path': '/auth/services/',
                'title': 'Сервисы',
                'items': [
                    {
                        'path': '/auth/user/',
                        'title': 'Пользовател',
                        'permission': 'auth.services.read'
                    },
                    {
                        'path': '/auth/services/',
                        'title': 'Сервисы',
                        'permission': 'auth.services.read'
                    },
                    {
                        'path': '/auth/roles/',
                        'title': 'Роли',
                        'permission': 'auth.roles.read'
                    },
                    {
                        'path': '/auth/permissions/',
                        'title': 'Права',
                        'permission': 'auth.permissions.read'
                    }
                ]
            },
            {
                'path': '/auth/roles/',
                'title': 'Роли',
                'permission': 'auth.roles.read'
            },
            {
                'path': '/auth/permissions/',
                'title': 'Права',
                'permission': 'auth.permissions.read'
            },
            {
                'path': '/auth/permissions/',
                'title': 'Права',
                'permission': 'auth.permissions.read'
            }
        ]
    },
    {
        'path': '/resources/',
        'title': 'Ресурсы',
        'items': [
            {
                'path': '/resources/folders/',
                'title': 'Папки',
            },
            {
                'path': '/resources/resources/',
                'title': 'Ресурсыs',
                'permission': 'resources.resources.read'
            }
        ]
    },
];

let menuOption = {
    onClick: function(e: React.MouseEvent<{}>, path: string) {
        menuOption = { ...menuOption, pathname: path };
    },
    pathname: '/auth/users/clients/',
    auth: { accessToken: '', permission: {}, roles: { superuser: true } }
};

export interface Props {
    menuOption?: PropsMenuItem;
}

const styles = (theme: Theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
});

class ListTree extends React.Component<Props & WithStyles<'root'>> {

    render() {
        const { classes, menuOption: option } = this.props;

        return (
            <div className={classes.root}>
                <List
                    component='nav'
                    subheader={
                        <ListSubheader component='div'>Nested List Items</ListSubheader>
                    }
                >
                    { tree.map((node: Node, index: number)  => <ListNode key={index} menuOption={option} item={node}/>) }
                </List>
            </div>
        );
    }
}

const ListTreeWithStyles = withStyles(styles)<Props>(ListTree);

export default () => (<ListTreeWithStyles menuOption={menuOption} />);
