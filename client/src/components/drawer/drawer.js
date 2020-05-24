import React from 'react';
import './drawer.css'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    > <div className='cross'>
      X<ClearRoundedIcon/>
    </div>
      
      <button type="button" class="btn btn-primary  drawer-project" >BECOME A PARTNER</button>
      <hr align='center' width='85%' color='#f78fb3'/>
      <Divider />
      <div>
        <p>NEED HELP?</p>
              <span>
               <i className="fas fa-phone-alt"></i>
                  
                 <span className='demo'>Want a demo?</span><br/>
                <a href='#' className='sales'>Talk to Sales <span className='ref'>(Free)</span></a></span> 
                <hr align='center' width='85%' />
                <i class="fas fa-user-tie"></i>
                <span className='demo'>Want Help With Specing?</span><br/>
                <a href='#' className='sales'>Talk To Expert <span className='ref'>(Refundable)</span></a>
                </div>
    </div>
  );

  return (
    <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><i className="fas fa-bars fa-2x" style={{color:'rgb(0, 112, 224)',verticalAlign:'center' }}></i>
           </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} className='drawer'>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
