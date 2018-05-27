import * as React from 'react';
// import Drawer from '@material-ui/core/Drawer';
// import classNames from 'classnames';

// import ListTree from './components/list-tree';
// import { withStyles, WithStyles } from '@material-ui/core/styles';


type Props = {};

type State = {
    counter: number;
};

class AppCounter extends React.Component<Props, State> {
    state = { counter: 0 };

    componentDidMount() {
        setInterval(() => this.increment(), 100);
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1000 });
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <div>
                        hello world3
                        {/* <Drawer classes={{ paper: classes.drawerPaper}} variant='permanent' >
                            <ListTree/>
                        </Drawer> */}
                    </div>

                    <main >
                        <div>'You think waterr moves fast? You should see ice3.'} {this.state.counter}</div>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

export default AppCounter;
