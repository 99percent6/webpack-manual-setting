import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Priority from './Priority';
import TaskLabelEdit from './TaskLabelEdit';
import PeriodOfExecution from './PeriodOfExecution';
import Project from './Project';
import '../../../css/components/todoList/base.scss';

const styles = theme => ({
  paperFullWidth: {
    margin: '10px',
  },
  title: {
    wordBreak: 'break-all',
  },
});

class DialogEditOptions extends Component {
  static defaultProps = {
    maxWidth: 'md',
    fullWidth: true,
  };

  render() {
    const { maxWidth, fullWidth, open, onCloseDialog, onSaveTask, task, classes } = this.props;

    return (
      <React.Fragment>
        <Dialog
          classes={{
            paperFullWidth: classes.paperFullWidth
          }}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={onCloseDialog}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title" className={classes.title}>{ task.text }</DialogTitle>
          <DialogContent>
            <TaskLabelEdit/>
            <div className="options-container">
              <Priority/>
              <PeriodOfExecution/>
              <Project/>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onSaveTask} color="primary">
              Сохранить
            </Button>
            <Button onClick={onCloseDialog} color="secondary">
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DialogEditOptions);