import React, { PureComponent } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'

export default class SurveyModal extends PureComponent {
  render () {
    const { title, createDate, owner, questions } = this.props.survey

    return (
      <Modal trigger={<Button>OpenModal</Button>}>
        <Modal.Header>
          Modal Header
        </Modal.Header>
        <Modal.Content>
          Content Here
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
    // return (
    //   <div className='modal fade' id='survey-modal' tabIndex='-1' role='dialog' aria-labelledby='myModalLabel'>
    //     <div className='modal-dialog' role='document'>
    //       <div className='modal-content'>
    //         <div className='modal-header'>
    //           <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
    //             <span aria-hidden='true'>×</span>
    //           </button>
    //           <h4 className='modal-title' id='my-modal-label'>{`${title} (${owner})`}</h4>
    //           <p>{createDate}</p>
    //         </div>
    //         <div className='modal-body'>
    //           {
    //             (questions)
    //             ? questions
    //               .map((question, i) => (
    //                 <p key={i}>{question.head}</p>
    //               ))
    //             : <p>Sorry no questions here</p>
    //           }
    //         </div>
    //         <div className='modal-footer'>
    //           <button type='button' className='btn btn-warning' data-dismiss='modal'>Close</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )
  }
}
