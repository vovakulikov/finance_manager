import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';

import ListTree from './components/list-tree';
import { withStyles, WithStyles } from '@material-ui/core/styles';

const drawerWidth = 400;
const styles = {
    appFrame: {
        display: 'flex',
    },
    drawerPaper: {
        width: drawerWidth,
        height: '100%'
    },
    drawerFrame: {

    },
    content: {
        flexGrow: 1,
        height: '2001px'
    },
};

type Props = {};
type Style = WithStyles<'appFrame' | 'content' | 'draweFrame' | 'drawerPaper'>;

type State = {
    counter: number;
};

class AppCounter extends React.Component<Props & Style, State> {
    state = { counter: 0 };

    componentDidMount() {
        setInterval(() => this.increment(), 100);
    }

    increment = () => {
        this.setState({ counter: this.state.counter - 1000 });
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.appFrame}>
                    <div className={classes.drawerPaper}>
                        <Drawer classes={{ paper: classes.drawerPaper}} variant='permanent' >
                            <ListTree/>
                        </Drawer>
                    </div>

                    <main className={classes.content}>
                        <div>'You think waterr moves fast? You should see ice3.'} {this.state.counter}</div>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)<any>(AppCounter);
